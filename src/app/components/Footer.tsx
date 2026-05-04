import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';
import Logo from "@/imports/Frame2147223268";
import { useLanguage } from "@/app/context/LanguageContext";
import { Link } from "react-router-dom";
import { trackEvent } from "@/app/lib/analytics";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="col-span-2 lg:col-span-2">
             <div className="flex items-center gap-2 mb-6">
                 <div className="origin-left scale-75">
                    <Logo />
                 </div>
             </div>
             <p className="text-slate-400 max-w-sm mb-6 leading-relaxed font-[Space_Grotesk]">
                {t.footer.tagline}
             </p>
             <div className="flex items-center gap-4">
                <a href="#" className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                    <Twitter size={18} />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                    <Instagram size={18} />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                    <Linkedin size={18} />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                    <Facebook size={18} />
                </a>
             </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 font-[Space_Grotesk]">{t.footer.product}</h4>
            <ul className="space-y-4 font-[Space_Grotesk]">
                <li><a href="/#features" className="text-slate-400 hover:text-blue-400 transition-colors">{t.footer.features}</a></li>
                <li><a href="https://apps.apple.com/us/app/fast-vpn-turbo-ip-changer/id6444899367" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("download_click", { location: "footer", platform: "ios" })} className="text-slate-400 hover:text-blue-400 transition-colors">{t.footer.downloadiOS}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 font-[Space_Grotesk]">{t.footer.useCases}</h4>
            <ul className="space-y-4 font-[Space_Grotesk]">
                <li><Link to="/streaming" className="text-slate-400 hover:text-blue-400 transition-colors">{t.footer.streaming}</Link></li>
                <li><Link to="/gaming" className="text-slate-400 hover:text-blue-400 transition-colors">{t.footer.gaming}</Link></li>
                <li><Link to="/travel" className="text-slate-400 hover:text-blue-400 transition-colors">{t.footer.travel}</Link></li>
                <li><Link to="/remote-work" className="text-slate-400 hover:text-blue-400 transition-colors">{t.footer.remoteWork}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 font-[Space_Grotesk]">{t.footer.legal}</h4>
            <ul className="space-y-4 font-[Space_Grotesk]">
                <li><a href="https://vpn-blue.info/vpn-blue/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">{t.footer.privacy}</a></li>
                <li><a href="https://vpn-blue.info/vpn-blue/terms-of-use/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">{t.footer.terms}</a></li>
                <li><Link to="/blog" className="text-slate-400 hover:text-blue-400 transition-colors">{t.footer.blogs}</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm font-[Space_Grotesk]">
                © {newDAte().getFullYear()} Blue VPN. {t.footer.copyright}
            </p>
            <div className="flex items-center gap-6">
                <a href="https://vpn-blue.info/vpn-blue/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white text-sm transition-colors font-[Space_Grotesk]">{t.footer.privacy}</a>
                <a href="https://vpn-blue.info/vpn-blue/terms-of-use/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white text-sm transition-colors font-[Space_Grotesk]">{t.footer.terms}</a>
                <Link to="/terms" className="text-slate-500 hover:text-white text-sm transition-colors font-[Space_Grotesk]">{t.footer.cookies}</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}

function newDAte() { return new Date(); }
