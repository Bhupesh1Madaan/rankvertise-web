import React, { useState, useEffect } from 'react';
import { useData, GOOGLE_SHEET_API_URL } from '../context/DataContext';
import './AdminPortal.css';

const CLOUDINARY_CLOUD_NAME = "YOUR_CLOUDINARY_CLOUD_NAME";
const CLOUDINARY_UPLOAD_PRESET = "YOUR_UNSIGNED_PRESET";
const ADMIN_SECURITY_PIN = "rank2026";

export default function AdminPortal() {
  const { data, refreshData } = useData();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('scrollstack');
  const [savingKey, setSavingKey] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  // ── 1. HOME: SCROLL STACK STATE ──
  const [scrollStackCards, setScrollStackCards] = useState([
    { title: "01 / BRAND IDENTITY", desc: "Logo. Voice. Vibe. All dialed in. Whether you're starting out or starting over, we'll design a brand that actually speaks." },
    { title: "02 / SOCIAL MEDIA & CONTENT", desc: "We don't just manage. We create. Our content strategies are scroll-stopping, algorithm-busting, and extremely double-tap worthy." },
    { title: "03 / DIGITAL MARKETING THAT CLICKS", desc: "Your goals + our data-backed brains = ROI that actually means something. From SEO to paid ads, we speak digital fluently." },
    { title: "04 / WEB EXPERIENCES", desc: "Websites that look hot and load fast. From portfolios to e-commerce, we turn code into conversion." },
    { title: "05 / CREATIVE PRODUCTION", desc: "Ideas are cute. Execution is everything. From aesthetic to impact, we concept, shoot, and produce brand content that doesn't just sit pretty, it performs." }
  ]);

  // ── 2. HOME: MAGIC BENTO STATE ──
  const [bentoCards, setBentoCards] = useState([
    { color: '#2a0b10', title: '10+ Years', description: 'Relentless dominance in the digital industry space.', label: 'EXPERIENCE', sizeClass: 'bento-large' },
    { color: '#1a0508', title: '100+ Brands', description: 'Satisfied global clients who scaled their presence with us.', label: 'TRUSTED BY', sizeClass: 'bento-small' },
    { color: '#1a0508', title: '20+ Master Campaigns', description: 'High-velocity creative concepts engineered for viral impact.', label: 'DELIVERED', sizeClass: 'bento-small' },
    { color: '#3d0f16', title: '3 Countries', description: 'Cross-border operations syncing internet trends globally.', label: 'MARKET REACH', sizeClass: 'bento-medium' }
  ]);

  // ── 3. HOME: CIRCULAR GALLERY STATE ──
  const [galleryItems, setGalleryItems] = useState([
    { image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600', text: 'ALGORITHM BUSTING' },
    { image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600', text: 'VIRAL REELS FORMAT' },
    { image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=600', text: 'SCROLL STOPPING CONTENT' },
    { image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600', text: 'CULTURAL ICON STRATEGY' }
  ]);

  // ── 4. HOME: CLIENT ORBIT STATE ──
  const [orbitClients, setOrbitClients] = useState([
    { logo: "https://static.wixstatic.com/media/4fce5e_f579dec309b24713bbbacae25da05c5c~mv2.png", url: "https://rankvertise.in" },
    { logo: "https://static.wixstatic.com/media/4fce5e_3a747d46d465459cb71669eb0a5e7a10~mv2.png", url: "https://rankvertise.in" },
    { logo: "https://static.wixstatic.com/media/4fce5e_23443126bf6443f0b7e88ffc57d846be~mv2.png", url: "https://rankvertise.in" },
    { logo: "https://static.wixstatic.com/media/4fce5e_4dfc40799fb242479d108fa60e46653c~mv2.png", url: "https://rankvertise.in" },
    { logo: "https://static.wixstatic.com/media/4fce5e_40e22c72ffb9402e9c8ee15d632cf7e2~mv2.png", url: "https://rankvertise.in" }
  ]);

  // ── 5. ABOUT US STATE (ALL 6 SECTIONS) ──
  const [aboutData, setAboutData] = useState({
    // Section 1: The Hero Manifesto & Operations Tagline
    tag: "Rankvertise Operations",
    rotatingTexts: ["Disrupt Markets.", "Scale Platforms.", "Override Algorithms.", "Capture Intent."],
    manifestoDesc: "Traditional advertising frameworks are fundamentally lazy. They optimize for vanity metrics while capital evaporates. Rankvertise builds composable technology layers to acquire permanent attention models. Scroll to inspect our internal architecture benchmarks.",
    
    // Section 2: Velocity Operations Architecture
    s2Subtag: "System Telemetry // 02",
    s2Heading: "Velocity Operations Architecture",
    s2Lead: "We replace human processing delay fields with high-performance automated ingestion components.",
    s2Counter1Val: "+310%",
    s2Counter1Text: "Average organic domain footprint authority growth acceleration across clients.",
    s2Counter2Val: "-42%",
    s2Counter2Text: "Latent bounce velocity drops tracking micro-frontend structural refactors.",
    s2Image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    
    // Section 3: The Cross-Functional Growth Core (Human-in-the-loop Matrix)
    s3Subtag: "Human-in-the-loop Matrix // 03",
    s3Heading: "The Cross-Functional Growth Core",
    s3Desc: "We don't assign isolated freelancers or leave your scaling assets unsupervised. Rankvertise deploys a dedicated structural unit mapping directly to your brand ecosystems—ensuring end-to-end integration across every protocol.",
    pillars: [
      { code: "// SYSTEM ENGINEERS", title: "Infrastructure Specialists", desc: "Handling micro-frontend architectural speeds, Core Web Vitals structural loops, and absolute zero latent processing pipeline optimization." },
      { code: "// DATA ARCHITECTS", title: "Algorithmic Engineers", desc: "Deconstructed tracking matrices manipulating intent keywords, semantic graph matching, and indexing overrides for permanent organic gravity." },
      { code: "// OPERATIONS CORES", title: "Dedicated Account Custodians", desc: "Your centralized interface node. Synchronizing telemetry updates, asset delivery layers, and absolute high-fidelity priority project management." }
    ],
    priorityBannerHero: "\"Your scaling vectors aren't passed down a generic assembly line. You are the absolute engineering priority.\"",
    priorityBannerSub: "From continuous optimization loops to enterprise-wide infrastructure deployment, your assets are managed by a cohesive, dedicated operational core built to protect and compound your growth.",
    
    // Section 4: Visualizing Disruption Trajectories (Performance Analytics & Telemetry)
    s4Tag: "Performance Analytics // 04",
    s4Heading: "Visualizing Disruption Trajectories",
    s4Desc: "Raw mathematical projections and operational scaling curves outperforming legacy marketing indices. We optimize vectors in real-time.",
    metric1Val: "94.2%",
    metric1Title: "Algorithmic Retain Efficiency",
    metric1Desc: "Continuous indexing structures anchoring nodes against core update fluctuations.",
    metric2Val: "0.18s",
    metric2Title: "Edge Content Delivery Max Latency",
    metric2Desc: "Global edge caching overrides bypassing traditional proxy rendering bottlenecks.",
    
    // Section 5: Genesis to Market Dominance (Chronicle Timeline Logs)
    s5Subtag: "Chronicle Logs // 05",
    s5Heading: "Genesis to Market Dominance",
    s5Desc: "How we evolved from an automated micro-script experiment into a multi-vertical strategic enterprise engine.",
    timeline: [
      { dateTag: "Phase Alpha // 2023", title: "The Core Script Sandbox", desc: "Deconstructed conventional scraper pipelines to engineer an automated micro-script infrastructure that autonomously indexed and matched complex user search patterns." },
      { dateTag: "Scale Engine // 2024", title: "Algorithmic Projections Expansion", desc: "Transitioned from isolated testing sandboxes into active enterprise deployments. Launched real-time telemetry processing overlays to track user retention footprints dynamically." },
      { dateTag: "Dominance Matrix // 2026", title: "Multi-Vertical Enterprise Core", desc: "Today, Rankvertise transforms raw search architecture. Overriding modern programmatic restrictions to build permanent authority structures for globally scaling clients." }
    ],

    // Section 6: Strategic Divergence (Anti-Agency Comparison Engine)
    s6Tag: "Strategic Divergence // 06",
    s6Heading: "Why We are Fundamentally Different",
    s6Desc: "Conventional agencies lock you into restrictive contracts to optimize for vanity metrics. Rankvertise builds composable technology layers to acquire permanent market gravity.",
    legacyHeading: "The Traditional Agency Retainer",
    legacyPoints: [
      { title: "Vanity Metric Tuning", desc: "Optimizing for surface-level impressions, likes, and soft-clicks while capital efficiency and real pipelines evaporate." },
      { title: "Human Delay Triggers", desc: "Asset execution relies entirely on siloed manual processing, introducing immense latency and communication barriers." },
      { title: "Leased Traction Models", desc: "The moment you stop paying their monthly retainer fee, your visibility footprint instantly zeroes out." }
    ],
    protocolHeading: "The Algorithmic Ingestion Core",
    protocolPoints: [
      { title: "Intent Capture Frameworks", desc: "We isolate and capture high-converting search coordinates directly before your competitors can bid on them." },
      { title: "Automated Ingestion Loops", desc: "Deploying direct machine micro-scripts that continuously inject, map, and track web vitals around the clock." },
      { title: "Permanent Asset Assets", desc: "We construct self-sustaining micro-frontend architectures that compound authority, making your traffic permanent." }
    ]
  });

  // ── 6. SERVICES STATE ──
  const [servicesData, setServicesData] = useState({
    heroTag: "Rankvertise Matrix",
    heroHeadline: "How We Disrupt Markets.",
    heroDesc: "We don't deploy standard, lazy marketing strategies. Rankvertise engineers bespoke, conversion-driven digital architectures that accelerate growth velocity and capture permanent attention.",
    servicesList: [
      {
        id: "seo",
        title: "Search Engine & Traffic Services",
        brief: "Command permanent digital territory. We build semantic structures that place your brand at the absolute hot-spot of human intent.",
        subServices: [
          { name: "Search Engine Optimization (SEO)", desc: "Advanced entity-based architecture to override raw organic search loops." },
          { name: "Local SEO (Google Maps Mastery)", desc: "Hyper-localized citation frameworks capturing regional conversion footprints." },
          { name: "Technical SEO Audits", desc: "Deconstructing core web vitals, rendering pipelines, and automated crawling graphs." },
          { name: "Pay-Per-Click (PPC) Frameworks", desc: "High-yield instant monetization frameworks capturing real-time traffic." }
        ],
        example: "Real-Time Dominance: Imagine an elite fintech platform scaling from zero to 4.2 Million monthly hits without spending a single dollar on ad networks—pure algorithmic authority captures the highest intent users before competitors awake."
      },
      {
        id: "smm",
        title: "Social Media Marketing Funnel",
        brief: "Intercept cultural trends and monetize attention spans. We translate raw engagement numbers into scalable customer acquisition flywheels.",
        subServices: [
          { name: "Social Media Management (SMM)", desc: "Bespoke asset pacing, content curation, and premium aesthetic governance." },
          { name: "Performance Social Advertising", desc: "Laser-targeted paid funnel systems across Meta, LinkedIn, and TikTok ad algorithms." },
          { name: "Influencer Pragmatic Alliances", desc: "Programmatic node tracking to align your product with high-authority cultural creators." },
          { name: "Social Listening Frameworks", desc: "Real-time parsing of market sentiment waves to optimize copy assets instantly." }
        ],
        example: "Real-Time Dominance: A modern D2C brand triggers a structured viral loop across Gen Z demographics—garnering 45,000 orders within 48 hours by executing predictive hook matrices instead of standard corporate posts."
      },
      {
        id: "content",
        title: "Content & Creative Studio",
        brief: "Bespoke storytelling mixed with behavioral metrics. We construct asset structures that possess compounding interest velocities.",
        subServices: [
          { name: "High-Level Copywriting Assets", desc: "Psychology-backed sales letters, whitepapers, and high-authority blog structures." },
          { name: "Cinematic Video Marketing", desc: "High-retention Reels, Shorts, and explainer models mapped to user attention drops." },
          { name: "Bespoke Design Infrastructure", desc: "Architecting elite brand style guides, vectors, and complex spatial UI visuals." }
        ],
        example: "Real-Time Dominance: An enterprise software firm prints data-backed case studies that single-handedly close a $1.2M B2B contract by removing friction loops through pure analytical storytelling."
      },
      {
        id: "webTech",
        title: "Web & Tech Architecture",
        brief: "Engineered for pure speed, clean headless components, and fluid conversion mechanics. We construct fast digital canvases.",
        subServices: [
          { name: "Headless Web Development", desc: "Highly robust React, Next.js, WordPress, or Shopify custom infrastructure setups." },
          { name: "E-Commerce Pipeline Scaling", desc: "Zero-latency transaction channels configured for instantaneous checkout loops." },
          { name: "UI/UX Cognitive Strategy", desc: "Bespoke digital interface layouts designed around modern human scrolling behaviors." }
        ],
        example: "Real-Time Dominance: An international marketplace cuts bounce rates by 42% just by shaving 1.8 seconds off their interface delivery speeds, instantly boosting daily transaction values."
      },
      {
        id: "automation",
        title: "Direct Marketing & Automation",
        brief: "Programmatic nurturing funnels that run round-the-clock. Remove human delay matrices from your sales processing cycles.",
        subServices: [
          { name: "Lifecycle Automation Scripts", desc: "Advanced database trigger flows handling personalized newsletter journeys." },
          { name: "Omnichannel WhatsApp & SMS Engine", desc: "Instantaneous click-to-open interaction channels with immediate processing hooks." },
          { name: "Enterprise CRM Interlock", desc: "Securely bridging external data pipelines with internal conversion systems." }
        ],
        example: "Real-Time Dominance: A modern subscription brand automates its cart-abandonment loops, capturing 28% of dropped leads while its operational team is completely offline."
      },
      {
        id: "branding",
        title: "Branding & Strategy Models",
        brief: "Isolate your business from raw price wars. We program unshakeable brand perception algorithms that command pricing premiums.",
        subServices: [
          { name: "Competitive Gaps Mapping", desc: "Data-driven parsing of competitive sectors to isolate market blindspots." },
          { name: "Corporate PR & Digital Authority", desc: "Securing primary press vectors to maximize domain power matrices." },
          { name: "Online Reputation Management (ORM)", desc: "Continuous monitoring and proactive governance of public brand perceptions." }
        ],
        example: "Real-Time Dominance: A manufacturing group re-positions its brand identity away from utility vendor status into global strategic leadership, doubling its pricing quotes without losing clients."
      }
    ],
    testimonials: [
      { quote: "Rankvertise completely re-engineered our customer acquisition loop. Our organic traffic grew by 310% within months, bypassing high ad network dependency entirely.", name: "Arjun Mehta", role: "Founder, FinTech Matrix" },
      { quote: "Their tech stack deployment velocity is incredible. The headless interface they custom built reduced our checkout friction to absolute zero. Exceptional conversion design.", name: "Sarah Jenkins", role: "Operations Director, Core D2C" }
    ]
  });

  // Synchronize Google Sheet data into Component States
  useEffect(() => {
    if (data) {
      if (data.scroll_stack_data) {
        try { setScrollStackCards(JSON.parse(data.scroll_stack_data)); } catch (e) {}
      }
      if (data.bento_cards_data) {
        try { setBentoCards(JSON.parse(data.bento_cards_data)); } catch (e) {}
      }
      if (data.circular_gallery_data) {
        try { setGalleryItems(JSON.parse(data.circular_gallery_data)); } catch (e) {}
      }
      if (data.client_orbit_data) {
        try { setOrbitClients(JSON.parse(data.client_orbit_data)); } catch (e) {}
      }
      if (data.about_page_data) {
        try { setAboutData(JSON.parse(data.about_page_data)); } catch (e) {}
      }
      if (data.services_page_data) {
        try { setServicesData(JSON.parse(data.services_page_data)); } catch (e) {}
      }
    }
  }, [data]);

  useEffect(() => {
    const authSession = sessionStorage.getItem('admin_auth');
    if (authSession === 'true') setIsAuthenticated(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (pinInput === ADMIN_SECURITY_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid Security PIN');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`, {
      method: "POST",
      body: formData
    });
    const result = await res.json();
    return result.secure_url;
  };

  const saveSectionToSheet = async (key, payload) => {
    setSavingKey(key);
    setStatusMsg(`Saving ${key} to Google Sheets...`);
    try {
      await fetch(GOOGLE_SHEET_API_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ key, value: JSON.stringify(payload) })
      });
      setStatusMsg(`Successfully saved ${key}!`);
      refreshData();
    } catch (err) {
      setStatusMsg(`Error saving ${key}: ` + err.message);
    } finally {
      setSavingKey('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-stage">
        <form className="admin-login-card" onSubmit={handleLogin}>
          <span className="admin-login-tag">RANKVERTISE PORTAL</span>
          <h2>Access Administration</h2>
          <input
            type="password"
            placeholder="Enter Security PIN"
            value={pinInput}
            onChange={(e) => setPinInput(e.target.value)}
            autoFocus
          />
          {loginError && <p className="admin-error-text">{loginError}</p>}
          <button type="submit" className="admin-btn-primary">Unlock Portal ➔</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-portal-dashboard">
      <div className="admin-navbar">
        <div>
          <h1>Rankvertise CMS Control Engine</h1>
          <p>Live Dashboard for Home, About Us, and Services Pages.</p>
        </div>
        <button onClick={handleLogout} className="admin-logout-btn">Log Out</button>
      </div>

      {statusMsg && <div className="admin-alert-banner">{statusMsg}</div>}

      <div className="admin-tabs-row">
        <button className={activeTab === 'scrollstack' ? 'active' : ''} onClick={() => setActiveTab('scrollstack')}>
          1. ScrollStack
        </button>
        <button className={activeTab === 'bento' ? 'active' : ''} onClick={() => setActiveTab('bento')}>
          2. Magic Bento
        </button>
        <button className={activeTab === 'gallery' ? 'active' : ''} onClick={() => setActiveTab('gallery')}>
          3. Circular Gallery
        </button>
        <button className={activeTab === 'orbit' ? 'active' : ''} onClick={() => setActiveTab('orbit')}>
          4. Client Orbit
        </button>
        <button className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab('about')}>
          5. About Us Page
        </button>
        <button className={activeTab === 'services' ? 'active' : ''} onClick={() => setActiveTab('services')}>
          6. Services Page
        </button>
      </div>

      <div className="admin-tab-body">
        {/* ── TAB 1: SCROLL STACK ── */}
        {activeTab === 'scrollstack' && (
          <div className="admin-section-box">
            <h3>ScrollStack Cards (5 Cards)</h3>
            <div className="admin-cards-list">
              {scrollStackCards.map((card, idx) => (
                <div key={idx} className="admin-edit-row-card">
                  <span className="admin-badge">Card #{idx + 1}</span>
                  <input
                    type="text"
                    value={card.title}
                    onChange={(e) => {
                      const updated = [...scrollStackCards];
                      updated[idx].title = e.target.value;
                      setScrollStackCards(updated);
                    }}
                    placeholder="Heading"
                  />
                  <textarea
                    rows={3}
                    value={card.desc}
                    onChange={(e) => {
                      const updated = [...scrollStackCards];
                      updated[idx].desc = e.target.value;
                      setScrollStackCards(updated);
                    }}
                    placeholder="Description text"
                  />
                </div>
              ))}
            </div>
            <button
              className="admin-save-section-btn"
              disabled={savingKey === 'scroll_stack_data'}
              onClick={() => saveSectionToSheet('scroll_stack_data', scrollStackCards)}
            >
              {savingKey === 'scroll_stack_data' ? 'Saving...' : 'Save ScrollStack to Sheet ➔'}
            </button>
          </div>
        )}

        {/* ── TAB 2: MAGIC BENTO ── */}
        {activeTab === 'bento' && (
          <div className="admin-section-box">
            <div className="admin-subhead-row">
              <h3>Magic Bento Metrics</h3>
              <button
                className="admin-btn-secondary"
                onClick={() => setBentoCards([...bentoCards, { color: '#1a0508', title: 'New Stat', description: 'Stat details here', label: 'METRIC', sizeClass: 'bento-small' }])}
              >
                + Add Card
              </button>
            </div>
            <div className="admin-cards-list">
              {bentoCards.map((bento, idx) => (
                <div key={idx} className="admin-edit-row-card">
                  <div className="admin-inline-split">
                    <span className="admin-badge">Bento #{idx + 1}</span>
                    <button className="admin-delete-btn" onClick={() => setBentoCards(bentoCards.filter((_, i) => i !== idx))}>Delete</button>
                  </div>
                  <input type="text" value={bento.label} onChange={(e) => { const u = [...bentoCards]; u[idx].label = e.target.value; setBentoCards(u); }} placeholder="Label" />
                  <input type="text" value={bento.title} onChange={(e) => { const u = [...bentoCards]; u[idx].title = e.target.value; setBentoCards(u); }} placeholder="Title / Value" />
                  <textarea rows={2} value={bento.description} onChange={(e) => { const u = [...bentoCards]; u[idx].description = e.target.value; setBentoCards(u); }} placeholder="Description" />
                </div>
              ))}
            </div>
            <button
              className="admin-save-section-btn"
              disabled={savingKey === 'bento_cards_data'}
              onClick={() => saveSectionToSheet('bento_cards_data', bentoCards)}
            >
              {savingKey === 'bento_cards_data' ? 'Saving...' : 'Save Bento to Sheet ➔'}
            </button>
          </div>
        )}

        {/* ── TAB 3: CIRCULAR GALLERY ── */}
        {activeTab === 'gallery' && (
          <div className="admin-section-box">
            <div className="admin-subhead-row">
              <h3>Circular 3D Gallery Assets</h3>
              <button className="admin-btn-secondary" onClick={() => setGalleryItems([...galleryItems, { image: 'https://picsum.photos/600', text: 'NEW CAMPAIGN' }])}>+ Add Image</button>
            </div>
            <div className="admin-cards-list">
              {galleryItems.map((item, idx) => (
                <div key={idx} className="admin-edit-row-card">
                  <div className="admin-inline-split">
                    <span className="admin-badge">Item #{idx + 1}</span>
                    <button className="admin-delete-btn" onClick={() => setGalleryItems(galleryItems.filter((_, i) => i !== idx))}>Delete</button>
                  </div>
                  {item.image && <img src={item.image} alt="Preview" className="admin-card-preview-thumb" />}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files[0];
                      if (!file) return;
                      setStatusMsg(`Uploading image #${idx + 1}...`);
                      try {
                        const url = await uploadToCloudinary(file);
                        const u = [...galleryItems]; u[idx].image = url; setGalleryItems(u);
                        setStatusMsg(`Image #${idx + 1} uploaded!`);
                      } catch (err) { setStatusMsg("Upload failed: " + err.message); }
                    }}
                  />
                  <input type="text" value={item.image} onChange={(e) => { const u = [...galleryItems]; u[idx].image = e.target.value; setGalleryItems(u); }} placeholder="Image URL" />
                  <input type="text" value={item.text} onChange={(e) => { const u = [...galleryItems]; u[idx].text = e.target.value; setGalleryItems(u); }} placeholder="Tag Text" />
                </div>
              ))}
            </div>
            <button
              className="admin-save-section-btn"
              disabled={savingKey === 'circular_gallery_data'}
              onClick={() => saveSectionToSheet('circular_gallery_data', galleryItems)}
            >
              {savingKey === 'circular_gallery_data' ? 'Saving...' : 'Save Gallery to Sheet ➔'}
            </button>
          </div>
        )}

        {/* ── TAB 4: CLIENT ORBIT ── */}
        {activeTab === 'orbit' && (
          <div className="admin-section-box">
            <div className="admin-subhead-row">
              <h3>Client Orbit Logos</h3>
              <button className="admin-btn-secondary" onClick={() => setOrbitClients([...orbitClients, { logo: '', url: 'https://' }])}>+ Add Client</button>
            </div>
            <div className="admin-cards-list">
              {orbitClients.map((client, idx) => (
                <div key={idx} className="admin-edit-row-card">
                  <div className="admin-inline-split">
                    <span className="admin-badge">Client #{idx + 1}</span>
                    <button className="admin-delete-btn" onClick={() => setOrbitClients(orbitClients.filter((_, i) => i !== idx))}>Delete</button>
                  </div>
                  {client.logo && <img src={client.logo} alt="Logo" className="admin-logo-preview-thumb" />}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files[0];
                      if (!file) return;
                      setStatusMsg(`Uploading logo #${idx + 1}...`);
                      try {
                        const url = await uploadToCloudinary(file);
                        const u = [...orbitClients]; u[idx].logo = url; setOrbitClients(u);
                        setStatusMsg(`Logo #${idx + 1} uploaded!`);
                      } catch (err) { setStatusMsg("Upload failed: " + err.message); }
                    }}
                  />
                  <input type="text" value={client.logo} onChange={(e) => { const u = [...orbitClients]; u[idx].logo = e.target.value; setOrbitClients(u); }} placeholder="Logo URL" />
                  <input type="text" value={client.url} onChange={(e) => { const u = [...orbitClients]; u[idx].url = e.target.value; setOrbitClients(u); }} placeholder="Target Website URL" />
                </div>
              ))}
            </div>
            <button
              className="admin-save-section-btn"
              disabled={savingKey === 'client_orbit_data'}
              onClick={() => saveSectionToSheet('client_orbit_data', orbitClients)}
            >
              {savingKey === 'client_orbit_data' ? 'Saving...' : 'Save Orbit to Sheet ➔'}
            </button>
          </div>
        )}

        {/* ── TAB 5: ABOUT US (ALL 6 SECTIONS) ── */}
        {activeTab === 'about' && (
          <div className="admin-section-box">
            <h3>About Us Page Configuration</h3>

            {/* SECTION 1: THE HERO MANIFESTO & OPERATIONS TAGLINE */}
            <div className="admin-edit-row-card" style={{ marginBottom: '24px' }}>
              <span className="admin-badge">Section 1: The Hero Manifesto & Operations Tagline</span>
              <input 
                type="text" 
                value={aboutData.tag} 
                onChange={(e) => setAboutData({ ...aboutData, tag: e.target.value })} 
                placeholder="Top Operations Tagline (e.g. Rankvertise Operations)" 
              />
              <input 
                type="text" 
                value={aboutData.rotatingTexts?.join(", ")} 
                onChange={(e) => setAboutData({ ...aboutData, rotatingTexts: e.target.value.split(",").map(t => t.trim()) })} 
                placeholder="Rotating Headline Phrases (comma separated)" 
              />
              <textarea 
                rows={3} 
                value={aboutData.manifestoDesc} 
                onChange={(e) => setAboutData({ ...aboutData, manifestoDesc: e.target.value })} 
                placeholder="Manifesto Descriptive Paragraph" 
              />
            </div>

            {/* SECTION 2: VELOCITY OPERATIONS ARCHITECTURE */}
            <div className="admin-edit-row-card" style={{ marginBottom: '24px' }}>
              <span className="admin-badge">Section 2: Velocity Operations Architecture</span>
              <input 
                type="text" 
                value={aboutData.s2Subtag} 
                onChange={(e) => setAboutData({ ...aboutData, s2Subtag: e.target.value })} 
                placeholder="Subtag (e.g. System Telemetry // 02)" 
              />
              <input 
                type="text" 
                value={aboutData.s2Heading} 
                onChange={(e) => setAboutData({ ...aboutData, s2Heading: e.target.value })} 
                placeholder="Section Heading" 
              />
              <textarea 
                rows={2} 
                value={aboutData.s2Lead} 
                onChange={(e) => setAboutData({ ...aboutData, s2Lead: e.target.value })} 
                placeholder="Lead Paragraph" 
              />
              
              <div className="admin-inline-split">
                <input 
                  type="text" 
                  value={aboutData.s2Counter1Val} 
                  onChange={(e) => setAboutData({ ...aboutData, s2Counter1Val: e.target.value })} 
                  placeholder="Counter 1 Value (e.g. +310%)" 
                />
                <input 
                  type="text" 
                  value={aboutData.s2Counter2Val} 
                  onChange={(e) => setAboutData({ ...aboutData, s2Counter2Val: e.target.value })} 
                  placeholder="Counter 2 Value (e.g. -42%)" 
                />
              </div>
              <input 
                type="text" 
                value={aboutData.s2Counter1Text} 
                onChange={(e) => setAboutData({ ...aboutData, s2Counter1Text: e.target.value })} 
                placeholder="Counter 1 Description" 
              />
              <input 
                type="text" 
                value={aboutData.s2Counter2Text} 
                onChange={(e) => setAboutData({ ...aboutData, s2Counter2Text: e.target.value })} 
                placeholder="Counter 2 Description" 
              />
              
              {/* Parallax Image Upload */}
              {aboutData.s2Image && <img src={aboutData.s2Image} alt="Parallax Asset" className="admin-card-preview-thumb" />}
              <input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files[0];
                  if (!file) return;
                  setStatusMsg("Uploading Section 2 Parallax Image...");
                  try {
                    const url = await uploadToCloudinary(file);
                    setAboutData({ ...aboutData, s2Image: url });
                    setStatusMsg("Parallax Image Uploaded!");
                  } catch (err) {
                    setStatusMsg("Upload failed: " + err.message);
                  }
                }}
              />
              <input 
                type="text" 
                value={aboutData.s2Image} 
                onChange={(e) => setAboutData({ ...aboutData, s2Image: e.target.value })} 
                placeholder="Parallax Image Direct URL" 
              />
            </div>

            {/* SECTION 3: THE CROSS-FUNCTIONAL GROWTH CORE (HUMAN-IN-THE-LOOP MATRIX) */}
            <div className="admin-edit-row-card" style={{ marginBottom: '24px' }}>
              <span className="admin-badge">Section 3: The Cross-Functional Growth Core (Human-in-the-loop Matrix)</span>
              <input 
                type="text" 
                value={aboutData.s3Heading || "The Cross-Functional Growth Core"} 
                onChange={(e) => setAboutData({ ...aboutData, s3Heading: e.target.value })} 
                placeholder="Section Heading" 
              />
              <textarea 
                rows={2} 
                value={aboutData.s3Desc || "We don't assign isolated freelancers or leave your scaling assets unsupervised..."} 
                onChange={(e) => setAboutData({ ...aboutData, s3Desc: e.target.value })} 
                placeholder="Brief Description" 
              />

              <h4 style={{ margin: '15px 0 5px 0', color: '#d4a373', fontSize: '0.85rem' }}>Operational Pillars</h4>
              {(aboutData.pillars || []).map((pillar, pIdx) => (
                <div key={pIdx} style={{ background: '#0b0203', padding: '15px', borderRadius: '12px', marginBottom: '10px' }}>
                  <input 
                    type="text" 
                    value={pillar.code} 
                    onChange={(e) => {
                      const u = [...aboutData.pillars];
                      u[pIdx].code = e.target.value;
                      setAboutData({ ...aboutData, pillars: u });
                    }} 
                    placeholder="Pillar Code (e.g. // SYSTEM ENGINEERS)" 
                  />
                  <input 
                    type="text" 
                    value={pillar.title} 
                    onChange={(e) => {
                      const u = [...aboutData.pillars];
                      u[pIdx].title = e.target.value;
                      setAboutData({ ...aboutData, pillars: u });
                    }} 
                    placeholder="Pillar Title" 
                  />
                  <textarea 
                    rows={2} 
                    value={pillar.desc} 
                    onChange={(e) => {
                      const u = [...aboutData.pillars];
                      u[pIdx].desc = e.target.value;
                      setAboutData({ ...aboutData, pillars: u });
                    }} 
                    placeholder="Pillar Description" 
                  />
                </div>
              ))}

              <h4 style={{ margin: '15px 0 5px 0', color: '#d4a373', fontSize: '0.85rem' }}>Priority Client Vision Banner</h4>
              <textarea 
                rows={2} 
                value={aboutData.priorityBannerHero} 
                onChange={(e) => setAboutData({ ...aboutData, priorityBannerHero: e.target.value })} 
                placeholder="Hero Tagline / Quote" 
              />
              <textarea 
                rows={2} 
                value={aboutData.priorityBannerSub} 
                onChange={(e) => setAboutData({ ...aboutData, priorityBannerSub: e.target.value })} 
                placeholder="Sub-statement Description" 
              />
            </div>

            {/* SECTION 4: VISUALIZING DISRUPTION TRAJECTORIES (PERFORMANCE ANALYTICS & TELEMETRY) */}
            <div className="admin-edit-row-card" style={{ marginBottom: '24px' }}>
              <span className="admin-badge">Section 4: Visualizing Disruption Trajectories (Performance Analytics & Telemetry)</span>
              <input 
                type="text" 
                value={aboutData.s4Heading || "Visualizing Disruption Trajectories"} 
                onChange={(e) => setAboutData({ ...aboutData, s4Heading: e.target.value })} 
                placeholder="Section Heading" 
              />
              <textarea 
                rows={2} 
                value={aboutData.s4Desc || "Raw mathematical projections and operational scaling curves outperforming legacy marketing indices..."} 
                onChange={(e) => setAboutData({ ...aboutData, s4Desc: e.target.value })} 
                placeholder="Brief Description" 
              />
              
              <div className="admin-inline-split">
                <input 
                  type="text" 
                  value={aboutData.metric1Val} 
                  onChange={(e) => setAboutData({ ...aboutData, metric1Val: e.target.value })} 
                  placeholder="Metric 1 Value (e.g. 94.2%)" 
                />
                <input 
                  type="text" 
                  value={aboutData.metric2Val} 
                  onChange={(e) => setAboutData({ ...aboutData, metric2Val: e.target.value })} 
                  placeholder="Metric 2 Value (e.g. 0.18s)" 
                />
              </div>
              <input 
                type="text" 
                value={aboutData.metric1Title} 
                onChange={(e) => setAboutData({ ...aboutData, metric1Title: e.target.value })} 
                placeholder="Metric 1 Title" 
              />
              <input 
                type="text" 
                value={aboutData.metric1Desc} 
                onChange={(e) => setAboutData({ ...aboutData, metric1Desc: e.target.value })} 
                placeholder="Metric 1 Description" 
              />
              <input 
                type="text" 
                value={aboutData.metric2Title} 
                onChange={(e) => setAboutData({ ...aboutData, metric2Title: e.target.value })} 
                placeholder="Metric 2 Title" 
              />
              <input 
                type="text" 
                value={aboutData.metric2Desc} 
                onChange={(e) => setAboutData({ ...aboutData, metric2Desc: e.target.value })} 
                placeholder="Metric 2 Description" 
              />
            </div>

            {/* SECTION 5: GENESIS TO MARKET DOMINANCE (CHRONICLE TIMELINE LOGS) */}
            <div className="admin-edit-row-card" style={{ marginBottom: '24px' }}>
              <div className="admin-inline-split">
                <span className="admin-badge">Section 5: Genesis to Market Dominance (Chronicle Timeline Logs)</span>
                <button 
                  className="admin-btn-secondary"
                  onClick={() => setAboutData({
                    ...aboutData,
                    timeline: [...(aboutData.timeline || []), { dateTag: "New Phase // 2027", title: "New Milestone", desc: "Milestone detail description." }]
                  })}
                >
                  + Add Milestone
                </button>
              </div>

              <input 
                type="text" 
                value={aboutData.s5Heading || "Genesis to Market Dominance"} 
                onChange={(e) => setAboutData({ ...aboutData, s5Heading: e.target.value })} 
                placeholder="Section Heading" 
              />
              <textarea 
                rows={2} 
                value={aboutData.s5Desc || "How we evolved from an automated micro-script experiment into a multi-vertical strategic enterprise engine."} 
                onChange={(e) => setAboutData({ ...aboutData, s5Desc: e.target.value })} 
                placeholder="Brief Description" 
              />

              {(aboutData.timeline || []).map((milestone, mIdx) => (
                <div key={mIdx} style={{ background: '#0b0203', padding: '15px', borderRadius: '12px', marginTop: '10px' }}>
                  <div className="admin-inline-split">
                    <span className="admin-badge">Node #{mIdx + 1}</span>
                    <button 
                      className="admin-delete-btn" 
                      onClick={() => {
                        const u = aboutData.timeline.filter((_, i) => i !== mIdx);
                        setAboutData({ ...aboutData, timeline: u });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <input 
                    type="text" 
                    value={milestone.dateTag} 
                    onChange={(e) => {
                      const u = [...aboutData.timeline];
                      u[mIdx].dateTag = e.target.value;
                      setAboutData({ ...aboutData, timeline: u });
                    }} 
                    placeholder="Phase / Year Tag (e.g. Phase Alpha // 2023)" 
                  />
                  <input 
                    type="text" 
                    value={milestone.title} 
                    onChange={(e) => {
                      const u = [...aboutData.timeline];
                      u[mIdx].title = e.target.value;
                      setAboutData({ ...aboutData, timeline: u });
                    }} 
                    placeholder="Milestone Title" 
                  />
                  <textarea 
                    rows={2} 
                    value={milestone.desc} 
                    onChange={(e) => {
                      const u = [...aboutData.timeline];
                      u[mIdx].desc = e.target.value;
                      setAboutData({ ...aboutData, timeline: u });
                    }} 
                    placeholder="Milestone Description" 
                  />
                </div>
              ))}
            </div>

            {/* SECTION 6: STRATEGIC DIVERGENCE (ANTI-AGENCY COMPARISON ENGINE) */}
            <div className="admin-edit-row-card" style={{ marginBottom: '24px' }}>
              <span className="admin-badge">Section 6: Strategic Divergence (Anti-Agency Comparison Engine)</span>
              <input 
                type="text" 
                value={aboutData.s6Heading || "Why We are Fundamentally Different"} 
                onChange={(e) => setAboutData({ ...aboutData, s6Heading: e.target.value })} 
                placeholder="Section Heading" 
              />
              <textarea 
                rows={2} 
                value={aboutData.s6Desc || "Conventional agencies lock you into restrictive contracts..."} 
                onChange={(e) => setAboutData({ ...aboutData, s6Desc: e.target.value })} 
                placeholder="Section Brief" 
              />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
                {/* Column 1: Legacy */}
                <div style={{ background: '#0b0203', padding: '15px', borderRadius: '12px' }}>
                  <h4 style={{ color: '#ff6b6b', margin: '0 0 10px 0' }}>Legacy Agency Framework</h4>
                  <input 
                    type="text" 
                    value={aboutData.legacyHeading || "The Traditional Agency Retainer"} 
                    onChange={(e) => setAboutData({ ...aboutData, legacyHeading: e.target.value })} 
                    placeholder="Column Heading" 
                  />
                  {(aboutData.legacyPoints || []).map((pt, pIdx) => (
                    <div key={pIdx} style={{ marginTop: '10px' }}>
                      <input 
                        type="text" 
                        value={pt.title} 
                        onChange={(e) => {
                          const u = [...aboutData.legacyPoints];
                          u[pIdx].title = e.target.value;
                          setAboutData({ ...aboutData, legacyPoints: u });
                        }} 
                        placeholder="Point Title" 
                      />
                      <textarea 
                        rows={2} 
                        value={pt.desc} 
                        onChange={(e) => {
                          const u = [...aboutData.legacyPoints];
                          u[pIdx].desc = e.target.value;
                          setAboutData({ ...aboutData, legacyPoints: u });
                        }} 
                        placeholder="Point Description" 
                      />
                    </div>
                  ))}
                </div>

                {/* Column 2: Rankvertise */}
                <div style={{ background: '#0b0203', padding: '15px', borderRadius: '12px' }}>
                  <h4 style={{ color: '#d4a373', margin: '0 0 10px 0' }}>Rankvertise Protocol</h4>
                  <input 
                    type="text" 
                    value={aboutData.protocolHeading || "The Algorithmic Ingestion Core"} 
                    onChange={(e) => setAboutData({ ...aboutData, protocolHeading: e.target.value })} 
                    placeholder="Column Heading" 
                  />
                  {(aboutData.protocolPoints || []).map((pt, pIdx) => (
                    <div key={pIdx} style={{ marginTop: '10px' }}>
                      <input 
                        type="text" 
                        value={pt.title} 
                        onChange={(e) => {
                          const u = [...aboutData.protocolPoints];
                          u[pIdx].title = e.target.value;
                          setAboutData({ ...aboutData, protocolPoints: u });
                        }} 
                        placeholder="Point Title" 
                      />
                      <textarea 
                        rows={2} 
                        value={pt.desc} 
                        onChange={(e) => {
                          const u = [...aboutData.protocolPoints];
                          u[pIdx].desc = e.target.value;
                          setAboutData({ ...aboutData, protocolPoints: u });
                        }} 
                        placeholder="Point Description" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              className="admin-save-section-btn"
              disabled={savingKey === 'about_page_data'}
              onClick={() => saveSectionToSheet('about_page_data', aboutData)}
            >
              {savingKey === 'about_page_data' ? 'Saving...' : 'Save All 6 About Us Sections to Sheet ➔'}
            </button>
          </div>
        )}

        {/* ── TAB 6: SERVICES PAGE ── */}
        {activeTab === 'services' && (
          <div className="admin-section-box">
            <h3>Services Page Configuration</h3>

            <div className="admin-edit-row-card" style={{ marginBottom: '20px' }}>
              <span className="admin-badge">Hero Section</span>
              <input type="text" value={servicesData.heroTag} onChange={(e) => setServicesData({ ...servicesData, heroTag: e.target.value })} placeholder="Hero Tag" />
              <input type="text" value={servicesData.heroHeadline} onChange={(e) => setServicesData({ ...servicesData, heroHeadline: e.target.value })} placeholder="Hero Headline" />
              <textarea rows={3} value={servicesData.heroDesc} onChange={(e) => setServicesData({ ...servicesData, heroDesc: e.target.value })} placeholder="Hero Description" />
            </div>

            <div className="admin-cards-list">
              {servicesData.servicesList.map((srv, idx) => (
                <div key={srv.id} className="admin-edit-row-card">
                  <span className="admin-badge">Service #{idx + 1} ({srv.id.toUpperCase()})</span>
                  <input 
                    type="text" 
                    value={srv.title} 
                    onChange={(e) => {
                      const u = [...servicesData.servicesList]; 
                      u[idx].title = e.target.value; 
                      setServicesData({ ...servicesData, servicesList: u });
                    }} 
                    placeholder="Service Title" 
                  />
                  <textarea 
                    rows={2} 
                    value={srv.brief} 
                    onChange={(e) => {
                      const u = [...servicesData.servicesList]; 
                      u[idx].brief = e.target.value; 
                      setServicesData({ ...servicesData, servicesList: u });
                    }} 
                    placeholder="Service Brief" 
                  />
                  <textarea 
                    rows={3} 
                    value={srv.example} 
                    onChange={(e) => {
                      const u = [...servicesData.servicesList]; 
                      u[idx].example = e.target.value; 
                      setServicesData({ ...servicesData, servicesList: u });
                    }} 
                    placeholder="Superiority Example Text" 
                  />
                </div>
              ))}
            </div>

            <button
              className="admin-save-section-btn"
              disabled={savingKey === 'services_page_data'}
              onClick={() => saveSectionToSheet('services_page_data', servicesData)}
            >
              {savingKey === 'services_page_data' ? 'Saving...' : 'Save Services Page to Sheet ➔'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}