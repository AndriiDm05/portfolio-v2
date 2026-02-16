import { FaLinkedin, FaGithub, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
        
        <div className="text-center md:text-left">
          <p className="text-white font-bold text-lg tracking-tighter" title="Andrii-Dmytro Kilnytskyi">A. D. Kilnytskyi</p>
          <p className="text-slate-500 text-sm mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 text-slate-400">
          <a href="https://github.com/AndriiDm05" target="_blank" className="hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/andrii-dmytro-kilnytskyi-416b9433a/" target="_blank" className="hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
          <button 
            onClick={scrollToTop}
            className="p-2 bg-slate-800 hover:bg-blue-600 text-white rounded-full transition-all group"
          >
            <FaChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;