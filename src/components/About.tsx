
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                With four years of professional experience, I specialize in front-end UI 
                development and back-end microservices design. I've architected scalable 
                systems and performed rigorous stress testing to ensure performance under load.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My passion lies in creating efficient, scalable software solutions that deliver 
                exceptional user experiences while maintaining robust backend performance.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Education
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    M.S. in Information Management
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Purdue University (Aug 2024–Aug 2025)
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    B.Sc. in Communication Engineering
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    National Central University (Sep 2016– Jun 2019)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
