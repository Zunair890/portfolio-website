import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto card-gradient rounded-lg p-10 border border-highlight/10 shadow-lg text-center">
          <div className="flex justify-center mb-3 ">
            <div className="relative ">
              <span className="text-3xl font-mono font-bold text-slate-light">404</span>
              
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-slate-light mb-4">Page Not Found</h1>
          
          <p className="text-slate mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            
            <button 
              onClick={() => window.history.back()} 
              className="button-primary flex items-center gap-2 px-6 py-3 w-full sm:w-auto"
            >
              <ArrowLeft size={18} /> Go Back
            </button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-navy-light/30">
            <p className="text-slate text-sm">
              If you believe this is an error, please contact me at{" "}
              <a 
                href="mailto:ranazunairali007@gmail.com" 
                className="text-highlight hover:underline"
              >
                ranazunairali007@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
