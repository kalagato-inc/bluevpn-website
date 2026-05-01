import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-blue-950/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900/20 rounded-[40px] border border-white/10 p-12 md:p-20 shadow-2xl relative overflow-hidden"
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-20 bg-cyan-500/10 blur-[60px] rounded-full" />
                <div className="absolute bottom-0 left-0 p-20 bg-blue-600/10 blur-[60px] rounded-full" />

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-[Space_Grotesk]">
                    Ready to Get Started?
                </h2>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-[Space_Grotesk] text-[16px]">
                    Take control of your privacy — join users worldwide trusting Blue VPN for secure, private browsing every day.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    
                    <a 
                        href="https://apps.apple.com/us/app/fast-vpn-turbo-ip-changer/id6444899367"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-7 py-3 rounded-full transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transform hover:-translate-y-1"
                    >
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" role="img" aria-hidden="true">
                             <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.89 3.15-.84 1.54.05 2.75.83 3.44 1.88-3.32 1.6-2.63 6.42.71 7.74-.56 1.45-1.29 2.5-2.38 3.45zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.54 4.33-3.74 4.25z"/>
                        </svg>
                        <div className="flex flex-col items-start">
                            <span className="text-[10px] font-bold tracking-wide uppercase leading-tight opacity-80">Download on the</span>
                            <span className="text-xl font-bold leading-none font-['Space_Grotesk']">App Store</span>
                        </div>
                    </a>
                </div>
                
               
            </motion.div>
        </div>
    </section>
  );
}
