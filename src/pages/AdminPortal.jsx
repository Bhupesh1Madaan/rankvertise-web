import React, { useState, useEffect } from 'react';
import { useData, GOOGLE_SHEET_API_URL } from '../context/DataContext';
import './AdminPortal.css';

const CLOUDINARY_CLOUD_NAME = "YOUR_CLOUDINARY_CLOUD_NAME";
const CLOUDINARY_UPLOAD_PRESET = "YOUR_UNSIGNED_PRESET";
const ADMIN_SECURITY_PIN = "rank2026"; // Apna portal PIN yahan set karein

export default function AdminPortal() {
  const { data, refreshData } = useData();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('scrollstack');
  const [savingKey, setSavingKey] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  // 1. ScrollStack State
  const [scrollStackCards, setScrollStackCards] = useState([
    { title: "01 / BRAND IDENTITY", desc: "Logo. Voice. Vibe. All dialed in. Whether you're starting out or starting over, we'll design a brand that actually speaks." },
    { title: "02 / SOCIAL MEDIA & CONTENT", desc: "We don't just manage. We create. Our content strategies are scroll-stopping, algorithm-busting, and extremely double-tap worthy." },
    { title: "03 / DIGITAL MARKETING THAT CLICKS", desc: "Your goals + our data-backed brains = ROI that actually means something. From SEO to paid ads, we speak digital fluently." },
    { title: "04 / WEB EXPERIENCES", desc: "Websites that look hot and load fast. From portfolios to e-commerce, we turn code into conversion." },
    { title: "05 / CREATIVE PRODUCTION", desc: "Ideas are cute. Execution is everything. From aesthetic to impact, we concept, shoot, and produce brand content that doesn't just sit pretty, it performs." }
  ]);

  // 2. Magic Bento State
  const [bentoCards, setBentoCards] = useState([
    { color: '#2a0b10', title: '10+ Years', description: 'Relentless dominance in the digital industry space.', label: 'EXPERIENCE', sizeClass: 'bento-large' },
    { color: '#1a0508', title: '100+ Brands', description: 'Satisfied global clients who scaled their presence with us.', label: 'TRUSTED BY', sizeClass: 'bento-small' },
    { color: '#1a0508', title: '20+ Master Campaigns', description: 'High-velocity creative concepts engineered for viral impact.', label: 'DELIVERED', sizeClass: 'bento-small' },
    { color: '#3d0f16', title: '3 Countries', description: 'Cross-border operations syncing internet trends globally.', label: 'MARKET REACH', sizeClass: 'bento-medium' }
  ]);

  // 3. Circular Gallery State
  const [galleryItems, setGalleryItems] = useState([
    { image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60', text: 'ALGORITHM BUSTING' },
    { image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=60', text: 'VIRAL REELS FORMAT' },
    { image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=600&auto=format&fit=crop&q=60', text: 'SCROLL STOPPING CONTENT' },
    { image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=60', text: 'CULTURAL ICON STRATEGY' }
  ]);

  // 4. Client Orbit State
  const [orbitClients, setOrbitClients] = useState([
    { logo: "https://static.wixstatic.com/media/4fce5e_f579dec309b24713bbbacae25da05c5c~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/18.png", url: "https://rankvertise.in" },
    { logo: "https://static.wixstatic.com/media/4fce5e_3a747d46d465459cb71669eb0a5e7a10~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/17.png", url: "https://rankvertise.in" },
    { logo: "https://static.wixstatic.com/media/4fce5e_23443126bf6443f0b7e88ffc57d846be~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/19.png", url: "https://rankvertise.in" },
    { logo: "https://static.wixstatic.com/media/4fce5e_4dfc40799fb242479d108fa60e46653c~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/14.png", url: "https://rankvertise.in" },
    { logo: "https://static.wixstatic.com/media/4fce5e_40e22c72ffb9402e9c8ee15d632cf7e2~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/15.png", url: "https://rankvertise.in" }
  ]);

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
          <p>Update dynamic texts, assets, and URLs directly synced to Google Sheets.</p>
        </div>
        <button onClick={handleLogout} className="admin-logout-btn">Log Out</button>
      </div>

      {statusMsg && <div className="admin-alert-banner">{statusMsg}</div>}

      <div className="admin-tabs-row">
        <button className={activeTab === 'scrollstack' ? 'active' : ''} onClick={() => setActiveTab('scrollstack')}>
          1. ScrollStack (Services)
        </button>
        <button className={activeTab === 'bento' ? 'active' : ''} onClick={() => setActiveTab('bento')}>
          2. Magic Bento (Stats)
        </button>
        <button className={activeTab === 'gallery' ? 'active' : ''} onClick={() => setActiveTab('gallery')}>
          3. Circular Gallery (Images)
        </button>
        <button className={activeTab === 'orbit' ? 'active' : ''} onClick={() => setActiveTab('orbit')}>
          4. Client Orbit (Logos & Links)
        </button>
      </div>

      <div className="admin-tab-body">
        {/* TAB 1: SCROLL STACK */}
        {activeTab === 'scrollstack' && (
          <div className="admin-section-box">
            <h3>ScrollStack Cards (Total 5 Cards)</h3>
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

        {/* TAB 2: MAGIC BENTO */}
        {activeTab === 'bento' && (
          <div className="admin-section-box">
            <div className="admin-subhead-row">
              <h3>Magic Bento Metrics</h3>
              <button
                className="admin-btn-secondary"
                onClick={() => setBentoCards([...bentoCards, { color: '#1a0508', title: 'New Stat', description: 'Stat details here', label: 'METRIC', sizeClass: 'bento-small' }])}
              >
                + Add New Card
              </button>
            </div>
            <div className="admin-cards-list">
              {bentoCards.map((bento, idx) => (
                <div key={idx} className="admin-edit-row-card">
                  <div className="admin-inline-split">
                    <span className="admin-badge">Bento #{idx + 1}</span>
                    <button
                      className="admin-delete-btn"
                      onClick={() => setBentoCards(bentoCards.filter((_, i) => i !== idx))}
                    >
                      Delete
                    </button>
                  </div>
                  <input
                    type="text"
                    value={bento.label}
                    onChange={(e) => {
                      const updated = [...bentoCards];
                      updated[idx].label = e.target.value;
                      setBentoCards(updated);
                    }}
                    placeholder="Label (e.g. EXPERIENCE)"
                  />
                  <input
                    type="text"
                    value={bento.title}
                    onChange={(e) => {
                      const updated = [...bentoCards];
                      updated[idx].title = e.target.value;
                      setBentoCards(updated);
                    }}
                    placeholder="Title / Number (e.g. 10+ Years)"
                  />
                  <textarea
                    rows={2}
                    value={bento.description}
                    onChange={(e) => {
                      const updated = [...bentoCards];
                      updated[idx].description = e.target.value;
                      setBentoCards(updated);
                    }}
                    placeholder="Description"
                  />
                </div>
              ))}
            </div>
            <button
              className="admin-save-section-btn"
              disabled={savingKey === 'bento_cards_data'}
              onClick={() => saveSectionToSheet('bento_cards_data', bentoCards)}
            >
              {savingKey === 'bento_cards_data' ? 'Saving...' : 'Save Bento Grid to Sheet ➔'}
            </button>
          </div>
        )}

        {/* TAB 3: CIRCULAR GALLERY */}
        {activeTab === 'gallery' && (
          <div className="admin-section-box">
            <div className="admin-subhead-row">
              <h3>Circular 3D Gallery Assets</h3>
              <button
                className="admin-btn-secondary"
                onClick={() => setGalleryItems([...galleryItems, { image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600', text: 'NEW CAMPAIGN' }])}
              >
                + Add Image
              </button>
            </div>
            <div className="admin-cards-list">
              {galleryItems.map((item, idx) => (
                <div key={idx} className="admin-edit-row-card">
                  <div className="admin-inline-split">
                    <span className="admin-badge">Item #{idx + 1}</span>
                    <button
                      className="admin-delete-btn"
                      onClick={() => setGalleryItems(galleryItems.filter((_, i) => i !== idx))}
                    >
                      Delete
                    </button>
                  </div>
                  {item.image && <img src={item.image} alt="Preview" className="admin-card-preview-thumb" />}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files[0];
                      if (!file) return;
                      setStatusMsg(`Uploading image #${idx + 1} to Cloudinary...`);
                      try {
                        const url = await uploadToCloudinary(file);
                        const updated = [...galleryItems];
                        updated[idx].image = url;
                        setGalleryItems(updated);
                        setStatusMsg(`Image #${idx + 1} uploaded!`);
                      } catch (err) {
                        setStatusMsg("Cloudinary upload failed: " + err.message);
                      }
                    }}
                  />
                  <input
                    type="text"
                    value={item.image}
                    onChange={(e) => {
                      const updated = [...galleryItems];
                      updated[idx].image = e.target.value;
                      setGalleryItems(updated);
                    }}
                    placeholder="Image URL"
                  />
                  <input
                    type="text"
                    value={item.text}
                    onChange={(e) => {
                      const updated = [...galleryItems];
                      updated[idx].text = e.target.value;
                      setGalleryItems(updated);
                    }}
                    placeholder="Overlay Tag Text"
                  />
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

        {/* TAB 4: CLIENT ORBIT */}
        {activeTab === 'orbit' && (
          <div className="admin-section-box">
            <div className="admin-subhead-row">
              <h3>Client Orbit Logos & Click Links</h3>
              <button
                className="admin-btn-secondary"
                onClick={() => setOrbitClients([...orbitClients, { logo: 'https://static.wixstatic.com/media/4fce5e_f579dec309b24713bbbacae25da05c5c~mv2.png', url: 'https://' }])}
              >
                + Add Client
              </button>
            </div>
            <div className="admin-cards-list">
              {orbitClients.map((client, idx) => (
                <div key={idx} className="admin-edit-row-card">
                  <div className="admin-inline-split">
                    <span className="admin-badge">Client #{idx + 1}</span>
                    <button
                      className="admin-delete-btn"
                      onClick={() => setOrbitClients(orbitClients.filter((_, i) => i !== idx))}
                    >
                      Delete
                    </button>
                  </div>
                  {client.logo && <img src={client.logo} alt="Logo" className="admin-logo-preview-thumb" />}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files[0];
                      if (!file) return;
                      setStatusMsg(`Uploading logo #${idx + 1} to Cloudinary...`);
                      try {
                        const url = await uploadToCloudinary(file);
                        const updated = [...orbitClients];
                        updated[idx].logo = url;
                        setOrbitClients(updated);
                        setStatusMsg(`Logo #${idx + 1} uploaded!`);
                      } catch (err) {
                        setStatusMsg("Cloudinary upload failed: " + err.message);
                      }
                    }}
                  />
                  <input
                    type="text"
                    value={client.logo}
                    onChange={(e) => {
                      const updated = [...orbitClients];
                      updated[idx].logo = e.target.value;
                      setOrbitClients(updated);
                    }}
                    placeholder="Logo Image URL"
                  />
                  <input
                    type="text"
                    value={client.url}
                    onChange={(e) => {
                      const updated = [...orbitClients];
                      updated[idx].url = e.target.value;
                      setOrbitClients(updated);
                    }}
                    placeholder="Client Website URL (e.g. https://brand.com)"
                  />
                </div>
              ))}
            </div>
            <button
              className="admin-save-section-btn"
              disabled={savingKey === 'client_orbit_data'}
              onClick={() => saveSectionToSheet('client_orbit_data', orbitClients)}
            >
              {savingKey === 'client_orbit_data' ? 'Saving...' : 'Save Orbit Clients to Sheet ➔'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}