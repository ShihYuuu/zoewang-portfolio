
const Experience = () => {
  const experiences = [
    {
      period: "Jan 2025 – Apr 2025",
      title: "Analytics Consultant",
      company: "Wabash Marketplace",
      icon: "/lovable-uploads/8e726654-0dc3-47fe-acb9-20e13ad6f5da.png", // placeholder for company icon
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
      icon: "/lovable-uploads/8e726654-0dc3-47fe-acb9-20e13ad6f5da.png", // placeholder for company icon
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
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-2 w-4 h-4 bg-gray-400 dark:bg-gray-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                  
                  <div className="ml-12 flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img 
                        src={exp.icon} 
                        alt={`${exp.company} logo`} 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-gray-600 dark:text-gray-400 mb-3">
                        {exp.company}
                      </h4>
                      
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <span className="text-gray-400 mr-2 mt-1">•</span>
                            <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
