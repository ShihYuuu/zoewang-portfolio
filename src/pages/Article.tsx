
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Article = () => {
  const { id } = useParams();
  
  const articles: Record<string, any> = {
    "1": {
      title: "Use GitHub Pages + Hexo to build my blog",
      date: "2022-02-26",
      tags: ["Hexo", "GitHub"],
      content: `
        # Use GitHub Pages + Hexo to build my blog

        大概記錄一下我怎麼把部落格架設起來的

        ## Getting Started

        After years of procrastination, I finally decided to start my own blog. The process was surprisingly simple!

        ## Why Hexo?

        Hexo is a fast, simple & powerful blog framework powered by Node.js. It's perfect for developers who want to write in Markdown and deploy to GitHub Pages.

        ## Setup Process

        1. Install Hexo CLI
        2. Create new blog
        3. Configure GitHub Pages
        4. Deploy!

        The whole process took less than an hour, and now I have a beautiful blog running on GitHub Pages.

        ## Conclusion

        Setting up a blog with Hexo and GitHub Pages is incredibly straightforward. I wish I had started sooner!
      `
    },
    "2": {
      title: "我的Blog出道啦！",
      date: "2022-02-23",
      tags: ["Mood"],
      content: `
        # 我的Blog出道啦！

        經過多年，我終於克服了惰性，開始紀錄經營自己的網頁，意外的很簡單呢！

        ## 為什麼現在才開始？

        說實話，我一直想要有自己的部落格，但總是覺得很麻煩。今天終於下定決心，發現其實沒有想像中那麼困難。

        ## 接下來的計劃

        我計劃在這裡分享：
        - 技術學習筆記
        - 專案開發經驗
        - 生活感想

        ## 小結

        萬事起頭難，但開始了就不難了！希望能夠持續更新這個部落格。
      `
    }
  };

  const article = articles[id || "1"];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-4">
                ← Back to Home
              </Button>
            </Link>
          </div>
          
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
              <div className="text-gray-600 dark:text-gray-400">
                <span>📅 {article.date}</span>
                <span className="ml-4">🏷️ {article.tags.join(", ")}</span>
              </div>
            </header>
            
            <div className="whitespace-pre-line leading-relaxed">
              {article.content}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Article;
