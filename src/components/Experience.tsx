import { HiOutlineBriefcase } from 'react-icons/hi';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Symphony Solutions",
      date: "July 2025 - Present",
      description: "Assisted in building UI components and fixing front-end bugs in a collaborative team environment. Gained experience with React and TypeScript in a real-world setting.",
    },
  ];

  return (
    <div className="mt-12 space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <HiOutlineBriefcase className="text-3xl text-emerald-400" />
        <h2 className="text-2xl font-bold text-white">Experience</h2>
      </div>

      <div className="border-l-2 border-slate-700 ml-3 space-y-10">
        {experiences.map((item, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute w-4 h-4 bg-emerald-400 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
            
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <h4 className="text-xl font-bold text-slate-200">{item.title}</h4>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                        {item.date}
                    </span>
                </div>
                
                <p className="text-emerald-400/90 font-medium mt-1">{item.company}</p>
                <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                    {item.description}
                </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;