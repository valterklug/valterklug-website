import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PageWrapper, FadeIn, HoverLift } from '../components/Animate'

const CASES = [
  {
    id: 'bauducco',
    tag: 'Bauducco Panettone',
    category: 'CPG + US Market Entry + Category Creation',
    title: "From Unknown to Unmissable: Bauducco Panettone's Holiday Category Creation",
    desc: "How Bauducco transformed an unknown Italian specialty into America's leading holiday cake category through sustained cultural integration and strategic partnerships.",
    tags: ['Category Creation', 'Cultural Integration', 'Digital Strategy', 'Retail'],
    bg: '#1E1E1E',
    accent: '#EA633F',
    featured: true,
    thumb: '/cs-bauducco-panettone-thumb.jpg',
    fullImg: '/cs-bauducco-panettone-full.jpg',
    client: 'Bauducco Foods',
    role: 'Engagement Lead',
    challenge: "Bauducco Foods faced a major market entry barrier: introducing Panettone, a traditional Italian Christmas cake, to American consumers unfamiliar with the product. Unlike expanding an existing brand, Bauducco needed to create category awareness and demand with a modest 2014 budget, competing against established seasonal favorites. The company required creative solutions to generate awareness, build brand preference, and establish Panettone as a holiday essential while educating consumers about the product.",
    approach: "Beginning in 2016 as Bauducco's Digital Agency, we developed a multi-year cultural integration strategy. We launched their website and social media, securing a celebrity endorsement from Buddy Valastro, the \"Cake Boss,\" for immediate credibility. The \"Hard to describe; easy to love\" campaign (in partnership with Crispin Porter + Bogusky) focused on category creation, culminating in a Times Square activation that transformed personal stories into emotional marketing moments and won the brand some international advertising awards. In 2020, the strategy pivoted to \"Share a Slice of Togetherness,\" utilizing digital channels and influencer marketing, and launching TV commercials for Bauducco Wafers. The 2022 \"You know it's the Holidays when...\" campaign localized messaging for South Florida, partnering with the Brightline Polar Express to associate Panettone with cherished Christmas traditions.",
    impact: "Bauducco transformed an unknown Italian specialty into America's leading holiday cake category, becoming the Panettone of choice through sustained cultural integration. This success justified opening a Miami manufacturing facility, followed by a recently announced new plant and distribution center in Zephyrhills, Florida, establishing permanent US manufacturing. The partnership created not just product awareness but category ownership. The nine-year journey demonstrates the power of consistent storytelling, strategic partnerships, and patient brand building in creating new consumer categories.",
  },
  {
    id: 'guarana-positioning',
    tag: "AB-InBev's Guaraná Antarctica",
    category: 'CPG + Brand Positioning + Global',
    title: "Translating Brazilian Authenticity to Global Appeal",
    desc: "How we repositioned Guaraná Antarctica from a Brazilian exclusive into a global lifestyle brand — preserving its DNA while transforming exclusivity into inclusivity.",
    tags: ['Brand Positioning', 'International Expansion', 'Brand Manual', 'Cultural Strategy'],
    bg: '#006B3C',
    accent: '#E8EB74',
    featured: false,
    thumb: '/cs-guarana-positioning-thumb.jpg',
    fullImg: '/cs-guarana-positioning-full.jpg',
    client: 'Anheuser-Busch / AB-InBev',
    role: 'Engagement Lead',
    challenge: "Ambev faced a critical positioning dilemma as Guaraná Antarctica expanded internationally. In Brazil, the brand's positioning, \"É coisa nossa\" (It's our thing), celebrated Brazilian cultural identity. However, this inherently exclusive message created a barrier to international growth. How could a brand built on \"only Brazilians understand Guaraná\" authentically connect with consumers across North America, Asia, Europe, and beyond? The challenge was preserving the brand's distinctive DNA while transforming exclusivity into global inclusivity.",
    approach: "Our team distilled the universal truth beneath Guaraná Antarctica's Brazilian positioning. We discovered that \"É coisa nossa\" represented more than nationality — it celebrated individuality and originality. Brazilians loved the brand because it made them feel unique and authentic, different from mainstream cola drinkers. This revealed a powerful universal insight: people everywhere want to feel original and be early adopters who discover something special first. We developed a comprehensive International Brand Book repositioning Guaraná Antarctica around the concept \"Unlike any other. Original like you.\" This transformed exclusivity into inclusivity while maintaining brand authenticity. The framework, translated into multiple languages, positioned international consumers as trendsetters and brand ambassadors, including detailed guidance on visual identity, brand personality, and target audiences.",
    impact: "The new positioning successfully established Guaraná Antarctica as a lifestyle brand with emotional resonance across diverse global markets. Local distributors and agencies worldwide now operate from a unified strategic foundation, ensuring consistent messaging with culturally appropriate adaptations. The repositioning transformed the growth model by activating consumers as advocates who organically expand reach and household penetration. The brand's deeply Brazilian identity, once a barrier, became its greatest asset, offering global consumers authentic Brazilian originality.",
  },
  {
    id: 'guarana-mls',
    tag: "AB-InBev's Guaraná Antarctica",
    category: 'CPG + Sports Marketing + Sponsorship',
    title: "Championship Timing: Guaraná Antarctica's Strategic MLS Partnership Success",
    desc: "How we identified and negotiated a game-changing MLS sponsorship at a fraction of typical costs — delivering extraordinary ROI when NYCFC won the MLS Cup.",
    tags: ['Sports Marketing', 'Sponsorship', 'Brand Activation', 'Experiential'],
    bg: '#1A1A2E',
    accent: '#88E8F0',
    featured: false,
    thumb: '/cs-guarana-mls-thumb.jpg',
    fullImg: '/cs-guarana-mls-full.jpg',
    client: 'Anheuser-Busch / AB-InBev',
    role: 'Engagement Lead',
    challenge: "Guaraná Antarctica faced a locked market in Major League Soccer, with nearly every team sponsored by either Coca-Cola or Pepsi. The Brazilian brand needed high-impact exposure to reach soccer fans and the US Brazilian community, but premium MLS sponsorships commanded prohibitive costs for an international challenger brand. The challenge was identifying a viable partnership that could deliver meaningful brand exposure while managing budget constraints and creating authentic activations that would resonate with American audiences beyond traditional sponsorship signage.",
    approach: "We identified NYCFC as the only major MLS team without Coke or Pepsi sponsorship and negotiated a 90% discount over the original asking price for year one, securing year two at half-price. The strategy leveraged NYCFC's Brazilian players and New York's Brazilian community through experiential activations including in-stadium and broadcast signage, social media content across NYCFC's 3.3M followers, and extensive sampling — 5,000 cans distributed at the September 7th Brazil's Independence Day match with player meet-and-greets, pre-game sampling at Yankee Stadium for 100+ guests per match, presenting sponsorship of Conference and MLS Cup Final watch parties with 3,000 attendees each, and Fan Appreciation Match events engaging 300 guests with exclusive giveaways.",
    impact: "The partnership delivered extraordinary ROI when NYCFC won the MLS Cup championship in 2021 — their first sponsorship ever — providing unprecedented national exposure during the playoff run and title celebrations. Guaraná Antarctica reached over 10,000 consumers through direct sampling, gained visibility across broadcast and digital platforms during the championship season, and established authentic connections with American soccer culture. The strategic timing and negotiated pricing delivered elite MLS sponsorship benefits at a fraction of typical costs, positioning Guaraná Antarctica uniquely against beverage giants in the US market.",
  },
  {
    id: 'plantco',
    tag: 'PlantCo',
    category: 'CPG + E-commerce + Amazon',
    title: "From Brazil's #1 to America's Rising Star: PlantCo's US Market Entry Strategy",
    desc: "How we positioned Brazil's leading plant-based milk brand for US market entry — achieving top-5 Amazon status in under 6 months.",
    tags: ['Market Entry', 'E-commerce', 'Amazon', 'Digital Strategy'],
    bg: '#8BC34A',
    accent: '#121212',
    featured: false,
    thumb: '/cs-plantco-thumb.jpg',
    fullImg: '/cs-plantco-full.jpg',
    client: 'PlantCo',
    role: 'Engagement Lead',
    challenge: "PlantCo, Brazil's leading plant-based milk brand, faced a critical market entry challenge launching in the highly competitive US market. Unlike their Brazilian success pioneering an emerging category, they entered a mature market dominated by established giants like Almond Breeze, Silk, and Oatly commanding 59% market share. The challenge was building brand awareness from zero while positioning a premium organic product at competitive pricing in a market where high-quality competitors held minimal share against mainstream brands with substantially larger marketing budgets and established distribution.",
    approach: "We developed an omnichannel digital strategy anchored by \"A better alternative to your milk alternative.\" Competitive analysis identified PlantCo's unique position as the only brand offering organic, clean-label plant-based milk (under 5 ingredients) at mid-market pricing. We targeted flexitarians — 29% of Americans reducing dairy consumption — as the largest growth opportunity. The go-to-market strategy prioritized Amazon with comprehensive brand registry, optimized storefront, A+ content, and targeted advertising, while establishing Instagram presence and institutional website to lay groundwork for expansion to Walmart, eBay, Google Shopping, and Meta Commerce.",
    impact: "PlantCo sold the entire initial inventory in under six months and became a top-5 plant-based milk alternative on Amazon US within three months of launch. The oat milk variant ranked #5 among all national oat milk products — remarkable penetration for a new foreign brand. The digital-first strategy validated PlantCo's positioning and created a scalable omnichannel foundation, proving strategic execution could compete effectively against established brands with significantly larger budgets in the rapidly growing US plant-based milk market.",
  },
  {
    id: 'kerococo',
    tag: "PepsiCo's KeroCoco",
    category: 'CPG + Social Media + Global Positioning',
    title: "Celebrating Authenticity Through Social Media for Global Positioning",
    desc: "How we developed a flexible social media framework that adapted to different market maturities while maintaining a single authentic brand voice.",
    tags: ['Social Media', 'Global Positioning', 'Content Strategy', 'Brand Voice'],
    bg: '#0F2040',
    accent: '#88E8F0',
    featured: false,
    thumb: '/cs-kerococo-thumb.jpg',
    fullImg: '/cs-kerococo-full.jpg',
    client: 'PepsiCo',
    role: 'Engagement Lead',
    challenge: "PepsiCo's KeroCoco faced a complex positioning challenge across diverse international markets with dramatically different maturity levels — from consumers unfamiliar with coconut water to sophisticated markets with established preferences. The challenge was creating a unified global social media strategy that could flex across these realities while maintaining authentic brand identity. How could one positioning work effectively in markets requiring product education, brand introduction, and emotional connection simultaneously?",
    approach: "We developed \"True at the Core,\" a flexible social media framework built on the insight that imperfection defines authenticity. Drawing from coconuts themselves — each unique in appearance, flavor, and character — we positioned KeroCoco as celebrating the perfectly imperfect nature of both product and consumers. The strategy introduced three adaptable content pillars: Provenance (expertise/sustainability), Functional (nutrition/consumption moments), and Emotional (lifestyle/uniqueness). The innovation was market-specific content ratios shifting emphasis based on local needs — Brazil received 60% emotional content celebrating consumer authenticity, while LATAM markets received 50% functional content for product education. Every piece incorporated experiential elements, maintaining consistency while allowing cultural adaptation with a celebratory, young, positive, and open-minded tone.",
    impact: "The global social media strategy established KeroCoco with a distinctive voice that transcended market boundaries while respecting local contexts. By anchoring in celebrating authenticity rather than perfection, we enabled market-specific adaptation without diluting core identity. The flexible content pillar system let local teams emphasize education in emerging markets, build awareness in developing markets, and deepen emotional connections in mature markets, all from the same authentic brand truth. The positioning transformed KeroCoco from a functional beverage into a lifestyle brand with personal consumer identification, establishing a scalable social media framework now deployed across the world.",
  },
  {
    id: 'tropical',
    tag: 'Tropical Fantasy',
    category: 'CPG + Urban Marketing + Hip-Hop Culture',
    title: "Reviving a Brooklyn Icon: Tropical Fantasy's Hip-Hop Comeback Campaign",
    desc: "How we reconnected a nostalgic Brooklyn beverage brand with urban millennials through an authentic hip-hop marketing strategy and guerrilla activations.",
    tags: ['Multicultural', 'Guerrilla Marketing', 'Social Strategy', 'Experiential'],
    bg: '#2D1B69',
    accent: '#E8EB74',
    featured: false,
    thumb: '/cs-tropical-fantasy-thumb.jpg',
    fullImg: '/cs-tropical-fantasy-full.jpg',
    client: 'Dr Pepper Keurig',
    role: 'Engagement Lead',
    challenge: "Tropical Fantasy, an iconic Brooklyn-born juice and soda brand that dominated urban markets in the 90s through word-of-mouth, was struggling to regain market position in the competitive beverage landscape. Once a cultural staple in inner-city neighborhoods, the brand had lost momentum with younger consumers despite nostalgic appeal with older audiences. The challenge was reconnecting with urban mixed-race Millennials deeply connected to Hip-Hop culture while launching new Aloe Vera flavors in a saturated market. Traditional marketing wouldn't resonate with this authenticity-focused demographic that valued grassroots cultural movements over advertising message.",
    approach: "We created \"New Flavors of Hip Hop,\" an integrated guerrilla marketing campaign launching at the 2015 NY Hip Hop Festival that authentically connected the brand's Brooklyn roots with emerging Hip-Hop culture. The strategy positioned Tropical Fantasy as a platform supporting up-and-coming Brooklyn artists, creating genuine cultural relevance beyond product promotion. Tactics included a branded Snapchat Geofilter that made users appear on stage performing; a physical concert backdrop driving organic social sharing; distribution of 4,000 product samples featuring new Aloe Vera flavors; and a social media contest with two-week voting phase selecting winning artists, culminating in a Facebook Live winner announcement amplifying engagement across multiple states.",
    impact: "The campaign successfully reconnected Tropical Fantasy with urban Millennials through authentic Hip-Hop engagement. The Facebook Live announcement reached 28,800 viewers, the Snapchat Geofilter reached 13,812 people, and 4,000 samples were distributed to festival attendees. The integrated approach delivered excellent CPC. Most importantly, the campaign revitalized Tropical Fantasy's cultural relevance by authentically supporting Brooklyn's Hip-Hop community, transforming the brand from nostalgic relic to active participant in contemporary urban culture and successfully launching the new line.",
  },
  {
    id: 'opus',
    tag: 'Meta Development · OPUS Coconut Grove',
    category: 'Real Estate + Luxury Marketing + AI',
    title: "Amplifying Luxury Living: Positioning OPUS Coconut Grove in Miami's Premium Market",
    desc: "How we transformed limited pre-construction assets into a luxury lifestyle brand through AI-augmented content and strategic Instagram positioning — generating $5M in sales.",
    tags: ['Luxury Real Estate', 'AI Content', 'Social Media', 'Lifestyle Marketing'],
    bg: '#2C2C2C',
    accent: '#EA633F',
    featured: false,
    thumb: '/cs-opus-thumb.jpg',
    fullImg: '/cs-opus-full.jpg',
    client: 'Meta Development',
    role: 'Engagement Lead',
    challenge: "OPUS represents a paradigm shift in Miami real estate — a boutique, sustainable residential development prioritizing innovative design and personalized living experiences over mass-market appeal. With limited visual assets during pre-construction, Meta Development needed a Marketing Agency of Record capable of building brand awareness, establishing differentiation, and generating qualified buyer interest through strategic content that brought the OPUS vision to life before completion.",
    approach: "We implemented a 360° marketing strategy that transformed content limitations into creative opportunities. Recognizing traditional real estate marketing wouldn't resonate with OPUS's discerning audience (women aged 30–44, income $100–150K+, business professionals and creatives), we repositioned Instagram as a luxury lifestyle magazine. We augmented limited renderings through generative AI, adding contextual elements and environmental details for immersive storytelling. The content strategy centered on \"Coconut Grove living\" not \"OPUS selling,\" featuring neighborhood experiences, cultural and lifestyle content that built anticipation and FOMO. We transformed Instagram into a mini-site through Highlights and delivered posts with custom assets, lifestyle email newsletters, finalized sales collateral, website updates, and CRM integration.",
    impact: "During Samba Rock's tenure, OPUS sold 2 units, generating $5 million in sales. More significantly, the transformation established OPUS as a lifestyle brand rather than just real estate, creating sustained engagement with qualified prospects and positioning Meta Development as an innovative voice in sustainable luxury living.",
  },
  {
    id: 'jtaylor',
    tag: 'J Taylor Jewelers',
    category: 'Luxury + Brand Creation + E-commerce',
    title: "Gilding the Market: Building J Taylor's Luxury Jewelry Brand from the Ground Up",
    desc: "How we created an entirely new luxury jewelry brand — from naming to visual identity to digital presence — for an innovative 18k gold product line.",
    tags: ['Brand Creation', 'Luxury', 'E-commerce', 'Visual Identity'],
    bg: '#1A1A1A',
    accent: '#D4AF37',
    featured: false,
    thumb: '/cs-jtaylor-thumb.jpg',
    fullImg: '/cs-jtaylor-full.jpg',
    client: 'J Taylor Jewelers',
    role: 'Engagement Lead',
    challenge: "Jonathan and Thalita Taylor held the golden key: exclusive US rights to a revolutionary Brazilian jewelry line crafted from 18k gold with innovative hollow-center designs that delivered bold aesthetics without the prohibitive weight or cost. But the brand existed only as a B2B supplier in Brazil, invisible to consumers. Breaking into the American market, where 12k gold reigned supreme, demanded more than exceptional product — it required an entirely new brand identity that could command luxury positioning while democratizing access to genuine 18k gold.",
    approach: "We orchestrated a brand genesis. We named the brand J Taylor, weaving family heritage into the brand's foundation through the Taylor daughters' shared initial. From there, we crafted every element of the brand ecosystem, designing a sophisticated logo and visual identity that spoke to timeless elegance and modern empowerment, developing brand guides, and building a compelling digital presence through website development and social media architecture. The strategy targeted women 30–44 with the purchasing power to appreciate quality, positioning J Taylor at the intersection of unique design, uncompromising quality, and unprecedented value in the 18k gold category.",
    impact: "The transformation was complete. J Taylor emerged as a fully realized luxury brand, equipped with every asset necessary to captivate the American jewelry market. With a cohesive identity, strategic positioning, and execution-ready marketing infrastructure, the Taylors successfully transitioned from exclusive distribution rights to brand stewardship, introducing American consumers to a new standard in fine jewelry.",
  },
  {
    id: 'travelsana',
    tag: 'Travelsana Multivitamin',
    category: 'DTC + Brand Launch + Social & Paid',
    title: "Building a Brand from Zero: Travelsana's Strategic US Market Entry",
    desc: "How we launched an entirely new travel supplement brand in the competitive US market with zero recognition — and built a self-sustaining growth engine.",
    tags: ['Brand Launch', 'Paid Media', 'Social Strategy', 'E-commerce'],
    bg: '#2C3E50',
    accent: '#EA633F',
    featured: false,
    thumb: '/cs-travelsana-thumb.jpg',
    fullImg: '/cs-travelsana-full.jpg',
    client: 'Travelsana',
    role: 'Engagement Lead',
    challenge: "Travelsana, a brand-new travel-specific dietary supplement company created by a Swiss team with 22+ years developing wellness products, needed to launch an entirely new brand in the competitive US market with no existing awareness, distribution, or customer base. The company faced introducing a novel product category (travel-specific supplements for circulation, jet lag, and immune support) to skeptical US consumers while competing against established wellness brands, all with startup budget constraints and no historical performance data. The challenge included building brand recognition, establishing credibility in the travel wellness space, generating immediate e-commerce sales, and securing B2B partnerships with travel agencies, cruise lines, and corporate clients.",
    approach: "We developed a targeted social media and paid media strategy optimized for affluent travelers aged 50+ through cross-analysis of platform demographics and high-income user concentrations. The pilot campaign focused on Facebook and LinkedIn as primary channels, supplemented by Pinterest, Twitter, and Instagram, featuring 10 monthly content posts with supporting stories. Strategic paid media allocation included Facebook page likes campaigns, Instagram boosted posts, native advertising driving traffic to educational blog content, programmatic retargeting, and Google Shopping. We established aggressive goals and specific B2B partnership targets.",
    impact: "The campaign successfully launched Travelsana from zero to established, achieving brand awareness and customer acquisition goals while generating e-commerce sales and B2B partnerships in the travel industry. Following pilot success, we transitioned full marketing control to the client team that expanded the proven strategy, embodying Chameleon Collective's \"when you are good, we are gone\" philosophy. The brand continues operating successfully in US and EU markets, demonstrating the launch infrastructure created sustainable independent growth.",
  },
]

function CaseModal({ cs, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handler)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', background: 'rgba(0,0,0,.75)', backdropFilter: 'blur(6px)', overflowY: 'auto', padding: '40px 24px' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }}
        transition={{ duration: .35 }}
        style={{ background: '#fff', maxWidth: 1060, width: '100%', position: 'relative', margin: '0 auto' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button onClick={onClose} style={{ position: 'sticky', top: 0, float: 'right', zIndex: 10, background: 'rgba(18,18,18,.85)', border: 'none', color: '#fff', width: 44, height: 44, cursor: 'pointer', fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>

        {/* Header with image side-by-side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px' }} className="modal-hero">
          <div style={{ background: cs.bg, padding: '48px 44px', borderLeft: `4px solid ${cs.accent}`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: cs.accent, marginBottom: 10 }}>{cs.tag}</div>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.3rem,2.8vw,1.9rem)', fontWeight: 300, color: '#fff', lineHeight: 1.2, marginBottom: 14, letterSpacing: '-.01em' }}>{cs.title}</h2>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 12 }}>
              <div>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: 4 }}>Client</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: 'rgba(255,255,255,.8)' }}>{cs.client}</div>
              </div>
              <div>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: 4 }}>Role</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: 'rgba(255,255,255,.8)' }}>{cs.role}</div>
              </div>
              <div>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: 4 }}>Category</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: 'rgba(255,255,255,.8)' }}>{cs.category}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 20 }}>
              {cs.tags.map(t => (
                <span key={t} style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', background: 'rgba(255,255,255,.08)', padding: '4px 10px', color: 'rgba(255,255,255,.6)' }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ overflow: 'hidden', background: cs.bg }}>
            <img src={cs.fullImg} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>

        {/* Content sections */}
        <div style={{ padding: '48px 48px' }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.15em', textTransform: 'uppercase', color: '#EA633F', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 20, height: 1, background: '#EA633F', display: 'block' }} />
              Challenge
            </div>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#444', lineHeight: 1.8 }}>{cs.challenge}</p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.15em', textTransform: 'uppercase', color: '#EA633F', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 20, height: 1, background: '#EA633F', display: 'block' }} />
              Approach
            </div>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#444', lineHeight: 1.8 }}>{cs.approach}</p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.15em', textTransform: 'uppercase', color: '#EA633F', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 20, height: 1, background: '#EA633F', display: 'block' }} />
              Impact
            </div>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#444', lineHeight: 1.8 }}>{cs.impact}</p>
          </div>

          <div style={{ borderTop: '1px solid #E8E8E8', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 14, fontWeight: 500, color: '#121212', marginBottom: 4 }}>Want results like this?</div>
              <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#888' }}>Let's talk about your brand and your market.</div>
            </div>
            <Link to="/contact" onClick={onClose} style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 500, letterSpacing: '.08em', textTransform: 'uppercase', padding: '12px 28px', background: '#EA633F', color: '#fff', textDecoration: 'none', transition: 'background .2s' }}
              onMouseEnter={e => e.target.style.background = '#D4572F'}
              onMouseLeave={e => e.target.style.background = '#EA633F'}
            >Get in Touch →</Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function CaseStudies() {
  const [selected, setSelected] = useState(null)

  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="lbl lbl-orange">Case Studies · Strategy · Results</span>
          <h1 className="page-h1">28 years of work.<br/>A selection of the cases that defined it.</h1>
          <p className="page-sub">From global CPG giants to challenger brands — strategic marketing leadership that moved culture and delivered measurable business outcomes.</p>
        </div>
      </section>

      {/* Case Study Grid — 3 columns, tall vertical cards */}
      <section style={{ background: '#F5F5F5', padding: '80px 64px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3 }} className="case-grid">
            {CASES.map((c, i) => (
              <FadeIn key={c.id} delay={i * .05}>
                <HoverLift>
                  <div
                    onClick={() => setSelected(c)}
                    style={{ background: '#fff', cursor: 'pointer', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <div style={{ position: 'relative', paddingBottom: '130%', overflow: 'hidden', background: c.bg }}>
                      <img src={c.thumb} alt={c.title} loading="lazy"
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .4s' }}
                        onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                      />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: c.accent }} />
                    </div>
                    <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column', borderLeft: `3px solid ${c.accent}` }}>
                      <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: c.accent, marginBottom: 6 }}>{c.tag}</div>
                      <h3 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(.85rem,1.2vw,1rem)', fontWeight: 500, color: '#121212', lineHeight: 1.3, marginBottom: 8 }}>{c.title}</h3>
                      <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.75rem', color: '#888', lineHeight: 1.6, marginBottom: 14, flex: 1 }}>{c.desc}</p>
                      <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.05em', textTransform: 'uppercase', color: '#EA633F', display: 'flex', alignItems: 'center', gap: 4 }}>
                        Read Case Study <span>→</span>
                      </div>
                    </div>
                  </div>
                </HoverLift>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{`
          @media(max-width:1200px){
            .case-grid{grid-template-columns:repeat(3,1fr)!important}
          }
          @media(max-width:900px){
            .case-grid{grid-template-columns:repeat(2,1fr)!important}
          }
          @media(max-width:600px){
            .case-grid{grid-template-columns:1fr!important}
            section[style*='80px 64px']{padding:60px 24px!important}
          }
          @media(max-width:768px){
            .modal-hero{grid-template-columns:1fr!important}
          }
        `}</style>
      </section>

      {/* Also Worked With */}
      <section style={{ background: '#121212', padding: '80px 64px', borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }} className="brands-grid">
          <FadeIn>
            <span className="lbl lbl-white">Also Worked With</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 300, color: '#fff', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 16 }}>28+ years across some of the world's most recognized brands.</h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.75 }}>My track record spans major global brands, Brazilian market leaders, and challenger brands entering competitive new markets.</p>
          </FadeIn>
          <FadeIn delay={.1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'rgba(255,255,255,.08)' }} className="brand-grid">
              {['AB-InBev', 'Natura &Co', 'PepsiCo', 'Tramontina', 'Grendene', 'Inter&Co', 'Conchita Foods', 'Microsoft', 'AT&T', 'Coca-Cola', 'Nokia', 'Intel'].map(b => (
                <div key={b} style={{ background: '#1E1E1E', padding: '20px 24px', fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,.45)', letterSpacing: '.02em' }}>{b}</div>
              ))}
            </div>
          </FadeIn>
        </div>
        <style>{"@media(max-width:900px){.brands-grid{grid-template-columns:1fr!important;gap:40px!important}.brand-grid{grid-template-columns:1fr 1fr!important}}"}</style>
      </section>

      {/* CTA */}
      <div className="cta-strip" style={{ padding: '80px 64px' }}>
        <FadeIn>
          <h2>Ready to build your next case study?</h2>
          <p>Let's talk about your brand, your market, and what winning in the US looks like for you.</p>
        </FadeIn>
        <Link to="/contact" className="btn btn-dark">Let's Talk →</Link>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <CaseModal cs={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </PageWrapper>
  )
}
