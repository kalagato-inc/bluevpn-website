import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "motion/react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "@/app/components/Navbar";
import { ParticlesBackground } from "@/app/components/ParticlesBackground";
import { Footer } from "@/app/components/Footer";
import { SplashScreen } from "@/app/components/SplashScreen";
import { CookieBanner } from "@/app/components/CookieBanner";
import { LanguageProvider } from "@/app/context/LanguageContext";
import { Home } from "@/app/pages/Home";
import { Blog } from "@/app/pages/Blog";
import { BlogPost } from "@/app/pages/BlogPost";
import { TermsAndPrivacy } from "@/app/pages/TermsAndPrivacy";
import { PrivacyPolicy } from "@/app/pages/PrivacyPolicy";
import { StreamingVPN } from "@/app/pages/StreamingVPN";
import { GamingVPN } from "@/app/pages/GamingVPN";
import { TravelVPN } from "@/app/pages/TravelVPN";
import { RemoteWorkVPN } from "@/app/pages/RemoteWorkVPN";
import { initGA, trackPageView, trackEvent } from "@/app/lib/analytics";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function useScrollDepth() {
  const location = useLocation();
  useEffect(() => {
    const fired = new Set<number>();
    const milestones = [25, 50, 75, 90];

    function onScroll() {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = (window.scrollY / scrollable) * 100;
      milestones.forEach((m) => {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          trackEvent("scroll_depth", { depth: m, page: location.pathname });
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);
}

function Analytics() {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (localStorage.getItem("bluevpn_cookie_consent") === "accepted") {
      initGA();
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      trackPageView(location.pathname);
      return;
    }
    trackPageView(location.pathname);
  }, [location.pathname]);

  useScrollDepth();
  return null;
}

function Layout() {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  const shouldShowSplash = showSplash && location.pathname === "/";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 relative">
      <ScrollToTop />
      <Analytics />
      <AnimatePresence mode="wait">
        {shouldShowSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <ParticlesBackground />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/streaming" element={<StreamingVPN />} />
          <Route path="/gaming" element={<GamingVPN />} />
          <Route path="/travel" element={<TravelVPN />} />
          <Route path="/remote-work" element={<RemoteWorkVPN />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/terms" element={<TermsAndPrivacy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}
