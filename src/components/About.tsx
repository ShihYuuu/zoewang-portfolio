
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                With year of professional experience, I focus on system development and 
                analytical modeling. I enjoy exploring innovative ideas and have a strong 
                ability to conduct in-depth research to develop practical solutions. In particular, 
                I specialize in applying AI technologies to build models that address real-world client needs.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Beyond work, I enjoy dancing, archery, drawing, and programming. I am proactive, 
                outgoing, and deeply curious, with proven strengths in both leadership and collaboration. 
                I strive to combine technical expertise with creative thinking to deliver meaningful and 
                effective outcomes.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Education
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <img src="purdue.png" alt="Purdue Logo" className="w-12 h-12 object-contain mt-1"/>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      M.S. in Business Analytics and Information Management
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Purdue University (Aug 2024 – Aug 2025)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <img src="chengchi.png" alt="ChengChi Logo" className="w-12 h-12 object-contain mt-1"/>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      M.S. in Management Information System
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      National Chengchi University (Sep 2021 – Jun 2023)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <img src="tsinghua.png" alt="TsingHua Logo" className="w-12 h-12 object-contain mt-1"/>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      B.S. in Industrial Engineering and Engineering Management
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      National Tsing Hua University (Sep 2017 – Jun 2021)
                    </p>
                  </div>
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
