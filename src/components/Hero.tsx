import { HiArrowNarrowRight } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full z-0" />

      <div className="relative z-10 text-center space-y-6 max-w-4xl">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-4 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new opportunities
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
          Hello, I'm <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-[length:200%_auto] animate-gradient">
            Andrii Kilnytskyi
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          A passionate <span className="text-white font-medium">Junior Software Engineer</span> specializing in building 
          high-performance web applications with React, TypeScript, and modern ecosystems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a 
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-1"
          >
            View My Work
            <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="/cv_kilnytskyi.pdf" 
            target="_blank"
            className="flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold border border-slate-700 transition-all duration-300"
          >
            Download CV
            <FiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;