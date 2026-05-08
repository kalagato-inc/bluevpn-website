const GA_ID = 'G-V4YT1K976B';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

function ensureGtag() {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function (...args: any[]) {
      window.dataLayer.push(args);
    };
  }
}

export function grantConsent() {
  ensureGtag();
  window.gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
  });
}

export function denyConsent() {
  ensureGtag();
  window.gtag('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
}

export function initGA() {
  ensureGtag();
  if (localStorage.getItem('bluevpn_cookie_consent') === 'accepted') {
    grantConsent();
  }
}

export function trackPageView(path: string) {
  ensureGtag();
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: document.title,
    send_to: GA_ID,
  });
}

export function trackEvent(name: string, params?: Record<string, any>) {
  ensureGtag();
  window.gtag('event', name, params);
}
