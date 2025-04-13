import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  // Scroll to the top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="pt-32 pb-20">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-highlight mr-2 font-mono text-2xl">02.</span> About Me
          </h1>
          <div className="w-20 h-1 bg-highlight mb-12"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-slate-light mb-6">
                  Hello! I'm Zunair Ali, a full stack developer with a passion for building digital 
                  experiences that are both functional and beautiful. I started my journey as a software 
                  engineer about a year ago, and I've been on an exciting learning path ever since.
                </p>
                
                <p className="text-slate mb-6">
                  My background includes completing a comprehensive coding bootcamp, where I mastered the fundamentals 
                  of web development, followed by a year of hands-on experience working with the MERN stack 
                  What I enjoy most about software development is the blend of problem-solving and creativity.
                </p>
                
                <p className="text-slate mb-6">

                  Each project presents unique challenges that require both analytical thinking and imaginative solutions.
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,  I'm currently looking for opportunities to contribute my skills to innovative projects and collaborative teams. 
                  If you think we might be a good fit to work together, I'd love to hear from you!
                </p>
                
                
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link to="/contact">
                    <Button className="button-primary flex items-center gap-2">
                      Get in touch <ArrowRight size={16} />
                    </Button>
                  </Link>
                  
                </div>
              </div>
            </div>
            
            <div className="md:w-1/4 group relative mx-7">
              <div className="relative z-10 rounded-md overflow-hidden">
                <img 
                  src="/images/profile.jpg" 
                  alt="Zunair Ali" 
                  className="mx-auto w-full h-auto object-cover rounded-md "
                />
               
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-highlight rounded-md "></div>
            </div>
          </div>
        </div>
      </section>
      
      
    </>
  );
};

export default About;
