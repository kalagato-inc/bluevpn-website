import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X } from "lucide-react";
import { grantConsent, denyConsent, trackEvent } from "@/app/lib/analytics";

const COOKIE_KEY = "bluevpn_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
    grantConsent();
    trackEvent("cookie_consent", { action: "accepted" });
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
    denyConsent();
    trackEvent("cookie_consent", { action: "declined" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl"
        >
          <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Cookie className="text-blue-400 shrink-0 size-6 mt-0.5 sm:mt-0" />
            <p className="text-slate-300 text-sm flex-1">
              We use cookies to improve your experience, analyse traffic and
              personalise content. By clicking{" "}
              <span className="text-white font-medium">Accept</span>, you agree
              to our{" "}
              <a
                href="/terms"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
              >
                Cookie Policy
              </a>
              .
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={decline}
                className="px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                Accept
              </button>
              <button
                onClick={decline}
                aria-label="Close"
                className="p-1 rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
