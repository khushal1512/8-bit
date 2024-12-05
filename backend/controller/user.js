const app = require("../app");
const News = require("../model/news.model");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const NewsAPI = require("newsapi");
const express = require("express");
const Router = express.Router();

Router.get("/headlines", catchAsyncErrors( async (req , res) => {
    
    try {
        const response = await axios.get(``)
        const newsapi = new NewsAPI(`${process.env.NEWSAPI_KEY}`);
        newsapi.v2.topHeadlines({
            sources: 'bbc-news,the-verge'

        })
    } catch(error) {
        console.log(error.response.data);
    }
}))


Router.get(
  "/news",
  catchAsyncErrors(async (req, res) => {
    const { query } = req.query;

    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWSAPI_KEY}`
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

Router.get("/news/search", async (req, res) => {
   const { q } = req.query;

   try {
     console.log("Received search query:", q);
     
     if (!q) {
       return res.status(400).send("Query parameter is required");
     }

     const news = await News.find({
       $or: [
         { title: new RegExp(q, "i") },
         { description: new RegExp(q, "i") },
         { source: new RegExp(q, "i") },
       ],
     }).sort({ publishedAt: -1 });

     console.log("Found news items:", news.length);
     res.json(news);
   } catch (error) {
     console.error("Detailed database search error:", error);
     res.status(500).send(`Internal server error: ${error.message}`);
   }
});


module.exports = Router;