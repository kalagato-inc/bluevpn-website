import { Shield, Globe, Lock, Zap, Smartphone, ToggleRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from "@/app/context/LanguageContext";

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      eyebrow: t.features.encryption.eyebrow,
      title: t.features.encryption.title,
      description: t.features.encryption.desc
    },
    {
      icon: Globe,
      eyebrow: t.features.global.eyebrow,
      title: t.features.global.title,
      description: t.features.global.desc
    },
    {
      icon: Lock,
      eyebrow: t.features.privacy.eyebrow,
      title: t.features.privacy.title,
      description: t.features.privacy.desc
    },
    {
      icon: Zap,
      eyebrow: t.features.performance.eyebrow,
      title: t.features.performance.title,
      description: t.features.performance.desc
    },
    {
      icon: Smartphone,
      eyebrow: t.features.compatibility.eyebrow,
      title: t.features.compatibility.title,
      description: t.features.compatibility.desc
    },
    {
      icon: ToggleRight,
      eyebrow: t.features.killswitch.eyebrow,
      title: t.features.killswitch.title,
      description: t.features.killswitch.desc
    }
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-[Space_Grotesk]"
          >
            {t.features.mainTitle}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 leading-relaxed max-w-2xl font-[Space_Grotesk]"
          >
            {t.features.mainSubtitle}
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
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
                <span className="block text-blue-500 text-xs font-semibold mb-3 uppercase tracking-wide">
                    {feature.eyebrow}
                </span>
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
  );
}
