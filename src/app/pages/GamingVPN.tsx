import { Hero } from "@/app/components/Hero";
import { CTA } from "@/app/components/CTA";
import { motion } from "motion/react";
import { Gamepad2, Target, Shield, Zap, Globe, TrendingDown } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export function GamingVPN() {
  const { t } = useLanguage();

  const gamingFeatures = [
    {
      icon: Zap,
      title: "Ultra-Low Latency",
      description: "Optimized gaming servers with minimal ping to keep you competitive. Our network is built for real-time performance."
    },
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Protect yourself from DDoS attacks and swatting. Keep your IP hidden from other players and malicious actors."
    },
    {
      icon: Globe,
      title: "Access Region-Locked Games",
      description: "Play games before they launch in your region, access geo-restricted servers, and join friends worldwide."
    },
    {
      icon: Target,
      title: "Reduce Lag & Packet Loss",
      description: "Our optimized routing can actually improve your connection to game servers, reducing lag spikes and packet loss."
    },
    {
      icon: TrendingDown,
      title: "Bypass ISP Throttling",
      description: "Many ISPs throttle gaming traffic during peak hours. Fast Vpn Turbo Ip Changer prevents this, ensuring consistent speeds 24/7."
    },
    {
      icon: Gamepad2,
      title: "Multi-Platform Support",
      description: "Works seamlessly with PC, PlayStation, Xbox, Nintendo Switch, and mobile gaming. Easy setup on all devices."
    }
  ];

  const games = [
    "Call of Duty", "Fortnite", "Valorant", "League of Legends",
    "CS:GO", "Apex Legends", "PUBG", "Rocket League",
    "Overwatch", "Minecraft", "GTA Online", "Warzone"
  ];

  return (
    <>
      <Hero
        badgeText="GAMING VPN"
        title="Level Up Your Gaming"
        subTitle="Reduce lag, protect against DDoS attacks, and access games worldwide with the fastest VPN built for gamers."
        showCtaAndImages={true}
      />

      {/* Gaming Features Section */}
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
              Dominate Every Match
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400 leading-relaxed max-w-2xl font-[Space_Grotesk]"
            >
              Fast Vpn Turbo Ip Changer is engineered for competitive gaming. Get lower ping, stronger protection, and access to global gaming servers.
            </motion.p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gamingFeatures.map((feature, index) => (
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

      {/* Performance Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[48px] border border-white/10 bg-gradient-to-br from-[#0B0F17] to-[#0B0F17]/50 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 font-[Space_Grotesk]">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    &lt;20ms
                  </span>
                </div>
                <p className="text-slate-400 font-medium">Average Ping Reduction</p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 font-[Space_Grotesk]">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    50+
                  </span>
                </div>
                <p className="text-slate-400 font-medium">Gaming Server Locations</p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 font-[Space_Grotesk]">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    99.9%
                  </span>
                </div>
                <p className="text-slate-400 font-medium">Uptime Guarantee</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[Space_Grotesk]">
              Optimized For Your Favorite Games
            </h3>
            <p className="text-slate-400 text-lg">
              From competitive shooters to battle royales
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {games.map((game, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-white/10 bg-[#0B0F17] text-center hover:border-blue-500/30 transition-all duration-300"
              >
                <span className="text-white font-semibold font-[Space_Grotesk]">{game}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
