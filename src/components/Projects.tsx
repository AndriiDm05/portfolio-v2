import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "Modern Portfolio",
            description: "The current site you are viewing. Built with React 19 and Tailwind v4.",
            image: "./portfolio-v2.png", 
            tags: ["React", "TypeScript", "Tailwind"],
            github: "https://github.com/AndriiDm05/portfolio-v2",
            demo: "https://andriidm05.github.io/portfolio-v2/",
        },
        {
            title: "Botanic Shop",
            description: "An e-commerce concept for plants featuring a shopping cart and item filtering; a final project for an IBM course on coursera.",
            image: "./botanic.png",
            tags: ["React", "JSX", "CSS"],
            github: "https://github.com/AndriiDm05/e-plantShopinng",
            demo: "https://andriidm05.github.io/e-plantShopping/",
        },
        {
            title: "To-Do List App",
            description: "A simple to-do list application with CRUD functionality and local storage.",
            image: "./todo.png",
            tags: ["React", "TypeScript", "Tailwind"],
            github: "https://github.com/AndriiDm05/todolist",
            demo: "https://adktodolist.netlify.app/",
        },
        {
            title: "Paint Program",
            description: "A basic paint application with a canvas and color palette.",
            image: "./paint.png",
            tags: ["C#", "WinForms"],
            github: "https://github.com/AndriiDm05/myjpaint",
        },
        {
            title: "Portfolio (old version)",
            description: "The previous version of my portfolio, built with HTML, CSS and JS.",
            image: "./portfolio-v1.png",
            tags: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/AndriiDm05/kilnytskyisportfolio",
            demo: "https://andriidm05.github.io/kilnytskyisportfolio/",
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>
                <div className="h-1.5 w-20 bg-blue-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="group bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col"
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x400/1e293b/64748b?text=Project+Preview" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <a href={project.demo || project.github} className="text-white text-sm font-medium">Click to view details</a>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span 
                                    key={tag} 
                                    className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                                    >
                                    {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                                >
                                    <FaGithub /> GitHub
                                </a>
                                
                                {project.demo && (
                                    <a 
                                    href={project.demo} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                    <FaExternalLinkAlt /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;