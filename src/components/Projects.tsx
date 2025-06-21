import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Informs 2025: Data-Driven Strategies for Operational Growth",
      description: "Real-Time E-Commerce Dashboard & Automated Scenario Modeling for Production Efficiency",
      time: "2025",
      keywords: ["Data Analysis", "LSTM"],
      image: "project/informs_poster.png",
      links: [
        { label: "YouTube", url: "https://www.youtube.com/watch?v=1BEwNre9-wo"},
        { label: "Informs", url: "https://www.youtube.com/watch?v=4lBW0S-5kTw" },
        { label: "Poster", url: "project/poster.png" }
      ]
    },
    {
      title: "Natural Language Processing with Disaster Tweets",
      description: "Conducted LSTM and BERT to determine the authenticity of disaster-related tweets, achieving 84.1% accuracy.",
      time: "2025",
      keywords: ["NLP", "TensorFlow", "Deep Learning"],
      image: "project/disaster_tweet.png",
      link: "https://github.com/ShihYuuu/NLP-with-Disaster-Tweets.git"
    },
    {
      title: "Restaurant Search Website",
      description: "Created a RESTful restaurant search website in a serverless architecture using Azure Functions. Implemented unit tests with GitLab.",
      time: "2024",
      keywords: ["RESTful", "Azure", "MongoDB", "CI/CD"],
      image: "project/restaurant_search.png",
      link: "https://github.com/ShihYuuu/Restaurant-Browser.git"
    },
    {
      title: "Cybersecurity for Malware Family Classification",
      description: "Designed an ensemble learning based on Genetic Algorithm to integrate antivirus inconsistent labels, malware classify accuracy of 83.6%.",
      time: "2023",
      keywords: ["Linux"],
      image: "project/malware.png",
      link: "https://github.com/ShihYuuu/Malware_Family_Classifier.git"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  {project.links?.length && project.links.length > 1 ? (
                    <div className="relative group">
                      <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:underline cursor-pointer">
                        {project.title}
                      </CardTitle>
                      <div className="absolute z-10 top-full left-0 mt-2 w-max bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow-md p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {project.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm text-blue-600 dark:text-blue-400 hover:underline px-2 py-1"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={project.link || (project.links && project.links[0].url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl text-gray-900 dark:text-white hover:underline"
                    >
                      <CardTitle>
                        {project.title}
                      </CardTitle>
                    </a>
                  )}
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {project.time}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.keywords.map((keyword, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary"
                        className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
