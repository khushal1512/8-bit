const app = require("../app");
const News = require("../model/news.model");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const NewsAPI = require("newsapi");

app.get("api/headlines", catchAsyncErrors( async (req , res) => {
    
    try {
        const response = await axios.get(``)
        const newsapi = new NewsAPI(`${process.env.NEWSAPI_KEY}`);
        newsapi.v2.topHeadlines({
            sources: 'bbc-news,the-verge'
        })
    } catch(error) {
        console.log(error);
    }
}))


app.get(
  "/api/news",
  catchAsyncErrors(async (req, res) => {
    const { query } = req.query;

    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWSAPI_KEY}`
      );
      const articles = response.data.articles;

      const newsData = articles.map((article) => ({
        title: article.title,
        description: article.description,
        url: article.url,
        source: article.source.name,
        publishedAt: new Date(article.publishedAt),
      }));

      await News.insertMany(newsData);

      res.send(newsData);
    } catch (error) {
      console.error("Error fetching news:", error);
      res.status(500).send("Error fetching news");
    }
  })
);

app.get("/api/news/search", async (req, res) => {
  const { query } = req.query;

  try {
    const news = await News.find({
      $or: [
        { title: new RegExp(query, "i") },
        { description: new RegExp(query, "i") },
        { source: new RegExp(query, "i") },
      ],
    }).sort({ publishedAt: -1 });

    res.send(news);
  } catch (error) {
    console.error("Error fetching news from database:", error);
    res.status(500).send("Error fetching news from database");
  }
});
