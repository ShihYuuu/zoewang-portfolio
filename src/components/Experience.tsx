
const Experience = () => {
  const experiences = [
    {
      period: "Jan 2025 – Apr 2025",
      title: "Analytics Consultant",
      company: "Wabash Marketplace",
      achievements: [
        "Developed optimization models to enhance financial strategy",
        "Conducted scenario analysis using Python",
        "Designed interactive dashboards for key metrics visualization"
      ]
    },
    {
      period: "Sep 2019 – Jun 2021",
      title: "Auditor",
      company: "Deloitte & Touche",
      achievements: [
        "Audited 5 public companies, improving compliance and risk evaluation",
        "Utilized Power BI for financial reporting and analysis",
        "Collaborated with cross-functional teams to identify process improvements"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-blue-500"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                  
                  <div className="ml-20 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {exp.period}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                      {exp.company}
                    </h4>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
