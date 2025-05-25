
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    // You can replace this URL with your actual resume PDF URL
    const resumeUrl = "/resume.pdf"; // Place your resume.pdf in the public folder
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-blue-600 dark:text-blue-400">
              Zoe Wang
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              Software Engineer & Problem Solver
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Hi, I'm Zoe, a passionate software engineer dedicated to creating innovative solutions 
              and transforming ideas into impactful digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Explore My Work
              </Button>
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
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face" 
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
