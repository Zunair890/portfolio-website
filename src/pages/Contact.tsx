
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail, Phone, MapPin, Send, Twitter, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [setupError, setSetupError] = useState(false);
  const { toast } = useToast();

  // Scroll to the top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initialize EmailJS with your user ID
  useEffect(() => {
    // Check if EmailJS is properly configured
    const userID = "EMgUG06WAALDulTEV";
    const serviceID = "service_cbateeg";
    const templateID = "template_snxn7vu";
    
    if (
      userID === "EMgUG06WAALDulTEV" && 
      serviceID === "service_cbateeg" && 
      templateID === "template_snxn7vu"
    ) {
      emailjs.init(userID);
      setSetupError(false);
    } else {
      setSetupError(true);
    }
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if EmailJS is properly configured
    if (setupError) {
      toast({
        title: "Configuration Error",
        description: "EmailJS is not properly configured. Please contact me directly via email.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
      };
      
      await emailjs.send(
        'service_cbateeg', // Your EmailJS Service ID
        'template_snxn7vu', // Your EmailJS Template ID
        templateParams
      );
      
      toast({
        title: "Message sent!",
        description: "I'll get back to you as soon as possible.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-highlight mr-2 font-mono text-xl sm:text-2xl">04.</span> Get In Touch
          </h1>
          <div className="w-20 h-1 bg-highlight mb-10 md:mb-12"></div>
          
          {setupError && (
            <Alert className="mb-8 bg-navy-light border-highlight">
              <AlertTriangle className="h-4 w-4 text-highlight" />
              <AlertTitle>Email Integration Setup Required</AlertTitle>
              <AlertDescription>
                The contact form requires configuration. To enable email functionality:
                <ol className="list-decimal ml-5 mt-2 space-y-1 text-sm">
                  <li>Sign up for a free EmailJS account at <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" className="text-highlight underline">emailjs.com</a></li>
                  <li>Create an email service and template</li>
                  <li>Update the Contact.tsx file with your User ID, Service ID, and Template ID</li>
                </ol>
                <p className="mt-2 text-sm">Until configured, users will be directed to contact you via email directly.</p>
              </AlertDescription>
            </Alert>
          )}
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            <div className="md:w-1/2">
              <p className="text-slate-light text-base md:text-lg mb-6 md:mb-8">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you as soon as possible!
              </p>
              
              <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                <div className="flex items-center gap-4 p-3 md:p-4 bg-navy-light/60 rounded-lg hover:bg-navy-light transition-colors">
                  <div className="bg-navy p-2 md:p-3 rounded-full shadow-lg">
                    <Mail className="text-highlight" size={18} />
                  </div>
                  <div>
                    <p className="text-slate-light font-medium text-sm md:text-base">Email</p>
                    <a href="mailto:youremail@example.com" className="text-slate text-sm md:text-base hover:text-highlight transition-colors">
                      youremail@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 md:p-4 bg-navy-light/60 rounded-lg hover:bg-navy-light transition-colors">
                  <div className="bg-navy p-2 md:p-3 rounded-full shadow-lg">
                    <Phone className="text-highlight" size={18} />
                  </div>
                  <div>
                    <p className="text-slate-light font-medium text-sm md:text-base">Phone</p>
                    <a href="tel:+1234567890" className="text-slate text-sm md:text-base hover:text-highlight transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 md:p-4 bg-navy-light/60 rounded-lg hover:bg-navy-light transition-colors">
                  <div className="bg-navy p-2 md:p-3 rounded-full shadow-lg">
                    <MapPin className="text-highlight" size={18} />
                  </div>
                  <div>
                    <p className="text-slate-light font-medium text-sm md:text-base">Location</p>
                    <p className="text-slate text-sm md:text-base">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-slate-light">Connect with me</h3>
                <div className="flex gap-3 md:gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-navy p-2 md:p-3 rounded-full text-slate hover:text-highlight hover:bg-navy-light transition-all"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-navy p-2 md:p-3 rounded-full text-slate hover:text-highlight hover:bg-navy-light transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-navy p-2 md:p-3 rounded-full text-slate hover:text-highlight hover:bg-navy-light transition-all"
                    aria-label="Twitter Profile"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 mt-8 md:mt-0">
              <form onSubmit={handleSubmit} className="card-gradient p-6 md:p-8 rounded-lg border border-highlight/10">
                <h3 className="text-xl md:text-2xl font-bold text-slate-light mb-4 md:mb-6 flex items-center gap-2">
                  <Send size={16} className="text-highlight" /> Send me a message
                </h3>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-slate-light mb-1 md:mb-2 font-medium text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-navy-dark text-slate-light rounded-md border border-navy-light focus:border-highlight focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-slate-light mb-1 md:mb-2 font-medium text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-navy-dark text-slate-light rounded-md border border-navy-light focus:border-highlight focus:outline-none transition-colors"
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-slate-light mb-1 md:mb-2 font-medium text-sm">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-navy-dark text-slate-light rounded-md border border-navy-light focus:border-highlight focus:outline-none transition-colors"
                    placeholder="Subject"
                    required
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="message" className="block text-slate-light mb-1 md:mb-2 font-medium text-sm">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-navy-dark text-slate-light rounded-md border border-navy-light focus:border-highlight focus:outline-none resize-none transition-colors"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="button-primary w-full flex items-center justify-center gap-2 hover:bg-highlight/20"
                  disabled={isSubmitting || setupError}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>Send Message <Send size={16} /></>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-20 bg-navy-light">
        <div className="container mx-auto text-center max-w-2xl md:max-w-3xl">
          <div className="inline-block mb-4 md:mb-6 p-2 bg-navy rounded-full">
            <div className="bg-highlight/10 p-2 md:p-3 rounded-full">
              <MapPin className="text-highlight" size={20} />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-slate-light">Looking for remote opportunities</h2>
          <p className="text-slate text-sm md:text-base mb-6 md:mb-8">
            While I'm based in San Francisco, I'm open to remote opportunities and collaborations worldwide. 
            Let's create something amazing together!
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
