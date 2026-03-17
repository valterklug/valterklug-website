import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PageWrapper, FadeIn, HoverLift } from '../components/Animate'

/* ── PORTFOLIO DATA (from current valterklug.com) ── */
const PROJECTS = [
  {
    id: 'bauducco-times-square',
    title: 'Bauducco Thanksgiving @ Times Square',
    thumbnail: '/bauducco-times-square.jpg',
    description: 'In Brazil, Bauducco Panettone represents a cherished Christmas tradition shared with loved ones. We brought this cultural moment to the United States by spotlighting families separated during Thanksgiving. At Times Square, in front of our digital billboard, we interviewed people with compelling stories and dynamically changed the billboard message in real time to send heartfelt messages to their distant loved ones. The campaign video went viral, reaching millions of viewers and earning Best in Show at the 2019 Addy Awards in Miami.',
    client: 'Bauducco Foods',
    agency: 'Samba Rock',
    year: '2019',
    category: 'CPG + OOH + Digital',
    accent: '#EA633F',
    awards: ['Best in Show - OOH - Addy\'s Miami'],
    videos: ['https://www.youtube.com/watch?v=rUG1Kv_ZQhk'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Valter Klug', 'Piare Encina'] },
      { title: 'Copywriter', names: ['Valter Klug'] },
      { title: 'Project Manager', names: ['Narmine Yamaguchi'] },
      { title: 'Production', names: ['Lemonade'] },
    ],
  },
  {
    id: 'natura-ai-videos',
    title: 'Natura AI Digital Marketing Videos',
    thumbnail: '/natura-ai.jpg',
    description: 'Samba Rock pioneered the use of generative AI for commercial video production, securing a recurring contract with Natura to produce 30-40 videos monthly. Leveraging cutting-edge technology including Google VEO3, Suno, 11 Labs, and Midjourney, we created high-quality digital marketing videos in record time — 100% produced with AI tools from soundtrack to voice-over to storyboards to final editing.',
    client: 'Natura &Co',
    agency: 'Samba Rock',
    year: '2025',
    category: 'AI + Video Production + Digital',
    accent: '#88E8F0',
    videos: ['https://youtube.com/shorts/_zqmJ8KnLog'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Jeff William', 'Valter Klug'] },
      { title: 'Copywriter', names: ['Alex Heilbronn'] },
      { title: 'Digital Strategist', names: ['Vitor Madureira'] },
      { title: 'AI Video Creator & Editor', names: ['Camila Tanabe'] },
      { title: 'Project Manager', names: ['Renata Shimabukuro'] },
    ],
  },
  {
    id: 'conchita',
    title: 'Conchita Foods - Abuela: The Key Ingredient',
    thumbnail: '/conchita-new-thumb.webp',
    description: 'The "Abuela - The Key Ingredient" campaign for Conchita Foods tapped into the emotional core of Latin American culinary heritage. Through influencer partnerships, street interviews with Cuban families, and heartwarming recipe videos, the campaign created an emotional bridge between product and cultural identity. Results: 2.3M users reached (440% increase), 1.7M video plays (280,000% increase), and a 50% decrease in cost per 1K people reached.',
    client: 'Conchita Foods',
    agency: 'Samba Rock',
    year: '2024',
    category: 'CPG + Multicultural + Social',
    accent: '#E8EB74',
    videos: ['https://youtu.be/3H28wRyZTMI', 'https://youtu.be/vbeKBdglaY8', 'https://youtu.be/zujtNMa2sJc', 'https://youtu.be/qU6vKB-tqP0', 'https://www.youtube.com/watch?v=vF6T_5mov7M'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Valter Klug', 'Jeff William'] },
      { title: 'Copywriter', names: ['Alex Heilbronn'] },
      { title: 'Project Manager', names: ['Aline Blanco'] },
      { title: 'Videographer / Editor', names: ['João Del Bianco Junior'] },
    ],
  },
  {
    id: 'cia-maritima',
    title: 'Cia Marítima - U.S. Market Launch',
    thumbnail: '/thumbnail_cia_maritima.jpg',
    description: 'Cia Marítima — the largest swimwear brand in Latin America — entered the U.S. in 2022 with two Florida stores and a new D2C e-commerce site. As creative director, Valter led the U.S. brand translation by curating photography and video from Brazil to fit American taste, building a cohesive visual language around sun-drenched color, confident silhouettes, and premium fabric detail.',
    client: 'Cia Marítima',
    agency: 'Samba Rock',
    year: '2022',
    category: 'Fashion + E-Commerce + Social',
    accent: '#EA633F',
    pdfs: [
      { url: '/CIA_SocialMedia_FEB_DG.pdf', title: 'Social Media Strategy - February' },
      { url: '/CIA_SocialMedia_March_V8.pdf', title: 'Social Media Strategy - March' },
      { url: '/CIA_SocialMedia_June_V6.pdf', title: 'Social Media Strategy - June' },
    ],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Valter Klug', 'Luiza Garcia'] },
      { title: 'Copywriter', names: ['Alejandro Garcia'] },
      { title: 'Project Manager', names: ['Giancarlo Avila'] },
    ],
  },
  {
    id: 'nature-conservancy',
    title: 'The Nature Conservancy - Social Media Growth in Latin America',
    thumbnail: '/nature-conservancy-new.jpg',
    description: 'In 2019, Samba Rock was invited by The Nature Conservancy — the world\'s largest conservation NGO — to participate in a competitive pitch for Agency of Record for the Latin American region. Over two years, we generated 228 million impressions, reached 10.3 million people, created 1.32 million engagements, and added 169,000 new followers. Instagram grew by an extraordinary 3,627% (37x).',
    client: 'The Nature Conservancy',
    agency: 'Samba Rock',
    year: '2019',
    category: 'NGO + Social Media + Content',
    accent: '#88E8F0',
    beforeAfter: { before: '/tnc-feed-before.png', after: '/tnc-feed-after.png' },
    carouselImages: ['/tnc-carousel-1.jpg', '/tnc-carousel-2.jpg', '/tnc-carousel-3.jpg', '/tnc-carousel-4.jpg', '/tnc-carousel-5.jpg', '/tnc-carousel-6.jpg', '/tnc-carousel-7.jpg', '/tnc-carousel-8.jpg', '/tnc-carousel-9.png', '/tnc-carousel-10.png', '/tnc-carousel-11.png', '/tnc-carousel-12.png'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Piare Encina', 'Valter Klug'] },
      { title: 'Copywriter / Social Media Manager', names: ['Dubraska Goncalves'] },
      { title: 'Project Manager', names: ['Narmine Yamaguchi'] },
    ],
  },
  {
    id: 'adriana-degreas',
    title: 'Adriana Degreas USA - Digital Commerce Launch',
    thumbnail: '/facebook_ads_1080x1080_2.png',
    description: 'Adriana Degreas, a high-end Brazilian designer resortwear brand, expanded to the U.S. in 2019. Three days before Black Friday, they hired Samba Rock. By February, paid search ROI had climbed to 22x (ROAS $22), digital ads rose from the sixth-largest to the second-largest source of site traffic — ultimately delivering the brand\'s highest online revenue to date.',
    client: 'Adriana Degreas Resort Wear',
    agency: 'Samba Rock',
    year: '2019',
    category: 'Fashion + E-Commerce + Performance',
    accent: '#E8EB74',
    videos: ['https://youtube.com/shorts/AEbEQbNbFK8'],
    carouselImages: ['/facebook_ads_1080x1080_2.png', '/facebook_ads_1080x1080_1.png', '/facebook_ads_1080x1080_4.png', '/20181121_carrouselfacebook_winter19_blackfriday_op1.png', '/20181121_INSTAGRAM_winter19_blackfriday_op3.png'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Valter Klug', 'Piare Encina'] },
      { title: 'Copywriter', names: ['Alma Langshaw'] },
      { title: 'Project Manager', names: ['Narmine Yamaguchi'] },
    ],
  },
  {
    id: 'zaxy-shoes',
    title: 'Zaxy Shoes - U.S. Market Launch',
    thumbnail: '/zaxy1.webp',
    description: 'Zaxy Shoes, a Grendene brand from Brazil\'s largest shoe exporter, entered the U.S. with teen-focused "jelly" footwear, a limited budget, and zero brand recognition. Facebook fans grew 45x to 63K, Instagram followers doubled, campaigns reached 8 million people and sparked 190K interactions over three years, the store averaged 500 pairs sold per month, and paid media delivered a 5x ROI.',
    client: 'Grendene Shoes',
    agency: 'Samba Rock',
    year: '2015',
    category: 'Fashion + Social + E-Commerce',
    accent: '#EA633F',
    carouselImages: ['/zaxy1.webp', '/zaxy2.webp', '/zaxy3.webp'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Valter Klug', 'Piare Encina'] },
      { title: 'Copywriter', names: ['Henry Chinea'] },
      { title: 'Project Manager', names: ['Gabriella Diamond'] },
    ],
  },
  {
    id: 'guarana-brand-positioning',
    title: 'Guaraná Antarctica International Brand Positioning',
    thumbnail: '/guarana-brand-positioning.jpg',
    description: 'After four years as Guaraná Antarctica\'s marketing agency for the US market, AmBev invited Samba Rock to adapt the brand\'s positioning for all international markets. The insight led to "Unlike any other soda. Original like you." We developed the new international Brand Book in multiple languages, immediately approved by leadership and now used across all markets.',
    client: 'AB-InBev / AmBev',
    agency: 'Samba Rock',
    year: '2022',
    category: 'CPG + Brand Strategy + International',
    accent: '#88E8F0',
    images: ['/guarana-brand-book.pdf'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug', 'Daniel Faudt'] },
      { title: 'Strategy Director', names: ['Valter Klug', 'Matheus Gonzalez'] },
      { title: 'Art Director', names: ['Valter Klug', 'Jeff William'] },
      { title: 'Copywriter', names: ['Alex Luna'] },
      { title: 'Project Manager', names: ['Aline Blanco'] },
    ],
  },
  {
    id: 'j-taylor-jewelry',
    title: 'J Taylor Fine Jewelry - Brand & E-Commerce Development',
    thumbnail: '/JTaylorhomepagemockupv5.jpg',
    description: 'J Taylor was conceived to introduce a Brazilian innovation to the U.S. — sleek 18k gold jewelry engineered with internal hollow space that preserves the purity and style of solid gold while reducing weight and price. We built the brand from the ground up: naming, visual identity, macro product photography, and a BigCommerce storefront.',
    client: 'J Taylor Fine Jewelry',
    agency: 'Samba Rock',
    year: '2020',
    category: 'Luxury + Brand + E-Commerce',
    accent: '#E8EB74',
    images: ['/JTaylorLogoBrandGuidelines.pdf'],
    carouselImages: ['/JTaylorhomepagemockupv5.jpg', '/productpage_desktop.jpg', '/about_desktop_3.2.jpg', '/contact_desktop.jpg', '/help_desktop.jpg'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Valter Klug', 'Luiza Garcia'] },
      { title: 'Copywriter', names: ['Alejandro Garcia'] },
      { title: 'Project Manager', names: ['Dubraska Goncalves', 'Giancarlo Avila'] },
    ],
  },
  {
    id: 'natura-telemundo',
    title: 'Natura Now in the USA - Spanish - NBC Telemundo',
    thumbnail: '/natura-telemundo.jpg',
    description: 'Natura challenged Samba Rock to create a 15-second TV commercial in both Portuguese and Spanish, targeting Latin American communities across the United States. Working with internal archives and augmenting footage with AI technology, we delivered the final product in multiple formats, two languages, and several variations — all within less than a month.',
    client: 'Natura &Co',
    agency: 'Samba Rock',
    year: '2022',
    category: 'CPG + TV + Multicultural',
    accent: '#EA633F',
    videos: ['https://youtu.be/BujashU-60E'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Valter Klug'] },
      { title: 'Copywriter', names: ['Valter Klug'] },
      { title: 'Producer/Editor', names: ['Valter Klug'] },
      { title: 'Project Manager', names: ['Renata Shimabukuro'] },
    ],
  },
  {
    id: 'guarana-chloe',
    title: 'Guaraná Antarctica Meet Chloe',
    thumbnail: '/guarana-chloe.jpg',
    description: 'When we discovered that Chloe — known for the viral "Side-eye Chloe" meme — was a fan of Guaraná Antarctica, we partnered with her family to create an authentic digital video advertisement. Shot entirely remotely on an iPhone during the pandemic, we edited, animated, and produced a high-quality final video connecting the soda brand with a younger American audience.',
    client: 'AB-InBev / AmBev',
    agency: 'Samba Rock',
    year: '2020',
    category: 'CPG + Influencer + Social',
    accent: '#88E8F0',
    videos: ['https://vimeo.com/594872015'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Valter Klug', 'Luiza Garcia'] },
      { title: 'Copywriter', names: ['Alejandro Garcia'] },
      { title: 'Editor', names: ['Valter Klug'] },
      { title: 'Project Manager', names: ['Giancarlo Avila'] },
    ],
  },
  {
    id: 'guarana-ar',
    title: "Guaraná Antarctica's AR Amazon Rainforest",
    thumbnail: '/guarana-ar.jpg',
    description: 'We created an innovative iOS and Android Augmented Reality application that transports users into a virtual 3D Amazon Rainforest experience, offering them a chance to win a free trip to Brazil. By partnering with KAYAK to provide a $5,000 travel prize, we added credibility and excitement. The app was recognized as a finalist at AWE2020.',
    client: 'AB-InBev / AmBev',
    agency: 'Samba Rock',
    year: '2018',
    category: 'CPG + AR/VR + Innovation',
    accent: '#E8EB74',
    videos: ['https://vimeo.com/562870487'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Valter Klug'] },
      { title: 'Copywriter', names: ['Hank Chinea'] },
      { title: 'Project Manager', names: ['Gabriella Diamond'] },
      { title: 'App Development', names: ['Opto Creative Lab'] },
    ],
  },
  {
    id: 'bauducco-wafers',
    title: 'Bauducco Wafers TV Commercial',
    thumbnail: '/bauducco-wafers.jpg',
    description: 'Samba Rock partnered with Lobo CX — the spin-off of world-renowned Brazilian 3D production house Vetor Zero — to create a 100% CGI television commercial for Bauducco wafers. The result was a visually stunning commercial that showcased the wafers\' quality while demonstrating the power of advanced 3D animation in food advertising.',
    client: 'Bauducco Foods',
    agency: 'Samba Rock',
    year: '2020',
    category: 'CPG + TV + 3D CGI',
    accent: '#EA633F',
    videos: ['https://vimeo.com/468206939'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Valter Klug', 'Luiza Garcia'] },
      { title: 'Copywriter', names: ['Alejandro Garcia'] },
      { title: 'Project Manager', names: ['Aline Blanco'] },
      { title: 'Production / 3D', names: ['Lobo CX (Vetor Zero)'] },
    ],
  },
  {
    id: 'saphirus-air-fresheners',
    title: 'Saphirus Air Fresheners USA',
    thumbnail: '/saphirus.jpg',
    description: "Saphirus, Argentina's largest air freshener manufacturer — outselling global brands like Johnson & Johnson, Glade, and P&G in their home market — decided to expand into the United States. We developed a new brand positioning that elevated Saphirus from a popular mass-market brand to a more refined position, visible in the brand manifesto and accompanying video.",
    client: 'Saphirus Air Fresheners',
    agency: 'Samba Rock',
    year: '2022',
    category: 'CPG + Brand Strategy + US Entry',
    accent: '#88E8F0',
    videos: ['https://youtu.be/3LTayyS0rbM'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug', 'Daniel Faudt'] },
      { title: 'Art Director', names: ['Valter Klug', 'Daniel Faudt', 'Jeff William'] },
      { title: 'Copywriter', names: ['Alex Luna'] },
      { title: 'Project Manager', names: ['Aline Blanco'] },
    ],
  },
  {
    id: 'nordanglia-virtual-games',
    title: 'Nordanglia Education - 2020 Virtual Games',
    thumbnail: '/nordanglia-full.jpg',
    description: 'During the COVID-19 pandemic in 2020, Nordanglia Education transformed their annual global Olympic games into an American-continent-wide virtual competition, incorporating e-sports for the first time. Samba Rock created all marketing materials for this innovative event, including teaser and main promotional videos, website design, email marketing campaigns, and digital advertisements.',
    client: 'Nordanglia Education',
    agency: 'Samba Rock',
    year: '2020',
    category: 'Education + Digital + Event',
    accent: '#E8EB74',
    videos: ['https://youtu.be/l11Jg1h8kKc', 'https://youtu.be/hHNUwRm3zYQ'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Valter Klug', 'Luiza Garcia'] },
      { title: 'Copywriter', names: ['Alejandro Garcia'] },
      { title: 'Project Manager', names: ['Aline Blanco'] },
    ],
  },
  {
    id: 'rider-sandals',
    title: 'Rider Sandals Stopmotion - Universal Orlando',
    thumbnail: '/rider-new.jpg',
    description: 'One of the first projects delivered by Samba Rock showcased Valter\'s versatility as a one-person creative powerhouse. He handled every aspect: shooting, animating frame by frame in stop-motion, composing the soundtrack, recording voice-over, writing the script, and editing the final piece. This advertisement was displayed for two consecutive years at Universal Studios Resort in Orlando.',
    client: 'Grendene',
    agency: 'Samba Rock',
    year: '2015',
    category: 'Fashion + Animation + OOH',
    accent: '#EA633F',
    videos: ['https://youtu.be/RiluVEK33Do'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Valter Klug'] },
      { title: 'Copywriter', names: ['Valter Klug'] },
      { title: 'Animator', names: ['Valter Klug'] },
      { title: 'Editor', names: ['Valter Klug'] },
      { title: 'Sound Design', names: ['Valter Klug'] },
    ],
  },
  {
    id: 'bauducco-panettone',
    title: "Bauducco Panettone 'New Guest'",
    thumbnail: '/bauducco-panettone-new.jpg',
    description: 'When Bauducco decided to advertise Panettone in the United States, we created a heartwarming scenario where the Italian sweet bread serves as a token of welcome and hospitality. The advertisement ran for three consecutive years during NBA game breaks, reaching millions of viewers and successfully establishing Panettone as a holiday staple in American households.',
    client: 'Bauducco',
    agency: 'Samba Rock',
    year: '2014',
    category: 'CPG + TV + Brand Building',
    accent: '#88E8F0',
    videos: ['https://youtu.be/yFvKeyemP0k'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Valter Klug'] },
      { title: 'Copywriter', names: ['Valter Klug'] },
      { title: 'Production', names: ['Lemonade'] },
    ],
  },
  {
    id: 'att-mobile-share',
    title: 'AT&T Mobile Share Family',
    thumbnail: '/att-mobile-1.jpg',
    description: 'While Y&R managed social media content for AT&T\'s US Hispanic customers, Valter created a series of quirky, humorous stop-motion videos showcasing the benefits of sharing cellphone plan minutes with family. These unexpected visual comparisons were conceived, filmed, edited, and animated entirely in-house.',
    client: 'AT&T',
    agency: 'Y&R',
    year: '2014',
    category: 'Telecom + Social + Animation',
    accent: '#E8EB74',
    videos: ['https://youtu.be/o32fRY02cCw', 'https://youtu.be/F9P7_nehbfI', 'https://youtu.be/y3JQ-TLdK5Y', 'https://youtu.be/WlX5Me0hZjU'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Valter Klug'] },
      { title: 'Animator', names: ['Valter Klug'] },
      { title: 'Editor', names: ['Valter Klug'] },
    ],
  },
  {
    id: 'att-gophone',
    title: 'Wall - GoPhone from AT&T',
    thumbnail: '/att-gophone-thumb.jpg',
    description: 'We explored a creative concept connected to Miami\'s Wynwood neighborhood, renowned for its stunning graffiti murals and street art culture. We created animated graffiti that dynamically covers white walls as the protagonist walks through the scene, visually explaining the new AT&T GoPhone plan.',
    client: 'AT&T',
    agency: 'Y&R',
    year: '2013',
    category: 'Telecom + Street Art + Animation',
    accent: '#EA633F',
    videos: ['https://youtu.be/2hDbUyvhqaQ'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Valter Klug'] },
      { title: 'Copywriter', names: ['Valter Klug'] },
      { title: 'Production', names: ['Lemonade'] },
    ],
  },
  {
    id: 'bbva-nba',
    title: 'NBA Banking by BBVA Bank',
    thumbnail: '/bbva-thumb.jpg',
    description: "BBVA Compass — the official bank of the NBA — launched 'NBA banking' during All-Star Weekend in Houston, centered on the #RealFan hashtag. The campaign generated over 4 million impressions in Houston alone, with more than 15,000 photo uploads nationwide, successfully connecting banking services with basketball passion.",
    client: 'BBVA Bank',
    agency: 'Y&R',
    year: '2013',
    category: 'Finance + Sports + Activation',
    accent: '#88E8F0',
    videos: ['https://youtu.be/oLfFkGAW4iY', 'https://youtu.be/pqnX0BtuB7A'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Valter Klug'] },
      { title: 'Copywriter', names: ['Valter Klug'] },
    ],
  },
  {
    id: 'xgames-trick-track',
    title: 'X Games Trick Track / Hypemeter',
    thumbnail: '/xgames-hq.jpg',
    description: 'X Games reimagined its digital presence with a mobile-first platform and innovative second-screen tablet application. XGames.com visits increased 72% year-over-year, video starts rose 15%, page views jumped 99%, and time on site grew 57%. The project earned a Silver Clio Sports award for its innovation in sports digital experience.',
    client: 'ESPN X Games',
    agency: 'Sapient (Publicis)',
    year: '2013',
    category: 'Sports + Digital + Second Screen',
    accent: '#E8EB74',
    awards: ['Silver Clio Sports'],
    videos: ['https://youtu.be/CVYfpIkmqyw', 'https://youtu.be/yZj8cz6JtRk'],
    roles: [
      { title: 'Creative Director', names: ['Valter Klug'] },
      { title: 'Art Director', names: ['Valter Klug'] },
      { title: 'UX Design', names: ['Sapient Team'] },
      { title: 'Development', names: ['Sapient Team'] },
    ],
  },
]

/* ── Helper: extract YouTube/Vimeo embed URL ── */
function getEmbedUrl(url) {
  if (!url) return null
  // YouTube
  let m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/)
  if (m) return `https://www.youtube.com/embed/${m[1]}`
  // Vimeo
  m = url.match(/vimeo\.com\/(\d+)/)
  if (m) return `https://player.vimeo.com/video/${m[1]}`
  return null
}

/* ── Project Modal ── */
function ProjectModal({ project, onClose }) {
  if (!project) return null
  const p = project
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(18,18,18,.92)', backdropFilter: 'blur(12px)', overflowY: 'auto' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
        transition={{ duration: .3 }}
        style={{ maxWidth: 960, margin: '80px auto', padding: '0 24px', position: 'relative' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button onClick={onClose} style={{ position: 'fixed', top: 24, right: 32, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', color: '#fff', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 20, fontFamily: 'IBM Plex Sans,sans-serif', fontWeight: 300, zIndex: 10 }}>×</button>

        {/* Header */}
        <div style={{ borderBottom: `3px solid ${p.accent}`, paddingBottom: 32, marginBottom: 32 }}>
          <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: p.accent, marginBottom: 8 }}>{p.client} · {p.year}</div>
          <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 300, color: '#fff', lineHeight: 1.15, letterSpacing: '-.015em', marginBottom: 12 }}>{p.title}</h2>
          <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)' }}>{p.category}</div>
        </div>

        {/* Video embed(s) */}
        {p.videos && p.videos.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            {p.videos.map((v, i) => {
              const embedUrl = getEmbedUrl(v)
              return embedUrl ? (
                <div key={i} style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: i < p.videos.length - 1 ? 16 : 0, background: '#000' }}>
                  <iframe src={embedUrl} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={p.title + ' video ' + (i + 1)} />
                </div>
              ) : null
            })}
          </div>
        )}

        {/* Carousel Images */}
        {p.carouselImages && p.carouselImages.length > 0 && (
          <div style={{ marginBottom: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 8 }}>
            {p.carouselImages.map((img, i) => (
              <img key={i} src={img} alt={p.title + ' image ' + (i + 1)} style={{ width: '100%', display: 'block', background: '#1E1E1E' }} loading="lazy" />
            ))}
          </div>
        )}

        {/* Before/After */}
        {p.beforeAfter && (
          <div style={{ marginBottom: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 8 }}>Before</div>
              <img src={p.beforeAfter.before} alt="Before" style={{ width: '100%', display: 'block' }} loading="lazy" />
            </div>
            <div>
              <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: p.accent, marginBottom: 8 }}>After</div>
              <img src={p.beforeAfter.after} alt="After" style={{ width: '100%', display: 'block' }} loading="lazy" />
            </div>
          </div>
        )}

        {/* PDFs */}
        {p.pdfs && p.pdfs.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 12 }}>Documents</div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {p.pdfs.map((pdf, i) => (
                <a key={i} href={pdf.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 500, color: p.accent, padding: '8px 16px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {pdf.title} →
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'start' }} className="modal-grid">
          <div>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: 'rgba(255,255,255,.65)', lineHeight: 1.8 }}>{p.description}</p>
            {p.awards && p.awards.length > 0 && (
              <div style={{ marginTop: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {p.awards.map((a, i) => (
                  <span key={i} style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', background: 'rgba(234,99,63,.15)', color: '#EA633F', padding: '5px 12px' }}>🏆 {a}</span>
                ))}
              </div>
            )}
          </div>
          <div style={{ background: 'rgba(255,255,255,.03)', padding: '24px 28px', borderLeft: `3px solid ${p.accent}` }}>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 16 }}>Credits</div>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,.5)', marginBottom: 4 }}>Client: <span style={{ color: '#fff' }}>{p.client}</span></div>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,.5)', marginBottom: 16 }}>Agency: <span style={{ color: '#fff' }}>{p.agency}</span></div>
            {p.roles.map((r, i) => (
              <div key={i} style={{ marginBottom: 10, paddingBottom: 10, borderBottom: i < p.roles.length - 1 ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 2 }}>{r.title}</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: 'rgba(255,255,255,.6)' }}>{r.names.join(', ')}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{"@media(max-width:768px){.modal-grid{grid-template-columns:1fr!important;gap:24px!important}}"}</style>
      </motion.div>
    </motion.div>
  )
}

/* ── PORTFOLIO PAGE ── */
export default function Portfolio() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('all')

  const agencies = [...new Set(PROJECTS.map(p => p.agency))]
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.agency === filter)

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="page-hero" style={{ borderTop: '4px solid #88E8F0' }}>
        <div className="page-hero-inner">
          <span className="lbl" style={{ color: '#88E8F0' }}>Creative Portfolio · 25+ Years · 20+ Projects</span>
          <h1 className="page-h1">Selected Work.<br />A career in creative leadership.</h1>
          <p className="page-sub">A collection of award-winning campaigns and creative projects spanning 25+ years across global brands — from Samba Rock to Y&R to Sapient.</p>
          <div style={{ display: 'flex', gap: 32, marginTop: 36, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,.08)', flexWrap: 'wrap' }}>
            {[['20+', 'Projects'], ['12+', 'Clients'], ['3', 'Agencies']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,1.8rem)', fontWeight: 300, color: '#88E8F0', lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section style={{ background: '#EAEAC8', padding: '20px 64px', borderTop: '1px solid rgba(18,18,18,.08)', borderBottom: '1px solid rgba(18,18,18,.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(18,18,18,.4)' }}>Filter By</span>
          {['all', ...agencies].map(a => (
            <button key={a} onClick={() => setFilter(a)}
              style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.06em', padding: '6px 14px', background: filter === a ? '#121212' : 'transparent', color: filter === a ? '#fff' : '#666', border: filter === a ? 'none' : '1px solid rgba(18,18,18,.15)', cursor: 'pointer', textTransform: a === 'all' ? 'uppercase' : 'none', transition: 'all .2s' }}>
              {a === 'all' ? 'All Projects' : a}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section style={{ background: '#F5F5F5', padding: '80px 64px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, background: '#E8E8E8' }} className="portfolio-grid">
            {filtered.map((p, i) => (
              <FadeIn key={p.id} delay={i * .04}>
                <HoverLift>
                  <div onClick={() => setSelected(p)}
                    style={{ background: '#fff', cursor: 'pointer', overflow: 'hidden', transition: 'background .2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#FAFAFA'}
                    onMouseLeave={e => e.currentTarget.style.background = '#fff'}
                  >
                    {/* Thumbnail */}
                    <div style={{ position: 'relative', paddingBottom: '56%', overflow: 'hidden', background: '#121212' }}>
                      <img src={p.thumbnail} alt={p.title} loading="lazy"
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .4s', opacity: .9 }}
                        onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                      />
                      {/* Play icon overlay for video projects */}
                      {p.videos && p.videos.length > 0 && (
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,.3)', opacity: 0, transition: 'opacity .3s' }}
                          onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                          onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                        >
                          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(234,99,63,.85)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: 0, height: 0, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '14px solid #fff', marginLeft: 3 }} />
                          </div>
                        </div>
                      )}
                      {/* Accent bar at bottom */}
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: p.accent }} />
                    </div>
                    {/* Card info */}
                    <div style={{ padding: '24px 28px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                        <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, color: '#666' }}>{p.client}</span>
                        <span style={{ color: '#ccc' }}>·</span>
                        <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, color: '#999' }}>{p.year}</span>
                      </div>
                      <h3 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(.95rem,1.5vw,1.1rem)', fontWeight: 500, color: '#121212', lineHeight: 1.3, marginBottom: 10 }}>{p.title}</h3>
                      <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: p.accent }}>{p.category.replace(/\+/g, ' + ')}</div>
                      <div style={{ marginTop: 16, fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 500, letterSpacing: '.05em', textTransform: 'uppercase', color: '#EA633F', display: 'flex', alignItems: 'center', gap: 4 }}>
                        View Project <span>→</span>
                      </div>
                    </div>
                  </div>
                </HoverLift>
              </FadeIn>
            ))}
          </div>
          <style>{"@media(max-width:768px){.portfolio-grid{grid-template-columns:1fr!important}section[style*='80px 64px']{padding:60px 24px!important}}"}</style>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-strip" style={{ padding: '80px 64px' }}>
        <FadeIn>
          <h2>Like what you see?</h2>
          <p>Let's talk about your brand, your vision, and what we can build together.</p>
        </FadeIn>
        <Link to="/contact" className="btn btn-dark">Let's Talk →</Link>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </PageWrapper>
  )
}
