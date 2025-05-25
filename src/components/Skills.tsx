
const Skills = () => {
  const programmingLanguages = [
    "JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML/CSS"
  ];
  
  const tools = [
    "React", "Node.js", "PostgreSQL", "Power BI", "Git", "Docker", "AWS", "MongoDB"
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
                Programming Languages
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {programmingLanguages.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-4 py-3 rounded-lg text-center font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-4 py-3 rounded-lg text-center font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
