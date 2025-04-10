
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Server, 
  Database, 
  Layout, 
  Terminal, 
  Wrench, 
  Settings, 
  GitBranch,
  TrendingUp,
  Star,
  Github
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { GITHUB_USERNAME, getGitHubUrls } from '@/lib/utils';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-highlight" />,
    skills: [
      { name: "HTML5", proficiency: 90 },
      { name: "CSS3/SCSS", proficiency: 85 },
      { name: "JavaScript", proficiency: 90 },
      { name: "TypeScript", proficiency: 75 },
      { name: "React.js", proficiency: 85 },
      { name: "Redux", proficiency: 70 },
      { name: "Tailwind CSS", proficiency: 90 },
      { name: "Material UI", proficiency: 75 }
    ]
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6 text-highlight" />,
    skills: [
      { name: "Node.js", proficiency: 85 },
      { name: "Express.js", proficiency: 85 },
      { name: "RESTful APIs", proficiency: 90 },
      { name: "GraphQL", proficiency: 70 },
      { name: "Authentication/JWT", proficiency: 75 }
    ]
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6 text-highlight" />,
    skills: [
      { name: "MongoDB", proficiency: 90 },
      { name: "Mongoose", proficiency: 85 },
      { name: "SQL Basics", proficiency: 70 },
      { name: "Firebase", proficiency: 75 }
    ]
  },
  {
    title: "Development Tools",
    icon: <Wrench className="w-6 h-6 text-highlight" />,
    skills: [
      { name: "Git", proficiency: 90 },
      { name: "GitHub", proficiency: 85 },
      { name: "VS Code", proficiency: 90 },
      { name: "Postman", proficiency: 85 },
      { name: "Figma (Basics)", proficiency: 70 }
    ]
  },
  {
    title: "Testing & Deployment",
    icon: <Settings className="w-6 h-6 text-highlight" />,
    skills: [
      { name: "Jest", proficiency: 70 },
      { name: "React Testing Library", proficiency: 75 },
      { name: "Heroku", proficiency: 70 },
      { name: "Netlify", proficiency: 85 },
      { name: "Vercel", proficiency: 75 }
    ]
  },
  {
    title: "Other Skills",
    icon: <Code className="w-6 h-6 text-highlight" />,
    skills: [
      { name: "Responsive Design", proficiency: 90 },
      { name: "Agile/Scrum", proficiency: 75 },
      { name: "JIRA", proficiency: 70 },
      { name: "Technical Writing", proficiency: 85 },
      { name: "Problem Solving", proficiency: 90 }
    ]
  }
];

const Skills = () => {
  // Scroll to the top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get GitHub URLs
  const githubUrls = getGitHubUrls();

  return (
    <>
      <section className="pt-32 pb-20">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-highlight mr-2 font-mono text-2xl">02.</span> Skills & Technologies
          </h1>
          <div className="w-20 h-1 bg-highlight mb-10"></div>
          
          <p className="text-slate-light text-lg max-w-3xl mb-12">
            With one year of experience in full-stack development, I've built a strong foundation in the MERN stack 
            while continuously expanding my skill set. Here's a comprehensive overview of my technical abilities:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="card-gradient rounded-lg p-8 hover:transform hover:scale-[1.01] transition-all border border-navy-light/50 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-navy p-3 rounded-full">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-light">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-light font-medium">{skill.name}</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.round(skill.proficiency / 20) ? 'text-highlight' : 'text-slate/30'}`} 
                              fill={i < Math.round(skill.proficiency / 20) ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="w-full bg-navy-light rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-highlight h-full rounded-full transition-all duration-500 ease-in-out" 
                          style={{ width: `${skill.proficiency}%`, transform: 'translateX(0)' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-slate-light text-center">Development Workflow</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-navy/50 rounded-lg border border-highlight/10 hover:border-highlight/30 transition-all hover:transform hover:scale-[1.02] duration-300">
              <div className="bg-navy rounded-full p-5 mb-6 shadow-lg">
                <Terminal className="w-10 h-10 text-highlight" />
              </div>
              <h3 className="text-xl font-bold text-slate-light mb-3">Planning & Design</h3>
              <p className="text-slate">
                I start by understanding requirements and sketching wireframes before moving into development.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-navy/50 rounded-lg border border-highlight/10 hover:border-highlight/30 transition-all hover:transform hover:scale-[1.02] duration-300">
              <div className="bg-navy rounded-full p-5 mb-6 shadow-lg">
                <Code className="w-10 h-10 text-highlight" />
              </div>
              <h3 className="text-xl font-bold text-slate-light mb-3">Development</h3>
              <p className="text-slate">
                I write clean, maintainable code with modern best practices and responsive design principles.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-navy/50 rounded-lg border border-highlight/10 hover:border-highlight/30 transition-all hover:transform hover:scale-[1.02] duration-300">
              <div className="bg-navy rounded-full p-5 mb-6 shadow-lg">
                <GitBranch className="w-10 h-10 text-highlight" />
              </div>
              <h3 className="text-xl font-bold text-slate-light mb-3">Testing & Deployment</h3>
              <p className="text-slate">
                I thoroughly test applications before deploying to ensure high-quality, bug-free experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <TrendingUp className="text-highlight" size={24} />
            <h2 className="text-3xl font-bold text-slate-light">Continuous Learning</h2>
          </div>
          <p className="text-slate mb-8">
            The tech industry evolves rapidly, and I'm committed to growing with it. I'm currently enhancing my skills in:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-navy-light p-4 rounded-lg hover:bg-navy transition-colors border border-navy-light/50 hover:transform hover:scale-[1.05] duration-300">
              <span className="font-mono text-highlight">Next.js</span>
            </div>
            <div className="bg-navy-light p-4 rounded-lg hover:bg-navy transition-colors border border-navy-light/50 hover:transform hover:scale-[1.05] duration-300">
              <span className="font-mono text-highlight">TailwindCSS</span>
            </div>
            <div className="bg-navy-light p-4 rounded-lg hover:bg-navy transition-colors border border-navy-light/50 hover:transform hover:scale-[1.05] duration-300">
              <span className="font-mono text-highlight">TypeScript</span>
            </div>
            <div className="bg-navy-light p-4 rounded-lg hover:bg-navy transition-colors border border-navy-light/50 hover:transform hover:scale-[1.05] duration-300">
              <span className="font-mono text-highlight">AWS</span>
            </div>
          </div>
          
          <Link to="/projects">
            <Button className="button-primary hover:transform hover:scale-[1.02] duration-300">
              See Skills in Action
            </Button>
          </Link>
        </div>
      </section>
      
      {/* GitHub Stats Section */}
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-slate-light">
            <span className="text-highlight mr-2 font-mono text-xl">03.</span> GitHub Contributions
          </h2>
          <div className="w-20 h-1 bg-highlight mb-10"></div>
          
          {/* Updated GitHub Stats Layout */}
          <div className="space-y-8">
            {/* GitHub Contribution Chart - Full Width */}
            <div className="card-gradient rounded-lg p-6 overflow-hidden">
              <div className="flex items-center mb-4">
                <Github className="w-5 h-5 text-highlight mr-2" />
                <h3 className="text-xl font-mono text-slate-light">GitHub Activity</h3>
              </div>
              <div className="relative w-full bg-navy/30 rounded-lg p-4 flex items-center justify-center">
                <img 
                  src={githubUrls.contributionChart}
                  alt="GitHub Contribution Graph"
                  className="w-full object-cover max-h-40 rounded-md"
                  loading="lazy"
                />
              </div>
              <p className="text-slate text-sm mt-4 text-center">My GitHub contribution timeline showing consistent coding activity</p>
            </div>
            
            {/* GitHub Stats Cards - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-gradient rounded-lg p-6 h-full transform transition-transform duration-300 hover:scale-[1.01]">
                <div className="flex items-center mb-4">
                  <Github className="w-5 h-5 text-highlight mr-2" />
                  <h3 className="text-lg font-mono text-slate-light">GitHub Stats</h3>
                </div>
                <div className="relative bg-navy/30 rounded-lg p-4 flex items-center justify-center h-64">
                  <img 
                    src={githubUrls.statsCard}
                    alt="GitHub Stats"
                    className="w-full h-full object-contain rounded-md"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="card-gradient rounded-lg p-6 h-full transform transition-transform duration-300 hover:scale-[1.01]">
                <div className="flex items-center mb-4">
                  <Github className="w-5 h-5 text-highlight mr-2" />
                  <h3 className="text-lg font-mono text-slate-light">Top Languages</h3>
                </div>
                <div className="relative bg-navy/30 rounded-lg p-4 flex items-center justify-center h-64">
                  <img 
                    src={githubUrls.topLangsCard}
                    alt="Top Languages"
                    className="w-full h-full object-contain rounded-md"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href={githubUrls.profile}
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary inline-flex items-center gap-2 hover:transform hover:scale-[1.02] duration-300"
            >
              <Github size={18} /> Visit My GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
