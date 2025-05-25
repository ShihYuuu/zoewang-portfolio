
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Instacart Basket Analysis",
      description: "Leveraged SQL to uncover shopping patterns, reorder dynamics, and cross-sell opportunities from 3M+ grocery orders.",
      time: "2024",
      keywords: ["SQL", "PostgreSQL", "Data Analysis"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
    },
    {
      title: "GenAI Caption Generator",
      description: "Built an end-to-end GenAI pipeline generating creative, context-aware captions using BLIP embeddings and GPT-4 API.",
      time: "2024",
      keywords: ["GenAI", "HuggingFace", "FastAPI"],
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=200&fit=crop"
    },
    {
      title: "Spotify Song Recommender",
      description: "Used clustering and PCA to identify and visualize distinct Spotify song archetypes from audio metadata.",
      time: "2024",
      keywords: ["Data Science", "PCA", "Clustering"],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop"
    }
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
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    {project.title}
                  </CardTitle>
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
