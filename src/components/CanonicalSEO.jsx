import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function CanonicalSEO() {
  const location = useLocation();

  useEffect(() => {
    // Current domain + clean pathname (query params aur trailing slashes normalize karke)
    const baseUrl = 'https://rankvertise.com';
    const cleanPath = location.pathname === '/' ? '' : location.pathname.replace(/\/+$/, '');
    const currentCanonicalUrl = `${baseUrl}${cleanPath}`;

    // 1. Update <link rel="canonical">
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', currentCanonicalUrl);

    // 2. Update Open Graph URL (<meta property="og:url">)
    let ogUrl = document.querySelector("meta[property='og:url']");
    if (ogUrl) {
      ogUrl.setAttribute('content', currentCanonicalUrl);
    }

    // 3. Update Twitter URL (<meta property="twitter:url">)
    let twUrl = document.querySelector("meta[property='twitter:url']");
    if (twUrl) {
      twUrl.setAttribute('content', currentCanonicalUrl);
    }
  }, [location.pathname]);

  return null;
}