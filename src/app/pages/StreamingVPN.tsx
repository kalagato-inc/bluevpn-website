import { Hero } from "@/app/components/Hero";
import { CTA } from "@/app/components/CTA";
import { motion } from "motion/react";
import { Play, Tv, Film, Monitor, Globe, Zap } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export function StreamingVPN() {
  const { t } = useLanguage();

  const streamingFeatures = [
    {
      icon: Play,
      title: "Unblock Streaming Platforms",
      description: "Access Netflix, Hulu, Disney+, HBO Max, Amazon Prime, and more from anywhere in the world without geo-restrictions."
    },
    {
      icon: Tv,
      title: "4K Ultra HD Streaming",
      description: "High-speed servers optimized for 4K streaming with no buffering or throttling from your ISP."
    },
    {
      icon: Film,
      title: "Global Content Library",
      description: "Connect to servers in 50+ countries to unlock regional content and exclusive shows not available in your location."
    },
    {
      icon: Monitor,
      title: "Multi-Device Streaming",
      description: "Watch on your Smart TV, laptop, tablet, and phone simultaneously with unlimited device connections."
    },
    {
      icon: Globe,
      title: "Bypass ISP Throttling",
      description: "Your ISP can't see what you're streaming, so they can't slow down your connection during peak hours."
    },
    {
      icon: Zap,
      title: "Lightning Fast Speeds",
      description: "Dedicated streaming servers with optimized routing ensure smooth playback without lag or interruptions."
    }
  ];

  const platforms = [
    "Netflix", "Hulu", "Disney+", "HBO Max", "Amazon Prime", "BBC iPlayer",
    "Peacock", "Paramount+", "Apple TV+", "YouTube TV", "ESPN+", "Discovery+"
  ];

  return (
    <>
      <Hero
        badgeText="STREAMING VPN"
        title="Unlock Every Show, Everywhere"
        subTitle="Stream your favorite content from any platform, in any country, with unlimited access and blazing-fast speeds."
        showCtaAndImages={true}
      />

      {/* Streaming Features Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="max-w-3xl mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-[Space_Grotesk]"
            >
              Stream Without Limits
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400 leading-relaxed max-w-2xl font-[Space_Grotesk]"
            >
              Blue VPN is optimized for streaming, giving you access to global content libraries with the fastest speeds and most reliable connections.
            </motion.p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streamingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-8 rounded-[32px] border border-white/10 bg-[#0B0F17] hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl border border-blue-500/20 bg-blue-500/5 flex items-center justify-center mb-8 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon strokeWidth={1.5} size={24} />
                </div>

                {/* Text Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[Space_Grotesk]">
              Works With All Major Platforms
            </h3>
            <p className="text-slate-400 text-lg">
              Access your favorite streaming services from anywhere
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-white/10 bg-[#0B0F17] text-center hover:border-blue-500/30 transition-all duration-300"
              >
                <span className="text-white font-semibold font-[Space_Grotesk]">{platform}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
