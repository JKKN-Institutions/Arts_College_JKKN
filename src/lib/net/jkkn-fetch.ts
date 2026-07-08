/**
 * Resilient server-side fetch to www.jkkn.ai.
 *
 * On Vercel (Linux, no proxy) this is just the platform `fetch`. On Windows /
 * proxied dev environments, native fetch (undici) can hang or fail — so we route
 * through a proxy CONNECT tunnel when a proxy env var is set, and otherwise force
 * a direct IPv4 connection. Generalised from src/app/api/auth/login/route.ts.
 *
 * Node runtime only (uses node:https). Never import into Edge/Client code.
 */
import https from 'node:https';
import http from 'node:http';
import tls from 'node:tls';
import net from 'node:net';

function getProxy(): string | null {
  return (
    process.env.HTTPS_PROXY ||
    process.env.https_proxy ||
    process.env.HTTP_PROXY ||
    process.env.http_proxy ||
    null
  );
}

const PROXY = getProxy();
// Use the custom Node path only where native fetch is known to misbehave.
const USE_CUSTOM = !!PROXY || process.platform === 'win32';

function httpsRequest(
  targetUrl: URL,
  method: string,
  reqHeaders: Record<string, string>,
  body?: Buffer
): Promise<Response> {
  return new Promise((resolve, reject) => {
    function onResponse(res: http.IncomingMessage) {
      const chunks: Buffer[] = [];
      res.on('data', (c: Buffer) => chunks.push(c));
      res.on('end', () => {
        const h = new Headers();
        for (const [k, v] of Object.entries(res.headers)) {
          if (v) h.set(k, Array.isArray(v) ? v.join(', ') : v);
        }
        resolve(
          new Response(Buffer.concat(chunks), {
            status: res.statusCode ?? 200,
            headers: h,
          })
        );
      });
      res.on('error', reject);
    }

    const port = targetUrl.port ? parseInt(targetUrl.port, 10) : 443;
    const commonOpts: https.RequestOptions = {
      hostname: targetUrl.hostname,
      port,
      path: targetUrl.pathname + targetUrl.search,
      method: method.toUpperCase(),
      headers: reqHeaders,
    };

    if (PROXY) {
      const proxy = new URL(PROXY);
      const tunnel = http.request({
        hostname: proxy.hostname,
        port: parseInt(proxy.port || '8080', 10),
        method: 'CONNECT',
        path: `${targetUrl.hostname}:${port}`,
        headers: { Host: `${targetUrl.hostname}:${port}` },
      });

      tunnel.on('connect', (_res, socket) => {
        const tlsSocket = tls.connect({ socket, servername: targetUrl.hostname });
        tlsSocket.on('secureConnect', () => {
          const req = https.request(
            { ...commonOpts, createConnection: () => tlsSocket as unknown as net.Socket },
            onResponse
          );
          req.on('error', reject);
          if (body) req.write(body);
          req.end();
        });
        tlsSocket.on('error', reject);
      });

      tunnel.on('error', reject);
      tunnel.end();
    } else {
      // Direct connection, force IPv4 to bypass Windows IPv6 preference.
      const req = https.request({ ...commonOpts, family: 4 }, onResponse);
      req.on('error', reject);
      if (body) req.write(body);
      req.end();
    }
  });
}

/**
 * fetch-compatible call that works on Vercel and on Windows/proxied dev.
 */
export function jkknFetch(url: string | URL, init?: RequestInit): Promise<Response> {
  if (!USE_CUSTOM) {
    return fetch(url, init);
  }

  const targetUrl = new URL(url instanceof URL ? url.href : url.toString());

  let body: Buffer | undefined;
  if (init?.body) {
    body = Buffer.from(typeof init.body === 'string' ? init.body : String(init.body));
  }

  const headers: Record<string, string> = {};
  if (init?.headers) {
    const h = init.headers;
    if (h instanceof Headers) {
      h.forEach((v, k) => {
        headers[k] = v;
      });
    } else if (Array.isArray(h)) {
      (h as string[][]).forEach(([k, v]) => {
        headers[k] = v;
      });
    } else {
      Object.assign(headers, h);
    }
  }
  if (body) headers['content-length'] = String(body.byteLength);

  return httpsRequest(targetUrl, init?.method ?? 'GET', headers, body);
}
