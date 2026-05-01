import { motion } from 'motion/react';
import { Smartphone, Wifi, Globe2 } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    title: "Download",
    description: "Get the app from your store"
  },
  {
    icon: Wifi,
    title: "Connect",
    description: "Tap to secure connection"
  },
  {
    icon: Globe2,
    title: "Browse",
    description: "Enjoy unrestricted access"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-[#02040a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm font-medium tracking-widest uppercase mb-4 font-[Space_Grotesk]"
          >
            Extensible by design
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight font-[Space_Grotesk]"
          >
            How It Works
          </motion.h2>
        </div>

        {/* Steps Flow */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent w-3/4 mx-auto z-0" />

          {steps.map((step, index) => (
            <div key={index} className="contents">
              
              {/* Step Item */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group w-full max-w-[240px]"
              >
                {/* Icon Container */}
                <div className="w-24 h-24 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center justify-center mb-6 shadow-lg backdrop-blur-sm group-hover:border-blue-500/30 group-hover:bg-slate-900 group-hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] transition-all duration-500 relative overflow-hidden">
                  
                  {/* Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <step.icon className="w-8 h-8 text-slate-400 group-hover:text-blue-400 transition-colors duration-300 relative z-10" />
                  
                  {/* Top Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors font-[Space_Grotesk]">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.description}</p>
              </motion.div>

              {/* Connector Circle (Between items, Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex relative z-10 items-center justify-center w-32">
                   
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
