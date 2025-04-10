
import { useEffect } from 'react';
import { Calendar, Building2, ArrowRight } from 'lucide-react';

const experiences = [
  {
    title: "Full Stack Intern",
    company: "IIFA TECH Inc.",
    period: "Dec 2024 - Mar 2025",
    location: "Lahore, Pakistan",
    description: [
      "Joined as an student ambassador, also as internee I gained real-world experience.",
      "Worked on various client project with different usecases, including frontend and backend optimization.",
      "Designed and built RESTful APIs using Node.js and Express.",
      "Learned the best pratices for developing the software widely used in the industry."
    ],
    technologies: ["React", "Node", "MongoDB", "Express"]
  },
  {
    title: "Software Engineering Fellow",
    company: "Headstarter AI",
    period: "Jul 2024 - Sep 2024",
    location: "Remote",
    description: [
      "Developed responsive web applications using React and Redux",
      "Created and maintained backend services using Node.js and Express",
      "Collaborated with UX designers to implement intuitive user interfaces",
      "Participated in code reviews and mentored junior developers"
    ],
    technologies: ["Next", "React", "Node", "Clerk", "Open AI", "Typescript"]
  },
  {
    title: "Maverik Studnet Ambassador",
    company: "Black Box AI",
    period: "Nov 2024 - April 2025",
    location: "Remote",
    description: [
      "Proudly selected as a Maverik student ambassador for UE.",
      "Main motive is to bridging the gap between students and industry.",
      "Attended weekly session by Black Box Ai team, how AI revolutioning different industries.",
         ],
    technologies: []
  }
];

const Experience = () => {
  // Scroll to the top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4">
          <span className="text-highlight mr-2 font-mono text-xl sm:text-2xl">03.</span> Experience
        </h1>
        <div className="w-20 h-1 bg-highlight mb-10"></div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-navy-light p-6 rounded-lg border-l-4 border-highlight hover:shadow-lg transition-all"
            >
              <h3 className="font-mono text-xl font-bold text-slate-light mb-1">{exp.title}</h3>
              
              <div className="flex items-center gap-2 mb-3">
                <Building2 size={14} className="text-highlight" />
                <span className="text-slate-light font-medium">{exp.company}</span>
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-sm text-slate">
                <Calendar size={12} className="text-highlight" />
                <span>{exp.period}</span>
                <span className="mx-1">•</span>
                <span>{exp.location}</span>
              </div>
              
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate">
                    <ArrowRight size={16} className="text-highlight mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="bg-navy px-3 py-1 rounded-full text-xs font-mono text-highlight">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
