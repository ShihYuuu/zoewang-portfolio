
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Use GitHub Pages + Hexo to build my blog",
      description: "大概記錄一下我怎麼把部落格架設起來的",
      date: "2022-02-26",
      tags: ["Hexo", "GitHub"]
    },
    {
      id: 2,
      title: "我的Blog出道啦！",
      description: "經過多年，我終於克服了惰性，開始紀錄經營自己的網頁，意外的很簡單呢！",
      date: "2022-02-23",
      tags: ["Mood"]
    }
  ];

  return (
    <section id="articles" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Articles
          </h2>
          
          <div className="space-y-6">
            {articles.map((article) => (
              <Link key={article.id} to={`/article/${article.id}`}>
                <Card className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {article.title}
                    </CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      📅 {article.date} 🏷️ {article.tags.join(", ")}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      {article.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
