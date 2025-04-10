import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, AlertTriangle, ArrowRight } from 'lucide-react';
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
      // Initialize with the public key (userID)
      emailjs.init(userID);
      setSetupError(false);
    } else {
      setSetupError(false);
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
        message: message,
        to_name: "Rana Zunair Ali", // Add recipient name
        reply_to: email // Ensure replies go back to the sender
      };
      
      const result = await emailjs.send(
        'service_cbateeg', // Your EmailJS Service ID
        'template_snxn7vu', // Your EmailJS Template ID
        templateParams,
        'EMgUG06WAALDulTEV' // Add your public key here as well for redundancy
      );
      
      console.log('Email sent successfully:', result);
      
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
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-highlight mr-2 font-mono text-2xl">04.</span> Get In Touch
            </h1>
            <div className="w-20 h-1 bg-highlight mb-12"></div>
            
            {setupError && (
              <Alert className="mb-10 bg-navy-light border-highlight">
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
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="bg-navy-light/30 rounded-lg p-8 h-full border border-navy-light/50 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold text-slate-light mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-5">
                      <div className="bg-navy p-3 rounded-full shadow-lg mt-1">
                        <Mail className="text-highlight" size={18} />
                      </div>
                      <div>
                        <p className="text-slate-light font-medium mb-1">Email</p>
                        <a 
                          href="mailto:ranazunairali007@gmail.com" 
                          className="text-slate hover:text-highlight transition-colors"
                        >
                          ranazunairali007@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-5">
                      <div className="bg-navy p-3 rounded-full shadow-lg mt-1">
                        <Phone className="text-highlight" size={18} />
                      </div>
                      <div>
                        <p className="text-slate-light font-medium mb-1">Phone</p>
                        <a 
                          href="tel:+923206511539" 
                          className="text-slate hover:text-highlight transition-colors"
                        >
                          +92 3206511539
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-5">
                      <div className="bg-navy p-3 rounded-full shadow-lg mt-1">
                        <MapPin className="text-highlight" size={18} />
                      </div>
                      <div>
                        <p className="text-slate-light font-medium mb-1">Location</p>
                        <p className="text-slate">Lahore, Pakistan</p>
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="card-gradient rounded-lg p-8 border border-highlight/10 shadow-lg">
                  <h2 className="text-2xl font-bold text-slate-light mb-8">Send Me a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-slate-light mb-2 font-medium text-sm">Name</label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 bg-navy/60 text-slate-light rounded-md border border-navy-light/50 focus:border-highlight focus:outline-none transition-colors"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-slate-light mb-2 font-medium text-sm">Email</label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 bg-navy/60 text-slate-light rounded-md border border-navy-light/50 focus:border-highlight focus:outline-none transition-colors"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-slate-light mb-2 font-medium text-sm">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 bg-navy/60 text-slate-light rounded-md border border-navy-light/50 focus:border-highlight focus:outline-none transition-colors"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-slate-light mb-2 font-medium text-sm">Message</label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        className="w-full px-4 py-3 bg-navy/60 text-slate-light rounded-md border border-navy-light/50 focus:border-highlight focus:outline-none resize-none transition-colors"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        className="button-highlight w-full md:w-auto px-8 py-3 flex items-center justify-center gap-2 hover:transform hover:scale-[1.02] transition-all"
                        disabled={isSubmitting || setupError}
                      >
                        {isSubmitting ? 'Sending...' : (
                          <>Send Message <ArrowRight size={16} /></>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
