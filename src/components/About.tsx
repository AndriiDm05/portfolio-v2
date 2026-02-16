import Education from "./Education";
import Experience from "./Experience";

const About = () => {
  const stats = [
    { label: "Location", value: "Cracow, Poland" },
    { label: "Role", value: "Front-End / Full Stack Developer" },
    { label: "Availability", value: "Remote / Hybrid" },
  ];

  return (
        <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">
                        <img 
                            src="/me.jpg"
                            alt="Andrii Kilnytskyi"
                            className="w-full h-auto object-cover transition-all duration-500 grayscale-0 lg:grayscale lg:hover:grayscale-0"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        About <span className="text-blue-400">Me</span>
                    </h2>
                    
                    <p className="text-slate-400 leading-relaxed text-lg">
                        I am a dedicated software engineer in training with a strong focus on 
                        building modern web applications. My journey started with a fascination 
                        for how the web works, leading me to complete comprehensive training in 
                        the React ecosystem.
                    </p>
                    
                    <p className="text-slate-400 leading-relaxed text-lg">
                        I specialize in <span className="text-white">React, TypeScript and other technologies</span>. 
                        Beyond just writing code, I am passionate about creating clean, 
                        user-friendly interfaces and solving complex architectural problems. 
                        I am always eager to learn new technologies and contribute to 
                        innovative projects.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        {stats.map((stat, index) => (
                        <div key={index} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                            <p className="text-blue-400 text-sm font-medium">{stat.label}</p>
                            <p className="text-white font-semibold">{stat.value}</p>
                        </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 border-t border-slate-800 pt-12">
                        <Experience />
                        <Education />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;