import { Hero } from "@/app/components/Hero";
import { CTA } from "@/app/components/CTA";
import { motion } from "motion/react";
import { Plane, MapPin, CreditCard, Wifi, Lock, Globe } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export function TravelVPN() {
  const { t } = useLanguage();

  const travelFeatures = [
    {
      icon: Plane,
      title: "Access Home Content Abroad",
      description: "Stay connected to your favorite shows, banking apps, and services from home while traveling internationally."
    },
    {
      icon: Lock,
      title: "Secure Public WiFi",
      description: "Protect your data on airport, hotel, and cafe WiFi. Encrypt your connection from hackers and snoopers on unsecured networks."
    },
    {
      icon: MapPin,
      title: "150+ Countries Covered",
      description: "Connect to VPN servers worldwide, ensuring you have a reliable, secure connection no matter where you travel."
    },
    {
      icon: CreditCard,
      title: "Safe Online Banking",
      description: "Access your bank accounts and financial services securely from anywhere without triggering security alerts."
    },
    {
      icon: Wifi,
      title: "Bypass Internet Censorship",
      description: "Access blocked websites and services in countries with restricted internet. Stay connected to social media, news, and communication apps."
    },
    {
      icon: Globe,
      title: "Find Better Deals",
      description: "Avoid dynamic pricing on flights and hotels. Connect to different countries to compare prices and save money on bookings."
    }
  ];

  const destinations = [
    { country: "United States", servers: "50+" },
    { country: "United Kingdom", servers: "30+" },
    { country: "Japan", servers: "20+" },
    { country: "Australia", servers: "15+" },
    { country: "Germany", servers: "25+" },
    { country: "Canada", servers: "20+" },
    { country: "France", servers: "18+" },
    { country: "Singapore", servers: "12+" },
    { country: "Brazil", servers: "10+" },
    { country: "India", servers: "15+" },
    { country: "UAE", servers: "8+" },
    { country: "South Korea", servers: "12+" }
  ];

  return (
    <>
      <Hero
        badgeText="TRAVEL VPN"
        title="Stay Secure Anywhere"
        subTitle="Travel the world with confidence. Access your favorite content, secure public WiFi, and bypass censorship in any country."
        showCtaAndImages={true}
      />

      {/* Travel Features Section */}
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
              Your Travel Companion
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400 leading-relaxed max-w-2xl font-[Space_Grotesk]"
            >
              Whether you're on business or vacation, Blue VPN keeps you safe and connected with servers in over 150 countries.
            </motion.p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelFeatures.map((feature, index) => (
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

      {/* Use Cases Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[48px] border border-white/10 bg-gradient-to-br from-[#0B0F17] to-[#0B0F17]/50 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-[Space_Grotesk]">
                Perfect For Every Traveler
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">✈️</div>
                  <h4 className="text-xl font-bold text-white mb-3">Business Travelers</h4>
                  <p className="text-slate-400 text-sm">
                    Secure access to company resources and confidential data on public networks
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏖️</div>
                  <h4 className="text-xl font-bold text-white mb-3">Vacationers</h4>
                  <p className="text-slate-400 text-sm">
                    Stream shows from home, book flights safely, and stay connected with family
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h4 className="text-xl font-bold text-white mb-3">Digital Nomads</h4>
                  <p className="text-slate-400 text-sm">
                    Work from anywhere with secure, reliable internet access and no geo-blocks
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Coverage Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[Space_Grotesk]">
              Global Server Network
            </h3>
            <p className="text-slate-400 text-lg">
              Fast, reliable servers in your favorite travel destinations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-white/10 bg-[#0B0F17] hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-white font-semibold font-[Space_Grotesk]">{dest.country}</span>
                  <span className="text-blue-400 text-sm">{dest.servers} servers</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
