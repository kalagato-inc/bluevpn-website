import { Hero } from "@/app/components/Hero";
import { CTA } from "@/app/components/CTA";
import { motion } from "motion/react";
import { Laptop, Shield, Clock, FileCheck, Network, Users } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export function RemoteWorkVPN() {
  const { t } = useLanguage();

  const workFeatures = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level AES-256 encryption protects your company data, client information, and sensitive communications from hackers and data breaches."
    },
    {
      icon: Network,
      title: "Secure Remote Access",
      description: "Safely connect to your company network, internal tools, and cloud services from anywhere without compromising security."
    },
    {
      icon: Laptop,
      title: "Work From Anywhere",
      description: "Whether you're at home, in a cafe, or traveling, maintain secure access to all your work resources with one click."
    },
    {
      icon: FileCheck,
      title: "Compliance Ready",
      description: "Meet GDPR, HIPAA, and industry security standards with encrypted connections and strict no-logs policy for sensitive data."
    },
    {
      icon: Clock,
      title: "24/7 Reliable Connection",
      description: "99.9% uptime guarantee ensures you're never disconnected during important meetings or critical work deadlines."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamlessly work with team members across different locations while maintaining security and productivity standards."
    }
  ];

  const useCases = [
    {
      title: "Freelancers & Consultants",
      description: "Protect client data and maintain professional standards with encrypted connections",
      icon: "💼"
    },
    {
      title: "Remote Teams",
      description: "Secure collaboration across distributed teams with consistent access controls",
      icon: "👥"
    },
    {
      title: "Digital Nomads",
      description: "Work from anywhere while accessing company resources securely",
      icon: "🌐"
    },
    {
      title: "Customer Support",
      description: "Handle sensitive customer information safely from home or remote offices",
      icon: "🎧"
    }
  ];

  return (
    <>
      <Hero
        badgeText="REMOTE WORK VPN"
        title="Work Securely From Anywhere"
        subTitle="Enterprise-grade security for remote workers, freelancers, and distributed teams. Protect your data and stay productive from any location."
        showCtaAndImages={true}
      />

      {/* Remote Work Features Section */}
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
              Professional Security for Remote Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400 leading-relaxed max-w-2xl font-[Space_Grotesk]"
            >
              Blue VPN provides the security and reliability remote workers need to stay productive and protect sensitive business data.
            </motion.p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workFeatures.map((feature, index) => (
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

      {/* Security Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[48px] border border-white/10 bg-gradient-to-br from-[#0B0F17] to-[#0B0F17]/50 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-white mb-3 font-[Space_Grotesk]">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    AES-256
                  </span>
                </div>
                <p className="text-slate-400 font-medium">Military-Grade Encryption</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-3 font-[Space_Grotesk]">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Zero
                  </span>
                </div>
                <p className="text-slate-400 font-medium">Logs Policy</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-3 font-[Space_Grotesk]">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    99.9%
                  </span>
                </div>
                <p className="text-slate-400 font-medium">Uptime SLA</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-3 font-[Space_Grotesk]">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    24/7
                  </span>
                </div>
                <p className="text-slate-400 font-medium">Expert Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[Space_Grotesk]">
              Built For Modern Work
            </h3>
            <p className="text-slate-400 text-lg">
              Trusted by remote professionals worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-white/10 bg-[#0B0F17] hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h4 className="text-2xl font-bold text-white mb-3 font-[Space_Grotesk]">
                  {useCase.title}
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[48px] border border-white/10 bg-gradient-to-br from-[#0B0F17] to-[#0B0F17]/50"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-[Space_Grotesk]">
              Why Remote Workers Choose Blue VPN
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300">
              <div className="flex gap-4">
                <div className="text-blue-400 text-xl">✓</div>
                <div>
                  <strong className="text-white">No Bandwidth Limits:</strong> Stream meetings, upload large files, and work without throttling
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-400 text-xl">✓</div>
                <div>
                  <strong className="text-white">Split Tunneling:</strong> Route work traffic through VPN while keeping personal browsing separate
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-400 text-xl">✓</div>
                <div>
                  <strong className="text-white">Auto-Connect:</strong> Automatically secure your connection when joining untrusted networks
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-400 text-xl">✓</div>
                <div>
                  <strong className="text-white">Multi-Device:</strong> Protect all your work devices with a single subscription
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
