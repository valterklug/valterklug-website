#!/usr/bin/env node
/**
 * LinkedIn Image Downloader
 * Run: node scripts/download-images.mjs
 *
 * Downloads LinkedIn article hero images that can't be hotlinked.
 * Saves them to public/news/ for local hosting.
 *
 * Note: LinkedIn images require browser cookies. You may need to:
 * 1. Open the image URL in your browser
 * 2. Right-click > Save Image As > save to public/news/
 * OR use this script if the URLs are publicly accessible.
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const IMG_DIR = resolve(__dirname, '../public/news')

if (!existsSync(IMG_DIR)) mkdirSync(IMG_DIR, { recursive: true })

const LINKEDIN_IMAGES = [
  {
    filename: 'samba-rock-chameleon.jpg',
    url: 'https://media.licdn.com/dms/image/v2/D4E12AQFlqKE_7fsAEg/article-cover_image-shrink_720_1280/B4EZqCwBrAHoAI-/0/1763130220631',
  },
  {
    filename: 'focus-groups.jpg',
    url: 'https://media.licdn.com/dms/image/v2/D4E12AQF6Ykz8COqI6A/article-cover_image-shrink_600_2000/B4EZlZY_dbIIAQ-/0/1758141352380',
  },
  {
    filename: 'growth-intelligence.jpg',
    url: 'https://media.licdn.com/dms/image/v2/D4E12AQFeg_BUW59g_A/article-cover_image-shrink_720_1280/B4EZkapSELHEAI-/0/1757088654057',
  },
  {
    filename: 'usp.jpg',
    url: 'https://media.licdn.com/dms/image/v2/D4D12AQHS0Tc_5MRy2Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1722363985785',
  },
  {
    filename: 'advertising-work.jpg',
    url: 'https://media.licdn.com/dms/image/v2/D4D12AQHXzvgk68XCmg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721849746488',
  },
  {
    filename: 'seo-work.jpg',
    url: 'https://media.licdn.com/dms/image/v2/D4E12AQF1LdJACbUSOQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721171854002',
  },
  {
    filename: 'retail-success.jpg',
    url: 'https://media.licdn.com/dms/image/v2/D4D12AQFvSFyYFc4N8w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721191066862',
  },
  {
    filename: 'ugc-creators.jpg',
    url: 'https://media.licdn.com/dms/image/v2/D4D12AQFJkkpq-ugIvQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1713292035252',
  },
  {
    filename: 'stuck-feeling.jpg',
    url: 'https://media.licdn.com/dms/image/v2/D5612AQE7vSp2ATeYnA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711484224344',
  },
  {
    filename: 'amp-brand.jpg',
    url: 'https://media.licdn.com/dms/image/v2/D4D12AQERGY1hLjJ7TQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710440035252',
  },
  {
    filename: 'maison-sr.jpg',
    url: 'https://media.licdn.com/dms/image/v2/D4D12AQGmGa-NPSXNaw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707241990808',
  },
  {
    filename: '10000-businesses.jpg',
    url: 'https://media.licdn.com/dms/image/v2/D4E12AQFl6nUWpDdbpQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1703005835812',
  },
  {
    filename: 'social-media-dilemma.jpg',
    url: 'https://media.licdn.com/dms/image/v2/D4E12AQGS3AB1FMaHkw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1692630711709',
  },
  {
    filename: 'going-global.jpg',
    url: 'https://media.licdn.com/dms/image/v2/D4D12AQGYOnf4QDO2yg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1689622877582',
  },
  {
    filename: 'localization.jpg',
    url: 'https://media.licdn.com/dms/image/v2/D5612AQGXnKCQOeCICA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1688406543498',
  },
]

async function downloadImage({ filename, url }) {
  try {
    const resp = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Accept': 'image/*,*/*',
      }
    })
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
    const buffer = Buffer.from(await resp.arrayBuffer())
    const filePath = resolve(IMG_DIR, filename)
    writeFileSync(filePath, buffer)
    console.log(`  ✓ ${filename} (${(buffer.length / 1024).toFixed(0)} KB)`)
  } catch (err) {
    console.log(`  ✗ ${filename}: ${err.message}`)
    console.log(`    → Manual download: open the LinkedIn article, right-click the hero image, save to public/news/${filename}`)
  }
}

async function main() {
  console.log('\\nDownloading LinkedIn article images...\\n')
  console.log(`Output: ${IMG_DIR}\\n`)

  for (const img of LINKEDIN_IMAGES) {
    await downloadImage(img)
    await new Promise(r => setTimeout(r, 300))
  }

  console.log('\\nDone!')
  console.log('\\nIf any images failed, you can manually save them:')
  console.log('1. Open the LinkedIn article in your browser')
  console.log('2. Right-click the hero image > Save Image As')
  console.log('3. Save to public/news/ with the filename shown above\\n')
}

main()
