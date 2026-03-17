import { Link } from 'react-router-dom'
import { PageWrapper, FadeIn } from '../components/Animate'

const ARTICLES = [
  /* ── LINKEDIN NEWSLETTER (newest, unique to LinkedIn) ── */
  {
    source: 'LinkedIn',
    date: 'Nov 2025',
    title: 'Exciting News: Samba Rock Team Joins Chameleon Collective',
    url: 'https://www.linkedin.com/pulse/exciting-news-samba-rock-team-joins-chameleon-collective-samba-rock-but0e',
    img: 'https://media.licdn.com/dms/image/v2/D4E12AQFlqKE_7fsAEg/article-cover_image-shrink_720_1280/B4EZqCwBrAHoAI-/0/1763130220631',
    featured: true,
  },
  {
    source: 'LinkedIn',
    date: 'Sep 2025',
    title: 'Why Companies Are Abandoning $25,000 Quarterly Focus Groups',
    url: 'https://www.linkedin.com/pulse/why-companies-abandoning-25000-quarterly-focus-groups-samba-rock-wexge',
    img: 'https://media.licdn.com/dms/image/v2/D4E12AQF6Ykz8COqI6A/article-cover_image-shrink_600_2000/B4EZlZY_dbIIAQ-/0/1758141352380',
  },
  {
    source: 'LinkedIn',
    date: 'Sep 2025',
    title: 'The Growth Intelligence Revolution: Why Smart Businesses Are Trading Long Consulting Cycles for AI-Powered Insights',
    url: 'https://www.linkedin.com/pulse/growth-intelligence-revolution-why-smart-businesses-trading-4f0fe',
    img: 'https://media.licdn.com/dms/image/v2/D4E12AQFeg_BUW59g_A/article-cover_image-shrink_720_1280/B4EZkapSELHEAI-/0/1757088654057',
  },
  /* ── SAMBA ROCK ORIGINAL ARTICLES ── */
  {
    source: 'Samba Rock',
    date: 'Oct 23, 2024',
    title: 'Overcoming the Top 4 Business Pains Faced by International and Stagnant U.S. Brands',
    url: 'https://www.sambarock.us/news/overcoming-the-top-4-business-pains',
    img: 'https://images.squarespace-cdn.com/content/v1/60b28fc51a1997494136946c/1729628845272-8IADU53LLSMRV931IEP6/vklug_Partnering_with_a_growth_marketing_agency_helps_brands_ac_b3db1b1e-beed-4c46-a575-54a93fe0ab83.jpg?format=750w',
  },
  {
    source: 'Samba Rock',
    date: 'Aug 19, 2024',
    title: "AI in Advertising: The Superpower You Didn't Know You Needed (But Keep the Cape On)",
    url: 'https://www.sambarock.us/news/ai-in-advertising',
    img: 'https://images.squarespace-cdn.com/content/v1/60b28fc51a1997494136946c/1724098591726-1JY9ZGG4CLRQ0271643C/vklug_a_photo_to_illustrate_an_article_titled_AI_in_Advertising_0d19b6c2-34c6-4f8f-8c41-2d2ffec7822f.jpeg?format=750w',
  },
  /* ── LINKEDIN NEWSLETTER (unique mid-2024 articles) ── */
  {
    source: 'LinkedIn',
    date: 'Jul 2024',
    title: 'What is USP? (Unique Selling Point / Unique Selling Proposition)',
    url: 'https://www.linkedin.com/pulse/what-usp-unique-selling-pointunique-proposition-samba-rock-f0sjf',
    img: 'https://media.licdn.com/dms/image/v2/D4D12AQHS0Tc_5MRy2Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1722363985785',
  },
  {
    source: 'LinkedIn',
    date: 'Jul 2024',
    title: 'Insights and Strategies for Success: Does Advertising Work?',
    url: 'https://www.linkedin.com/pulse/insights-strategies-success-does-advertising-work-samba-rock-fbjhf',
    img: 'https://media.licdn.com/dms/image/v2/D4D12AQHXzvgk68XCmg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721849746488',
  },
  {
    source: 'Samba Rock',
    date: 'Jul 17, 2024',
    title: 'Samba Rock Unveils Bold New Brand Identity and Strategic Expansion',
    url: 'https://www.sambarock.us/news/samba-rock-new-brand-identity',
    img: 'https://images.squarespace-cdn.com/content/v1/60b28fc51a1997494136946c/1721138920670-66VUSGLDQZ3WGD0WMO54/4.png?format=750w',
  },
  {
    source: 'LinkedIn',
    date: 'Jul 2024',
    title: 'Does SEO Really Work?',
    url: 'https://www.linkedin.com/pulse/does-seo-really-work-samba-rock-fvhxe',
    img: 'https://media.licdn.com/dms/image/v2/D4E12AQF1LdJACbUSOQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721171854002',
  },
  {
    source: 'LinkedIn',
    date: 'Jul 2024',
    title: 'Unlocking Retail Success: 8 Game-Changing Insights for CPG Brands',
    url: 'https://www.linkedin.com/pulse/unlocking-retail-success-8-game-changing-insights-cpg-brands-8hzwf',
    img: 'https://media.licdn.com/dms/image/v2/D4D12AQFvSFyYFc4N8w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721191066862',
  },
  {
    source: 'Samba Rock',
    date: 'Jun 12, 2024',
    title: 'CPG Marketing: Strategies and Trends in a Crowded Market',
    url: 'https://www.sambarock.us/news/cpg-marketing',
    img: 'https://images.squarespace-cdn.com/content/v1/60b28fc51a1997494136946c/1718221053641-VP5ZNI5UVGMTQ6X6E0VP/CPG_Marketing_article.jpg?format=750w',
  },
  {
    source: 'Samba Rock',
    date: 'May 29, 2024',
    title: 'From Layoff to Launch: My Journey from Y&R Miami to Samba Rock',
    url: 'https://www.sambarock.us/news/from-young-and-rubicam-to-samba-rock',
    img: 'https://images.squarespace-cdn.com/content/v1/60b28fc51a1997494136946c/1717037726804-1MP27C4CDUNI4B7VXO6H/A_dynamic_digital_painting_of_a_Creative_Director_at_YR_Miami__d45644c4-1249-4305-b207-b4e793d17361+%281%29+copy.jpg?format=750w',
  },
  {
    source: 'Samba Rock',
    date: 'May 23, 2024',
    title: 'Competitive Insights: Gaining the Edge in a Crowded Marketplace',
    url: 'https://www.sambarock.us/news/competitive-insights-gaining-the-edge-in-a-crowded-marketplace',
    img: 'https://images.squarespace-cdn.com/content/v1/60b28fc51a1997494136946c/1716517324250-FT9YIU768BIQJ0124IM5/vklug_A_detailed_competitive_analysis_scene_with_professionals__5ce44f32-e49e-4450-af76-313d526ec8c8.jpeg?format=750w',
  },
  {
    source: 'LinkedIn',
    date: 'Apr 2024',
    title: 'Boost Your Strategy with UGC Creators',
    url: 'https://www.linkedin.com/pulse/boost-your-strategy-ugc-creators-samba-rock-by3uf',
    img: 'https://media.licdn.com/dms/image/v2/D4D12AQFJkkpq-ugIvQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1713292035252',
  },
  {
    source: 'LinkedIn',
    date: 'Mar 2024',
    title: "Turning That Frustrating 'Stuck' Feeling Into Growth",
    url: 'https://www.linkedin.com/pulse/turning-frustrating-stuck-feeling-growth-samba-rock-xuc4c',
    img: 'https://media.licdn.com/dms/image/v2/D5612AQE7vSp2ATeYnA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711484224344',
  },
  /* ── FORBES ARTICLES ── */
  {
    source: 'Forbes',
    date: 'Feb 7, 2024',
    title: 'Innovative Strategies For Revitalizing Stagnant Brands',
    url: 'https://www.forbes.com/councils/forbesbusinesscouncil/2024/02/07/innovative-strategies-for-revitalizing-stagnant-brands/',
    img: 'https://imageio.forbes.com/specials-images/imageserve/65c28ba8afc49ce046092bf0/Manager-presenting-his-coworkers-new-business-strategy-on-a-meeting-/960x0.jpg',
  },
  {
    source: 'LinkedIn',
    date: 'Feb 2024',
    title: 'Introducing Maison SR by Samba Rock',
    url: 'https://www.linkedin.com/pulse/introducing-maison-sr-samba-rock-samba-rock-kakwf',
    img: 'https://media.licdn.com/dms/image/v2/D4D12AQGmGa-NPSXNaw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707241990808',
  },
  {
    source: 'LinkedIn',
    date: 'Dec 2023',
    title: 'My Journey with 10,000 Small Businesses',
    url: 'https://www.linkedin.com/pulse/my-journey-10000-small-businesses-samba-rock-nacce',
    img: 'https://media.licdn.com/dms/image/v2/D4E12AQFl6nUWpDdbpQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1703005835812',
  },
  {
    source: 'Forbes',
    date: 'Dec 12, 2023',
    title: "Your Startup Is No Longer Just Starting Up: What's Next?",
    url: 'https://www.forbes.com/councils/forbesbusinesscouncil/2023/12/12/your-startup-is-no-longer-just-starting-up-whats-next/',
    img: 'https://imageio.forbes.com/specials-images/imageserve/5fe33b61285ff6033e351c4f/Businesswoman-explaining-diagram-to-female-coworker/960x0.jpg',
  },
  {
    source: 'Forbes',
    date: 'Oct 24, 2023',
    title: 'Navigating The American Dream: A Guide For International Brands',
    url: 'https://www.forbes.com/councils/forbesbusinesscouncil/2023/10/24/navigating-the-american-dream-a-guide-for-international-brands/',
    img: 'https://imageio.forbes.com/specials-images/imageserve/611c26c49110133e17342af3/0x0.jpg',
  },
  {
    source: 'Forbes',
    date: 'Aug 22, 2023',
    title: 'Translating Chess Tactics Into Entrepreneurial Triumphs',
    url: 'https://www.forbes.com/councils/forbesbusinesscouncil/2023/08/22/translating-chess-tactics-into-entrepreneurial-triumphs/',
    img: 'https://imageio.forbes.com/specials-images/imageserve/64e36ab5d5e831171f0f2eb2/Businessman-hand-with-businessman-goal-with-chess/960x0.jpg',
  },
  {
    source: 'LinkedIn',
    date: 'Aug 2023',
    title: 'Navigating the Social Media Dilemma: Agency vs Internal Team',
    url: 'https://www.linkedin.com/pulse/navigating-social-media-dilemma-agency-vs-internal-team-samba-rock',
    img: 'https://media.licdn.com/dms/image/v2/D4E12AQGS3AB1FMaHkw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1692630711709',
  },
  {
    source: 'LinkedIn',
    date: 'Jul 2023',
    title: 'The Art of Going Global: Lessons on Building a Strong International Brand',
    url: 'https://www.linkedin.com/pulse/art-going-global-lessons-building-strong-international-brand',
    img: 'https://media.licdn.com/dms/image/v2/D4D12AQGYOnf4QDO2yg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1689622877582',
  },
  {
    source: 'Forbes',
    date: 'Jul 7, 2023',
    title: 'Thinking Outside The Borders: Brazilian E-Commerce Opportunities',
    url: 'https://www.forbes.com/councils/forbesbusinesscouncil/2023/07/07/thinking-outside-the-borders-brazilian-e-commerce-opportunities/',
    img: 'https://imageio.forbes.com/specials-images/imageserve/64a6d16a86d3e8ac3eb1aac7/Financial-District-in-Sao-Paulo--Brazil-/960x0.jpg',
  },
  {
    source: 'LinkedIn',
    date: 'Jul 2023',
    title: 'The Power of Localization: Strategies for Adapting Your Brand to International Markets',
    url: 'https://www.linkedin.com/pulse/power-localization-strategies-adapting-your-brand-international',
    img: 'https://media.licdn.com/dms/image/v2/D5612AQGXnKCQOeCICA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1688406543498',
  },
  {
    source: 'Forbes',
    date: 'May 30, 2023',
    title: 'Making Lemonade: Turning A Layoff Into An Opportunity',
    url: 'https://www.forbes.com/councils/forbesbusinesscouncil/2023/05/30/making-lemonade-turning-a-layoff-into-an-opportunity/',
    img: 'https://imageio.forbes.com/specials-images/imageserve/6470e350f26d17eb639d86b2/Business-man-working-at-a-restaurant/960x0.jpg',
  },
  {
    source: 'Forbes',
    date: 'May 1, 2023',
    title: 'Unlocking The Power Of AI In Marketing And Business Development',
    url: 'https://www.forbes.com/councils/forbesbusinesscouncil/2023/05/01/unlocking-the-power-of-ai-in-marketing-and-business-development/',
    img: 'https://imageio.forbes.com/specials-images/imageserve/63529aeea7726e421adbbaa8/960x0.jpg',
  },
  /* ── SAMBA ROCK PRESS & OLDER ARTICLES ── */
  {
    source: 'LinkedIn',
    date: 'Mar 2024',
    title: 'Elevate Your Brand with "A.M.P.: Amplify Your Growth and Re-Energize Your Business"',
    url: 'https://www.linkedin.com/pulse/elevate-your-brand-amp-amplify-growth-re-energize-business-xthof',
    img: 'https://media.licdn.com/dms/image/v2/D4D12AQERGY1hLjJ7TQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710440035252',
  },
  {
    source: 'Estadão',
    date: 'Apr 13, 2023',
    title: 'Valter Klug Gives an Interview to Top Brazilian Newspaper',
    url: 'https://www.sambarock.us/news/blog-post-title-three-r6nzy',
    img: 'https://images.squarespace-cdn.com/content/v1/60b28fc51a1997494136946c/1681511795650-B3MLFRQCA9S54H6PQ5ZT/1681362254293.jpeg?format=750w',
  },
  {
    source: 'Samba Rock',
    date: 'Mar 6, 2023',
    title: 'The Importance of Communication in Brand Internationalization',
    url: 'https://www.sambarock.us/news/blog-post-title-two-w2pp9',
    img: 'https://images.squarespace-cdn.com/content/v1/60b28fc51a1997494136946c/1681501414764-KWWO2LX10HNGZR5657BL/A-importancia-da-comunicacao-na-internacionalizacao-da-marca.jpg?format=750w',
  },
  {
    source: 'Samba Rock',
    date: 'Jan 23, 2023',
    title: '10 Tips for Companies Looking to Internationalize Their Brands',
    url: 'https://www.sambarock.us/news/blog-post-title-one-lh82n',
    img: 'https://images.squarespace-cdn.com/content/v1/60b28fc51a1997494136946c/1681500331646-8FGQRV00UFDLBJQQJ8OX/internacionalizacao-de-empresas1.jpg?format=750w',
  },
  {
    source: 'Samba Rock',
    date: 'Dec 22, 2022',
    title: 'Samba Rock Has Launched in Brazil',
    url: 'https://www.sambarock.us/news/rndupa3xtskydopomzh6m4vdcoaq9k',
    img: 'https://images.squarespace-cdn.com/content/v1/60b28fc51a1997494136946c/1681512159526-IFMDWGI24PLIEBOPVVAF/1671723919049.jpeg?format=750w',
  },
]

const SOURCE_COLORS = {
  Forbes: '#B91C1C',
  'Samba Rock': '#EA633F',
  Estadão: '#1E40AF',
  LinkedIn: '#0A66C2',
}

export default function News() {
  const featured = ARTICLES.find(a => a.featured) || ARTICLES[0]
  const rest = ARTICLES.filter(a => a !== featured)

  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="lbl lbl-orange">News · Insights · Press</span>
          <h1 className="page-h1">Perspectives on international brand expansion, fractional leadership, and the US market.</h1>
          <p className="page-sub">Published articles, media features, and insights from 28 years in the business.</p>
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section style={{background:'#EAEAC8',padding:'80px 64px',borderTop:'1px solid rgba(18,18,18,.1)'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <FadeIn>
            <span className="lbl lbl-cream">Featured</span>
            <a href={featured.url} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',display:'block'}}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:1,background:'rgba(18,18,18,.1)',marginTop:16,cursor:'pointer'}} className="feat-grid">
                <div style={{background:'#121212',padding:'52px 48px'}}>
                  <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:12}}>
                    <span style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:10,fontWeight:600,letterSpacing:'.08em',textTransform:'uppercase',color:'#fff',background:SOURCE_COLORS[featured.source]||'#EA633F',padding:'3px 8px',borderRadius:2}}>{featured.source}</span>
                  </div>
                  <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:11,fontWeight:500,color:'rgba(255,255,255,.3)',marginBottom:20}}>{featured.date}</div>
                  <h2 style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'clamp(1.3rem,2.5vw,1.75rem)',fontWeight:300,color:'#fff',lineHeight:1.25,marginBottom:20}}>{featured.title}</h2>
                  <span className="tlink tlink-white">Read on {featured.source} →</span>
                </div>
                <div style={{background:'#000',position:'relative',overflow:'hidden',minHeight:300}}>
                  <img src={featured.img} alt={featured.title} style={{width:'100%',height:'100%',objectFit:'cover',opacity:.85}} loading="lazy" />
                </div>
              </div>
            </a>
          </FadeIn>
        </div>
        <style>{"@media(max-width:768px){.feat-grid{grid-template-columns:1fr!important}section[style*='80px 64px']{padding:60px 24px!important}}"}</style>
      </section>

      {/* ── ALL ARTICLES ── */}
      <section style={{background:'#fff',padding:'80px 64px',borderTop:'1px solid #E8E8E8'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <FadeIn><span className="lbl">All Articles</span></FadeIn>
          <div style={{display:'flex',flexDirection:'column',gap:1,background:'#E8E8E8',marginTop:24}}>
            {rest.map((a,i)=>(
              <FadeIn key={a.url} delay={i*.03}>
                <a href={a.url} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',display:'block'}}>
                  <div style={{background:'#fff',padding:0,display:'grid',gridTemplateColumns:'220px 1fr',gap:0,alignItems:'stretch',transition:'background .2s',cursor:'pointer'}}
                    onMouseEnter={e=>e.currentTarget.style.background='#F5F5F5'}
                    onMouseLeave={e=>e.currentTarget.style.background='#fff'}
                    className="article-row">
                    <div style={{position:'relative',overflow:'hidden',background:'#eee',minHeight:150}}>
                      <img src={a.img} alt={a.title} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} loading="lazy" />
                    </div>
                    <div style={{padding:'28px 32px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
                        <span style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:10,fontWeight:600,letterSpacing:'.08em',textTransform:'uppercase',color:'#fff',background:SOURCE_COLORS[a.source]||'#EA633F',padding:'2px 8px',borderRadius:2}}>{a.source}</span>
                        <span style={{fontFamily:'Inter,sans-serif',fontSize:12,color:'#999'}}>{a.date}</span>
                      </div>
                      <h3 style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'1rem',fontWeight:500,color:'#121212',marginBottom:12,lineHeight:1.35}}>{a.title}</h3>
                      <span className="tlink">Read Article →</span>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
          <style>{"@media(max-width:600px){.article-row{grid-template-columns:1fr!important}}"}</style>
        </div>
      </section>

      <div className="cta-strip" style={{padding:'80px 64px'}}>
        <FadeIn>
          <h2>Want these insights in your inbox?</h2>
          <p>I occasionally share perspectives on international brand expansion and the US market. No fluff — only when I have something worth saying.</p>
        </FadeIn>
        <Link to="/contact" className="btn btn-dark">Get in Touch →</Link>
      </div>
    </PageWrapper>
  )
}
