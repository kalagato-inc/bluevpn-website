import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/app/components/Navbar";
import { ParticlesBackground } from "@/app/components/ParticlesBackground";
import { Footer } from "@/app/components/Footer";
import { SplashScreen } from "@/app/components/SplashScreen";
import { LanguageProvider } from "@/app/context/LanguageContext";
import { Home } from "@/app/pages/Home";
import { Blog } from "@/app/pages/Blog";
import { BlogPost } from "@/app/pages/BlogPost";
import { TermsAndPrivacy } from "@/app/pages/TermsAndPrivacy";
import { StreamingVPN } from "@/app/pages/StreamingVPN";
import { GamingVPN } from "@/app/pages/GamingVPN";
import { TravelVPN } from "@/app/pages/TravelVPN";
import { RemoteWorkVPN } from "@/app/pages/RemoteWorkVPN";

function Layout() {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  // Only show splash screen on home page
  const shouldShowSplash = showSplash && location.pathname === "/";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 relative">
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </LanguageProvider>
  );
}
