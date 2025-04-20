import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GradientButton } from "@/components/ui/gradient-button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet to-indigo mb-6">404</div>
          <h1 className="text-4xl font-bold text-white mb-6">Page Not Found</h1>
          <p className="text-xl text-coolGray mb-8 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <a href="/">
            <GradientButton>
              Return to Home
            </GradientButton>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
