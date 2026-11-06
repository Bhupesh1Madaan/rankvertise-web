import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function CanonicalSEO() {
  const location = useLocation();

  useEffect(() => {
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
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', currentCanonicalUrl);

    // 3. Update Twitter URL (<meta property="twitter:url">)
    let twUrl = document.querySelector("meta[property='twitter:url']");
    if (!twUrl) {
      twUrl = document.createElement('meta');
      twUrl.setAttribute('property', 'twitter:url');
      document.head.appendChild(twUrl);
    }
    twUrl.setAttribute('content', currentCanonicalUrl);

    // 4. Admin Portal ko Search Engines se noindex karna
    let robotsMeta = document.querySelector("meta[name='robots']");
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }

    if (location.pathname === '/portal-admin') {
      robotsMeta.setAttribute('content', 'noindex, nofollow');
    } else {
      robotsMeta.setAttribute('content', 'index, follow');
    }
  }, [location.pathname]);

  return null;
}