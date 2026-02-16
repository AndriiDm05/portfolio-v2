import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
        <div className="h-1.5 w-20 bg-blue-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-white">Let's talk about your project</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question 
            or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-4">
            <a href="mailto:andrii.dmytro.kilnytskyi@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group">
              <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                <FaEnvelope className="text-xl" />
              </div>
              andrii.kilnytskyy@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/andrii-dmytro-kilnytskyi-416b9433a/" target="_blank" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group">
              <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                <FaLinkedin className="text-xl" />
              </div>
              linkedin.com/in/andrii-dmytro-kilnytskyi
            </a>
            <a href="https://github.com/AndriiDm05" target="_blank" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group">
              <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                <FaGithub className="text-xl" />
              </div>
              github.com/AndriiDm05
            </a>
          </div>
        </div>

        <form 
          action="https://formspree.io/f/mreaqdpl" 
          method="POST"
          className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700 space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
            <input 
              type="text" name="name" id="name" required
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input 
              type="email" name="email" id="email" required
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea 
              name="message" id="message" rows={4} required
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="How can I help you?"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;