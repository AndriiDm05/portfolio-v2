import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiBootstrap,
    SiNodedotjs,
    SiSharp,
    SiDotnet
} from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'HTML5', icon: <SiHtml5 />, color: 'text-[#E34F26]' },
        { name: 'CSS3', icon: <SiCss3 />, color: 'text-[#1572B6]' },
        { name: 'JavaScript', icon: <SiJavascript />, color: 'text-[#F7DF1E]' },
        { name: 'React', icon: <SiReact />, color: 'text-[#61DAFB]' },
        { name: 'TypeScript', icon: <SiTypescript />, color: 'text-[#3178C6]' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-[#06B6D4]' },
        { name: 'Bootstrap', icon: <SiBootstrap />, color: 'text-[#7952B3]' },
        { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-[#339933]' },
        { name: 'C#', icon: <SiSharp />, color: 'text-[#239120]' },
        { name: '.NET', icon: <SiDotnet />, color: 'text-[#512BD4]' },
    ];

    return (
        <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Toolkit</h2>
                <div className="h-1.5 w-20 bg-blue-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {skills.map((skill, index) => (
                <div 
                    key={index}
                    className="group p-8 bg-slate-800/50 border border-slate-700 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 cursor-default"
                >
                    <div className={`text-5xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
                        {skill.icon}
                    </div>
                    
                    <span className="text-slate-300 font-semibold group-hover:text-white transition-colors">
                        {skill.name}
                    </span>
                </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;