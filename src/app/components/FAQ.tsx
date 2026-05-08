import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import clsx from 'clsx';
import { trackEvent } from "@/app/lib/analytics";

const faqs = [
  {
    question: "What is a VPN and why do I need one?",
    answer: "A VPN (Virtual Private Network) encrypts your internet connection, ensuring your online activity remains private and secure. It protects you from hackers on public Wi-Fi and allows you to access content without geo-restrictions."
  },
  {
    question: "Does Fast Vpn Turbo Ip Changer keep logs of my activity?",
    answer: "No, Fast Vpn Turbo Ip Changer has a strict no-logs policy. We do not track, collect, or share your browsing history, ensuring complete anonymity while you browse."
  },
  {
    question: "Can Fast Vpn Turbo Ip Changer access geo-restricted content?",
    answer: "Yes! With servers across the globe, Fast Vpn Turbo Ip Changer allows you to bypass geographical restrictions and access your favorite streaming services, websites, and apps from anywhere."
  },
  {
    question: "How does Fast Vpn Turbo Ip Changer protect me on public Wi-Fi?",
    answer: "We use military-grade AES encryption to secure your data. This means even if you're on an unsecured public network, hackers cannot intercept or read your information."
  },
  {
    question: "Will using a VPN slow down my internet?",
    answer: "While all VPNs may cause a slight decrease in speed due to encryption, Fast Vpn Turbo Ip Changer is optimized for speed, ensuring minimal impact so you can stream and game without lag."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-[Space_Grotesk]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-400 font-[Space_Grotesk]">
            Everything you need to know about Fast Vpn Turbo Ip Changer and online privacy.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={clsx(
                "rounded-2xl border transition-all duration-300 overflow-hidden",
                openIndex === index 
                  ? "bg-slate-900 border-blue-500/30" 
                  : "bg-slate-900/50 border-white/5 hover:border-white/10"
              )}
            >
              <button
                onClick={() => {
                  const opening = openIndex !== index;
                  setOpenIndex(opening ? index : null);
                  if (opening) trackEvent("faq_expand", { question: faq.question, question_index: index });
                }}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none font-[Space_Grotesk]"
              >
                <span className={clsx("font-semibold text-lg pr-8 transition-colors", openIndex === index ? "text-blue-400" : "text-white")}>
                    {faq.question}
                </span>
                <span className={clsx("flex-shrink-0 transition-transform duration-300", openIndex === index ? "rotate-180" : "")}>
                  {openIndex === index ? <Minus className="text-blue-400" /> : <Plus className="text-slate-400" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed font-[Space_Grotesk]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
