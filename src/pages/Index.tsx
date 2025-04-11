import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Download, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection, getGitHubUrls, GITHUB_USERNAME } from '@/lib/utils';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = 'Zunair_Ali_Resume.pdf';
    link.click();
  };

  const handleScrollToAbout = () => {
    scrollToSection('about-preview');
  };

  const githubUrls = getGitHubUrls();

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 pb-10">
        <div className="container mx-auto">
          <p className="text-highlight font-mono mb-4 opacity-0 animate-fadeIn" style={{animationDelay: '0.2s'}}>Hi, my name is</p>
          <h1 className="text-3xl md:text-6xl font-bold text-slate-light mb-3 opacity-0 animate-fadeIn" style={{animationDelay: '0.4s'}}>
            Zunair Ali.
          </h1>
          <div className="flex items-center gap-3 mb-5 opacity-0 animate-fadeIn" style={{animationDelay: '0.6s'}}>
            <h2 className="text-2xl md:text-3xl font-md text-slate">
              I build things for the web.
            </h2>
            <a 
              href={githubUrls.profile} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
              className="text-slate hover:text-highlight transition-colors duration-300"
            >
              <Github size={24} />
            </a>
          </div>
          <p className="text-slate max-w-xl text-sm md:text-base mb-8 opacity-0 animate-fadeIn" style={{animationDelay: '0.8s'}}>
            I'm a full stack software engineer specializing in the MERN. Currently, I'm focused on building accessible, 
            human-centered products that solve real-world problems.
          </p>
          <div className="flex flex-wrap  gap-4 opacity-0 animate-fadeIn" style={{animationDelay: '1s'}}>
            <Link to="/projects">
              <Button className="button-primary flex items-center gap-2">
                Check out my work <ArrowRight size={16} />
              </Button>
            </Link>
            <Button 
              onClick={handleDownloadResume} 
              className="button-highlight flex items-center gap-2"
            >
              Download Resume <Download size={16} />
            </Button>
          </div>
          
          <button 
            onClick={handleScrollToAbout}
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer opacity-0 animate-fadeIn"
            style={{animationDelay: '1.5s'}}
            aria-label="Scroll Down"
          >
            <span className="text-slate text-sm mb-2">Scroll Down</span>
            <ArrowDown className="text-highlight animate-bounce" size={20} />
          </button>
        </div>
      </section>
      
      {/* Brief About Section */}
      <section id="about-preview" className="bg-navy-light">
        <div className="container mx-auto">
          <h2 className="section-heading">
            <span className="text-highlight mr-2">02.</span> About Me
          </h2>
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-2/3">
              <p className="text-slate mb-4 text-sm md:text-base">
              Hello! I'm Zunair Ali, a full stack developer with a passion for building digital experiences that are both functional and beautiful. I started my journey as a software engineer about a year ago, and I've been on an exciting learning path ever since.
              </p>
              <p className="text-slate mb-4 text-sm md:text-base">
              What I enjoy most about software development is the blend of problem-solving and creativity.
              Each project presents unique challenges that require both analytical thinking and imaginative solutions.
              </p>
              <Link to="/about" className="text-highlight inline-flex items-center gap-1 font-mono mt-4 hover:underline">
                Learn more about me <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="md:w-1/4 group relative ">
              <div className="relative z-10 rounded-md overflow-hidden">
                <img 
                  src="/images/profile.png" 
                  alt="Zunair Ali" 
                  className="w-64 h-64 object-cover rounded-md hover:scale-[1.02] transition-all duration-300"
                />
                <div className="absolute inset-0 bg-highlight/10 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-64 h-64 border-2 border-highlight rounded-md group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
            </div>
          </div>
          
          <Link to="/about" className="button-primary inline-flex mt-8">
            More About Me
          </Link>
        </div>
      </section>
      
      {/* Experience Preview Section */}
      <section id="experience-preview">
        <div className="container mx-auto">
          <h2 className="section-heading">
            <span className="text-highlight mr-2">03.</span> Experience
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-6">
            <div className="card-gradient p-6 rounded-lg border-l-4 hover:transform hover:scale-[1.01] border-highlight hover:shadow-lg transition-all">
              <h3 className="font-mono text-xl font-bold text-slate-light mb-2">Full Stack Intern</h3>
              <p className="text-slate-light font-medium mb-1">IIFA TECH Inc.</p>
              <p className="text-slate text-sm mb-4">Dec 2024 - Mar 2025</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-slate text-sm">
                  <ArrowRight size={22} className="text-highlight mt-1" />
                  <span>Worked on various client project with different usecases, including frontend and backend optimization.</span>
                </li>
                <li className="flex items-start gap-2 text-slate text-sm">
                  <ArrowRight size={18} className="text-highlight mt-1" />
                  <span>Learned the best pratices for developing the software widely used in the industry.</span>
                </li>
              </ul>
              <Link to="/experience" className="text-highlight inline-flex items-center gap-1 font-mono text-sm mt-4 hover:underline">
                View Details <ArrowRight size={14} />
              </Link>
            </div>
            
            <div className="card-gradient ml-3 p-6 rounded-lg border-l-4 border-highlight hover:transform hover:scale-[1.01] hover:shadow-lg transition-all">
              <h3 className="font-mono text-xl font-bold text-slate-light mb-2">SWE Fellow at Headstarter AI</h3>
              <p className="text-slate-light font-medium mb-1">Fellowship</p>
              <p className="text-slate text-sm mb-4">Jul 2024 - Sep 2024</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-slate text-sm">
                  <ArrowRight size={20} className="text-highlight mt-1" />
                  <span>Built different AI based project within seven week duration uisng Next.js,Clerk and Open AI.</span>
                </li>
                <li className="flex items-start gap-2 text-slate text-sm">
                  <ArrowRight size={20} className="text-highlight mt-1" />
                  <span>Collaborated with diverse fellows and mentors enhancing communication and adaptability.</span>
                </li>
              </ul>
              <Link to="/experience" className="text-highlight inline-flex items-center gap-1 font-mono text-sm mt-4 hover:underline">
                View Details <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/experience">
              <Button className="button-primary">
                View Full Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section id="projects-preview">
        <div className="container mx-auto">
          <h2 className="section-heading ">
            <span className="text-highlight mr-2">04.</span> Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-gradient rounded-lg p-6 hover:transform hover:scale-[1.01] transition-all">
              <h3 className="font-mono text-xl mb-3 text-slate-light">Full Stack E-commerce application </h3>
              <p className="text-slate mb-4">A full-stack e-commerce platform built with React, Node.js, Express, and MongoDB with admin functionality included.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-navy px-3 py-1 rounded-full text-xs font-mono text-highlight">React</span>
                <span className="bg-navy px-3 py-1 rounded-full text-xs font-mono text-highlight">Node.js</span>
                <span className="bg-navy px-3 py-1 rounded-full text-xs font-mono text-highlight">Express</span>
                <span className="bg-navy px-3 py-1 rounded-full text-xs font-mono text-highlight">MongoDB</span>

                <span className="bg-navy px-3 py-1 rounded-full text-xs font-mono text-highlight">Stripe</span>

              </div>
              <Link to="/projects" className="text-highlight mt-2 inline-flex items-center gap-1 font-mono text-sm hover:underline">
                View Project <ArrowRight size={14} />
              </Link>
            </div>
            
            <div className="card-gradient rounded-lg p-6 hover:transform hover:scale-[1.01] transition-all">
              <h3 className="font-mono text-xl mb-3 text-slate-light">Real Time Chat Application</h3>
              <p className="text-slate mb-4">A real-time chat application with WebSockets, user authentication, and message encryption.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-navy px-3 py-1 rounded-full text-xs font-mono text-highlight">React</span>
                <span className="bg-navy px-3 py-1 rounded-full text-xs font-mono text-highlight">Node</span>
                <span className="bg-navy px-3 py-1 rounded-full text-xs font-mono text-highlight">Socket.io</span>
                <span className="bg-navy px-3 py-1 rounded-full text-xs font-mono text-highlight">Zustand</span>
                <span className="bg-navy px-3 py-1 rounded-full text-xs font-mono text-highlight">JWT</span>
              </div>
              <Link to="/projects" className="text-highlight mt-2 inline-flex items-center gap-1 font-mono text-sm hover:underline">
                View Project <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/projects">
              <Button className="button-primary">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Skills Preview Section */}
      <section id="skills-preview" className="bg-navy-light">
        <div className="container mx-auto">
          <h2 className="section-heading">
            <span className="text-highlight mr-2">05.</span> My Skills
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-navy p-6 rounded-lg flex flex-col items-center justify-center hover:transform hover:scale-105 transition-all">
              <div className="text-highlight text-4xl mb-3">
                <span className="font-mono">JS</span>
              </div>
              <span className="font-mono text-sm">JavaScript</span>
            </div>
            
            <div className="bg-navy p-6 rounded-lg flex flex-col items-center justify-center hover:transform hover:scale-105 transition-all">
              <div className="text-highlight text-4xl mb-3">
                <span className="font-mono">TS</span>
              </div>
              <span className="font-mono text-sm">TypeScript</span>
            </div>
            
            <div className="bg-navy p-6 rounded-lg flex flex-col items-center justify-center hover:transform hover:scale-105 transition-all">
              <div className="text-highlight text-4xl mb-3">
                <span className="font-mono">RJ</span>
              </div>
              <span className="font-mono text-sm">React.js</span>
            </div>
            
            <div className="bg-navy p-6 rounded-lg flex flex-col items-center justify-center hover:transform hover:scale-105 transition-all">
              <div className="text-highlight text-4xl mb-3">
                <span className="font-mono">NJ</span>
              </div>
              <span className="font-mono text-sm">Node.js</span>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/skills">
              <Button className="button-primary">
                View All Skills
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      
      
      {/* Contact CTA Section */}
      <section id="contact-cta" className="py-20">
        <div className="container mx-auto">
          <h2 className="section-heading">
            <span className="text-highlight mr-2 font-mono text-2xl">06.</span> Get In Touch
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="card-gradient rounded-lg p-8 border border-highlight/10 shadow-lg text-center">
              <p className="text-slate mb-6 text-base md:text-lg">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <a href="mailto:ranazunairali007@gmail.com" className="button-highlight flex items-center gap-2 px-6 py-3 hover:transform hover:scale-[1.02] transition-all">
                  <Mail size={18} /> Email Me
                </a>
                
                <Link to="/contact">
                  <Button className="button-primary flex items-center gap-2 px-6 py-3 hover:transform hover:scale-[1.02] transition-all">
                    Say Hello <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
