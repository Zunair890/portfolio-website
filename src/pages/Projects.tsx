import { useEffect, useState } from 'react';
import { Github, ExternalLink, ArrowRight, FolderIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Sample project data - replace with your own projects
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with user auth, product catalog, shopping cart, and payment integration.",
    image: "/ecommerce.png",
    tags: ["React", "Node", "Express", "MongoDB", "Redux", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Zunair890/Forever_Ecommerce-app",
    featured: true
  },
  {
    id: 2,
    title: "Authentication System",
    description: "A full stack authentication system with user registration, login, and session management.",
    image: "/auth.png",
    tags: ["React", "Node", "Node", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Zunair890/MERN-authenication-system",
    featured: true
  },
  {
    id: 3,
    title: "Smart Learn AI",
    description: "A chatbot application for educational purposes, providing interactive learning experiences.",
    image: "/smartlearn.png",
    tags: ["React", "Typescript", "Node", "Express", "MongoDB",],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Zunair890/SmartLearn_AI",
    featured: true
  },
  {
    id: 4,
    title: "Cryptoverse ",
    description: "A crypto based application that provides crypto news, price, and market cap, ands much more.",
    image: "/cyrpto.png",
    tags: ["React", "RTK", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 5,
    title: "Pantry tracker",
    description: "A pantry management application that allows users to track their pantry items and expiration dates.",
    image: "/placeholder.svg",
    tags: ["React", "Context API", "Tailwind CSS", "MUI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Zunair890/Pantry-Tracker_Firebase",
    featured: false
  },
  {
    id: 6,
    title: "Linkedin Clone",
    description: "A linkedin clone application that allows users to connect with others and share their experiences.",
    image: "/placeholder.svg",
    tags: ["React", "RTK", "Tailwind CSS", "VercelFirebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Zunair890/LinkedIn-Clone-2.0",
    featured: false
  },
  {
    id: 7,
    title: "Imagify-Text to Image",
    description: "A text to image application that allows users to generate images from text.",
    image: "/placeholder.svg",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Zunair890/Imagify-Text-to-Image",
    featured: false
  }
];

const Projects = () => {
  // Scroll to the top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Filter states
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Get unique tags from all projects
  const allTags = ["all", ...new Set(projectsData.flatMap(project => project.tags))];
  
  // Filter projects based on selected tag
  const filterProjects = (tag: string) => {
    setActiveFilter(tag);
    
    if (tag === "all") {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project => project.tags.includes(tag));
      setFilteredProjects(filtered);
    }
  };

  return (
    <>
      <section className="pt-28 sm:pt-30 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-highlight mr-2 font-mono text-2xl">04.</span> My Projects
          </h1>
          <div className="w-20 h-1 bg-highlight mb-12"></div>
          
         
          
          {/* Filter Tabs */}
          <div className="mb-16 flex flex-wrap gap-3">
            {allTags.map((tag, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                  activeFilter === tag 
                    ? "bg-highlight text-navy shadow-md" 
                    : "bg-navy-light text-slate hover:text-highlight border border-transparent hover:border-highlight/20"
                }`}
                onClick={() => filterProjects(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          
          {/* Featured Projects - Horizontal Grid Layout */}
          <h2 className="text-3xl font-bold mb-8  text-slate-light">
            <span className="text-highlight mr-2 font-mono"></span> Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-3 mb-28">
            {filteredProjects.filter(project => project.featured).map((project, index) => (
              <div 
                key={project.id} 
                className="card-gradient rounded-lg flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:shadow-highlight/5 hover:-translate-y-1 border border-transparent hover:border-highlight/30"
              >
                {/* Project Image */}
                <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-navy-dark">
                      <p className="text-slate">No image available</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-navy-dark/20 mix-blend-multiply"></div>
                </div>
                
                {/* Project Info */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-auto">
                    
                    <h3 className="text-xl font-medium text-highlight mb-3">{project.title}</h3>
                    <p className="text-slate mb-4">{project.description}</p>
                    
                    {/* Project Links */}
                    <div className="flex gap-5 mb-4">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-slate-light hover:text-highlight transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github size={18} />
                        <span className="text-sm">Source Code</span>
                      </a>
                      
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-navy-dark px-3 py-1 rounded-full text-xs font-mono text-highlight hover:bg-navy hover:scale-105 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Other Projects - Grid Layout */}
          <h2 className="text-3xl font-bold mb-8 text-slate-light">
            Other Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.filter(project => !project.featured).map((project) => (
              <div 
                key={project.id} 
                className="card-gradient rounded-lg p-7 flex flex-col h-full transition-all duration-300 border border-transparent hover:border-highlight/30 hover:shadow-lg hover:shadow-highlight/5 hover:-translate-y-1"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex justify-between items-start mb-5">
                  <div className="text-highlight">
                    <FolderIcon size={30} />
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-light hover:text-highlight transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} className={`transform transition-transform duration-300 ${hoveredCard === project.id ? 'scale-110' : ''}`} />
                    </a>
                    
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-light mb-3">{project.title}</h3>
                <p className="text-slate text-sm mb-5 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-navy px-2 py-1 rounded-full text-xs font-mono text-highlight hover:bg-navy-dark transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-slate mb-5">Interested in seeing more of my work?</p>
            <a 
              href="https://github.com/Zunair890" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="button-primary inline-flex items-center gap-2"
            >
              View More on GitHub <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
