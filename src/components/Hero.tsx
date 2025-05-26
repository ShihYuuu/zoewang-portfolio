
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import profileImage from '@/assets/avatar.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    const resumeUrl = "/zoewang-portfolio/resume.pdf";
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-blue-600 dark:text-blue-400">
              Shih-Yu (Zoe) <br/> Wang
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              Software Engineer & Data Analyst
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              I’m Zoe, a data-driven engineer who enjoys solving complex problems, uncovering insights from data, 
              and building software that scales with impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Social Media Icons */}
              <a href="https://www.linkedin.com/in/shih-yu-wang/" target="_blank" rel="noopener noreferrer" className="text-portfolio-primary hover:text-portfolio-primary/80 dark:text-white dark:hover:text-white/80 transition-colors">
                <FaLinkedin size={28} />
              </a>
              <a href="https://github.com/ShihYuuu" target="_blank" rel="noopener noreferrer" className="text-portfolio-primary hover:text-portfolio-primary/80 dark:text-white dark:hover:text-white/80 transition-colors">
                <FaGithub size={28} />
              </a>
              <a href="mailto:zoewang1379@gmail.com" className="text-portfolio-primary hover:text-portfolio-primary/80 dark:text-white dark:hover:text-white/80 transition-colors">
                <HiOutlineMail size={28} />
              </a>
              {/* Resume btn */}
              <Button 
                variant="outline"
                onClick={openResume}
                className="border-gray-300 dark:border-gray-600 px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                My Resume
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <img 
                  src={profileImage}
                  alt="Zoe Wang"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
