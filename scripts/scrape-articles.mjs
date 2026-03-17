#!/usr/bin/env node
/**
 * Article Content Scraper
 * Run: node scripts/scrape-articles.mjs
 *
 * Fetches article content from Forbes, Samba Rock, and LinkedIn (public only)
 * and generates JS content files in src/data/content/
 *
 * LinkedIn articles require authentication — those will be scraped separately
 * or can be added manually.
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const CONTENT_DIR = resolve(__dirname, '../src/data/content')

if (!existsSync(CONTENT_DIR)) mkdirSync(CONTENT_DIR, { recursive: true })

// Articles to scrape (Forbes + Samba Rock — no auth needed)
const SCRAPABLE = [
  // Forbes
  { slug: 'innovative-strategies-revitalizing-stagnant-brands', url: 'https://www.forbes.com/councils/forbesbusinesscouncil/2024/02/07/innovative-strategies-for-revitalizing-stagnant-brands/', selector: 'article' },
  { slug: 'your-startup-is-no-longer-just-starting-up', url: 'https://www.forbes.com/councils/forbesbusinesscouncil/2023/12/12/your-startup-is-no-longer-just-starting-up-whats-next/', selector: 'article' },
  { slug: 'navigating-the-american-dream', url: 'https://www.forbes.com/councils/forbesbusinesscouncil/2023/10/24/navigating-the-american-dream-a-guide-for-international-brands/', selector: 'article' },
  { slug: 'translating-chess-tactics', url: 'https://www.forbes.com/councils/forbesbusinesscouncil/2023/08/22/translating-chess-tactics-into-entrepreneurial-triumphs/', selector: 'article' },
  { slug: 'thinking-outside-the-borders', url: 'https://www.forbes.com/councils/forbesbusinesscouncil/2023/07/07/thinking-outside-the-borders-brazilian-e-commerce-opportunities/', selector: 'article' },
  { slug: 'making-lemonade', url: 'https://www.forbes.com/councils/forbesbusinesscouncil/2023/05/30/making-lemonade-turning-a-layoff-into-an-opportunity/', selector: 'article' },
  { slug: 'unlocking-power-of-ai', url: 'https://www.forbes.com/councils/forbesbusinesscouncil/2023/05/01/unlocking-the-power-of-ai-in-marketing-and-business-development/', selector: 'article' },
  // Samba Rock
  { slug: 'overcoming-top-4-business-pains', url: 'https://www.sambarock.us/news/overcoming-the-top-4-business-pains', selector: '.blog-item-content-wrapper, article, .entry-content, .sqs-block-content' },
  { slug: 'ai-in-advertising', url: 'https://www.sambarock.us/news/ai-in-advertising', selector: '.blog-item-content-wrapper, article, .entry-content, .sqs-block-content' },
  { slug: 'samba-rock-new-brand-identity', url: 'https://www.sambarock.us/news/samba-rock-new-brand-identity', selector: '.blog-item-content-wrapper, article, .entry-content, .sqs-block-content' },
  { slug: 'cpg-marketing', url: 'https://www.sambarock.us/news/cpg-marketing', selector: '.blog-item-content-wrapper, article, .entry-content, .sqs-block-content' },
  { slug: 'from-layoff-to-launch', url: 'https://www.sambarock.us/news/from-young-and-rubicam-to-samba-rock', selector: '.blog-item-content-wrapper, article, .entry-content, .sqs-block-content' },
  { slug: 'competitive-insights', url: 'https://www.sambarock.us/news/competitive-insights-gaining-the-edge-in-a-crowded-marketplace', selector: '.blog-item-content-wrapper, article, .entry-content, .sqs-block-content' },
  { slug: 'estadao-interview', url: 'https://www.sambarock.us/news/blog-post-title-three-r6nzy', selector: '.blog-item-content-wrapper, article, .entry-content, .sqs-block-content' },
  { slug: 'importance-of-communication-brand-internationalization', url: 'https://www.sambarock.us/news/blog-post-title-two-w2pp9', selector: '.blog-item-content-wrapper, article, .entry-content, .sqs-block-content' },
  { slug: '10-tips-internationalize-brands', url: 'https://www.sambarock.us/news/blog-post-title-one-lh82n', selector: '.blog-item-content-wrapper, article, .entry-content, .sqs-block-content' },
  { slug: 'samba-rock-launched-in-brazil', url: 'https://www.sambarock.us/news/rndupa3xtskydopomzh6m4vdcoaq9k', selector: '.blog-item-content-wrapper, article, .entry-content, .sqs-block-content' },
]

// Simple HTML parser — extracts text from p, h2, h3, h4, li tags
function extractContent(html, selectorList) {
  // Use a very simple regex-based approach since we don't have JSDOM
  // First, find the article body area
  const blocks = []
  const tagRegex = /<(p|h2|h3|h4|li)[^>]*>([\s\S]*?)<\/\1>/gi
  let match
  while ((match = tagRegex.exec(html)) !== null) {
    let text = match[2]
      .replace(/<[^>]+>/g, '') // strip inner HTML tags
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()

    if (text.length < 25) continue
    // Skip known noise
    if (text.includes('window._mN') || text.includes('cnxel') || text.includes('iframe')) continue
    if (text.includes('Forbes Business Council is the foremost')) continue
    if (text.includes('Do I qualify')) continue
    if (text.includes('COUNCIL POST') || text.includes('Expertise from Forbes')) continue
    if (text.includes('PROMOTED') || text.includes('LOADING VIDEO')) continue

    blocks.push({ tag: match[1].toLowerCase(), text })
  }
  return blocks
}

function writeContentFile(slug, content) {
  const lines = content.map(c =>
    `  { tag: '${c.tag}', text: ${JSON.stringify(c.text)} }`
  )
  const fileContent = `export default [\n${lines.join(',\n')}\n]\n`
  const filePath = resolve(CONTENT_DIR, `${slug}.js`)
  writeFileSync(filePath, fileContent, 'utf-8')
  console.log(`  ✓ ${slug}.js (${content.length} blocks)`)
}

async function scrapeArticle({ slug, url }) {
  try {
    const resp = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    })
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
    const html = await resp.text()
    const content = extractContent(html, '')

    if (content.length === 0) {
      console.log(`  ⚠ ${slug}: no content found`)
      return
    }

    writeContentFile(slug, content)
  } catch (err) {
    console.log(`  ✗ ${slug}: ${err.message}`)
  }
}

async function main() {
  console.log('\\nScraping article content...\\n')
  console.log(`Output: ${CONTENT_DIR}\\n`)

  for (const article of SCRAPABLE) {
    await scrapeArticle(article)
    // Small delay to be polite
    await new Promise(r => setTimeout(r, 500))
  }

  console.log('\\nDone! For LinkedIn articles, add content files manually to src/data/content/')
  console.log('Format: export default [{ tag: "p", text: "..." }, ...]\\n')
}

main()
