const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = 'D:/Sangeetha_V/cas-website/mobile-screenshots';

const PAGES = [
  // Home
  { url: '/', name: '01-home' },
  // About
  { url: '/about/our-institution', name: '02-about-institution' },
  { url: '/about/our-trust', name: '03-about-trust' },
  { url: '/about/vision-mission', name: '04-about-vision-mission' },
  { url: '/about/our-management', name: '05-about-management' },
  // Aided UG
  { url: '/programmes/aided/ug/ba-english', name: '06-aided-ug-ba-english' },
  { url: '/programmes/aided/ug/ba-history', name: '07-aided-ug-ba-history' },
  { url: '/programmes/aided/ug/bsc-chemistry', name: '08-aided-ug-bsc-chemistry' },
  { url: '/programmes/aided/ug/bsc-maths', name: '09-aided-ug-bsc-maths' },
  { url: '/programmes/aided/ug/bsc-zoology', name: '10-aided-ug-bsc-zoology' },
  { url: '/programmes/aided/ug/bcom', name: '11-aided-ug-bcom' },
  // Aided PG
  { url: '/programmes/aided/pg/mca', name: '12-aided-pg-mca' },
  { url: '/programmes/aided/pg/mcom', name: '13-aided-pg-mcom' },
  { url: '/programmes/aided/pg/msc-chemistry', name: '14-aided-pg-msc-chemistry' },
  { url: '/programmes/aided/pg/msc-computer-science', name: '15-aided-pg-msc-cs' },
  { url: '/programmes/aided/pg/msc-physics', name: '16-aided-pg-msc-physics' },
  { url: '/programmes/aided/pg/msc-zoology', name: '17-aided-pg-msc-zoology' },
  // Aided PhD
  { url: '/programmes/aided/phd/chemistry', name: '18-aided-phd-chemistry' },
  { url: '/programmes/aided/phd/tamil', name: '19-aided-phd-tamil' },
  { url: '/programmes/aided/phd/zoology', name: '20-aided-phd-zoology' },
  // Self-Finance UG
  { url: '/programmes/self-finance/ug/bca', name: '21-sf-ug-bca' },
  { url: '/programmes/self-finance/ug/bcom-accounting-finance', name: '22-sf-ug-bcom-af' },
  { url: '/programmes/self-finance/ug/bcom-banking-insurance', name: '23-sf-ug-bcom-bi' },
  { url: '/programmes/self-finance/ug/bsc-computer-science', name: '24-sf-ug-bsc-cs' },
  { url: '/programmes/self-finance/ug/bsc-ai-ds', name: '25-sf-ug-bsc-ai-ds' },
  { url: '/programmes/self-finance/ug/bsc-microbiology', name: '26-sf-ug-bsc-micro' },
  { url: '/programmes/self-finance/ug/bsc-physics', name: '27-sf-ug-bsc-physics' },
  { url: '/programmes/self-finance/ug/bsc-textile-fashion-designing', name: '28-sf-ug-textile' },
  { url: '/programmes/self-finance/ug/bsc-visual-communication', name: '29-sf-ug-visual-comm' },
  // Self-Finance PG
  { url: '/programmes/self-finance/pg/mcom', name: '30-sf-pg-mcom' },
  { url: '/programmes/self-finance/pg/ma-english', name: '31-sf-pg-ma-english' },
  { url: '/programmes/self-finance/pg/msc-computer-science', name: '32-sf-pg-msc-cs' },
  { url: '/programmes/self-finance/pg/msc-cs-data-analytics', name: '33-sf-pg-msc-da' },
  // IQAC
  { url: '/iqac/naac', name: '34-iqac-naac' },
  // Facilities
  { url: '/facilities/library', name: '35-facilities-library' },
  { url: '/facilities/hostel', name: '36-facilities-hostel' },
  { url: '/facilities/sports', name: '37-facilities-sports' },
  // Others
  { url: '/library', name: '38-library' },
  { url: '/contact', name: '39-contact' },
];

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true,
  });

  const page = await context.newPage();
  const results = [];

  for (const p of PAGES) {
    try {
      console.log(`Checking: ${p.url}`);
      await page.goto(BASE_URL + p.url, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForTimeout(1000);
      
      // Take viewport screenshot (above the fold)
      const vpFile = path.join(OUTPUT_DIR, `${p.name}-viewport.png`);
      await page.screenshot({ path: vpFile, fullPage: false });
      
      // Take full page screenshot
      const fullFile = path.join(OUTPUT_DIR, `${p.name}-full.png`);
      await page.screenshot({ path: fullFile, fullPage: true });
      
      // Get page title
      const title = await page.title();
      results.push({ url: p.url, name: p.name, status: 'ok', title });
      console.log(`  OK ${p.name} — "${title}"`);
    } catch (err) {
      results.push({ url: p.url, name: p.name, status: 'error', error: err.message });
      console.log(`  ERROR ${p.name}: ${err.message}`);
    }
  }

  await browser.close();

  // Write summary
  const summaryPath = path.join(OUTPUT_DIR, 'summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify(results, null, 2));
  console.log('\nDone! Summary written to:', summaryPath);
  
  const ok = results.filter(r => r.status === 'ok');
  const errors = results.filter(r => r.status === 'error');
  console.log(`\nTotal: ${results.length} | OK: ${ok.length} | Errors: ${errors.length}`);
  if (errors.length > 0) {
    console.log('\nFailed pages:');
    errors.forEach(r => console.log(`  - ${r.url}: ${r.error}`));
  }
}

main().catch(console.error);
