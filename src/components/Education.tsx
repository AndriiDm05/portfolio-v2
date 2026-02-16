import { HiOutlineAcademicCap } from 'react-icons/hi';

const Education = () => {
    const education = [
        {
            title: "Education in Technology and Computer Science",
            institution: "AGH University of Krakow",
            date: "2024 - 2028",
            description: "Focus on software engineering principles, algorithms, and data structures."
        },
        {
            title: "ICE CUT, preparatory course",
            institution: "Cracow University of Technology",
            date: "2023 - 2024",
            description: "International student preparatory program with a focus on technical disciplines."
        }
    ];

    return (
        <div className="mt-12 space-y-8">
            <div className="flex items-center gap-3 mb-6">
                <HiOutlineAcademicCap className="text-3xl text-blue-500" />
                <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="border-l-2 border-slate-700 ml-3 space-y-10">
                {education.map((item, index) => (
                    <div key={index} className="relative pl-8">
                        <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                            <h4 className="text-xl font-bold text-slate-200">{item.title}</h4>
                            <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                                {item.date}
                            </span>
                        </div>
                        
                        <p className="text-blue-500/90 font-medium mt-1">{item.institution}</p>
                        <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;