import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General rules — all crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/admin",
          "/api/",
          "/_next/",
          "/_error",
          "/_not-found",
          "/login/",
          "/login",
          "/signin/",
          "/signup/",
          "/register/",
          "/dashboard/",
          "/cms/",
          "/panel/",
          "/preview/",
          "/draft/",
          "/staging/",
          "/test/",
          "/debug/",
          "/tmp/",
          "/private/",
          "/internal/",
          "/search",
          "/search/",
          "/print/",
          "/feed/",
          "/feed",
          "/404",
          "/500",
          "/error/",
          "/maintenance",
          "/.git/",
          "/.env",
          "/.next/",
          "/node_modules/",
        ],
      },

      // Googlebot — full access, no crawl-delay
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/_next/", "/api/", "/admin/", "/preview/", "/draft/", "/search"],
      },

      // Bingbot — powers Copilot + DuckDuckGo
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/_next/", "/api/", "/admin/", "/search"],
      },

      // Google AI (Gemini, AI Overviews, Vertex AI, Project Mariner)
      {
        userAgent: [
          "Google-Extended",
          "Google-CloudVertexBot",
          "Gemini-Deep-Research",
          "GoogleAgent-Mariner",
        ],
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // OpenAI (ChatGPT, ChatGPT Search, GPT-4, Operator)
      {
        userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User"],
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // Anthropic (Claude AI, Claude Search)
      {
        userAgent: [
          "ClaudeBot",
          "anthropic-ai",
          "Claude-User",
          "Claude-SearchBot",
          "claude-web",
        ],
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // Perplexity AI
      {
        userAgent: ["PerplexityBot", "Perplexity-User"],
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // xAI / Grok
      {
        userAgent: ["GrokBot", "xAI-Grok", "Grok-DeepSearch"],
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // Meta AI (Llama, WhatsApp AI, Instagram AI)
      {
        userAgent: [
          "FacebookBot",
          "meta-externalagent",
          "meta-externalfetcher",
          "Meta-WebIndexer",
        ],
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // Apple (Siri, Safari Suggestions, Apple Intelligence)
      {
        userAgent: ["Applebot", "Applebot-Extended"],
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // Amazon (Alexa, Amazon Q)
      {
        userAgent: "Amazonbot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // Microsoft DuckDuckGo AI
      {
        userAgent: "DuckAssistBot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // Mistral AI
      {
        userAgent: "MistralAI-User",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // Cohere AI
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // You.com (YouChat)
      {
        userAgent: "YouBot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // Common Crawl (trains many AI models)
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // Allen Institute for AI
      {
        userAgent: ["AI2Bot", "AI2Bot-Dolma"],
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // ByteDance (TikTok search, Doubao AI)
      {
        userAgent: ["Bytespider", "TikTokSpider"],
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // Diffbot (AI-powered web data extraction)
      {
        userAgent: "Diffbot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // Social media crawlers (link previews)
      {
        userAgent: [
          "Twitterbot",
          "LinkedInBot",
          "WhatsApp",
          "Slackbot",
          "TelegramBot",
          "Discordbot",
          "PinterestBot",
          "Quora-Bot",
        ],
        allow: "/",
      },

      // Googlebot variants
      {
        userAgent: ["Googlebot-Image", "Googlebot-Video"],
        allow: "/",
      },
      {
        userAgent: "Googlebot-News",
        allow: ["/blog/", "/news/", "/events/"],
      },

      // SEO tool crawlers
      {
        userAgent: [
          "Screaming Frog SEO Spider",
          "SemrushBot",
          "AhrefsBot",
          "DotBot",
          "MJ12bot",
          "SiteAuditBot",
          "Moz",
        ],
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // Other AI/search crawlers
      {
        userAgent: [
          "YandexBot",
          "Baiduspider",
          "Yeti",
          "PetalBot",
          "webzio-extended",
          "ICC-Crawler",
          "Timpibot",
          "omgili",
          "ImagesiftBot",
        ],
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },

      // Block known spam/scraper bots
      {
        userAgent: [
          "MauiBot",
          "SeznamBot",
          "SemrushBot-BA",
          "SemrushBot-OCOB",
          "BLEXBot",
          "DataForSeoBot",
          "magpie-crawler",
          "AhrefsSiteAudit",
          "Sogou",
          "AspiegelBot",
          "PanguBot",
          "Sentibot",
          "AwarioBot",
          "AwarioSmartBot",
          "AwarioRssBot",
          "VelenPublicWebCrawler",
          "TurnitinBot",
          "img2dataset",
          "Kangaroo Bot",
          "zoominfobot",
          "Seekport",
          "Buck",
          "newspaper",
        ],
        disallow: "/",
      },
    ],
    sitemap: "https://cas.jkkn.ac.in/sitemap.xml",
    host: "https://cas.jkkn.ac.in",
  };
}
