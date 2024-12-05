const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');


const NEWSAPI_KEY = 'your_newsapi_key';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('your_mongodb_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  source: String,
  publishedAt: Date,
});

const News = mongoose.model('News', newsSchema);

app.get('/api/news', async (req, res) => {
  const { query } = req.query;
  
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWSAPI_KEY}`);
    const articles = response.data.articles;

    const newsData = articles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      source: article.source.name,
      publishedAt: new Date(article.publishedAt),
    }));

    await News.insertMany(newsData);

    res.send(newsData);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).send('Error fetching news');
  }
});

app.get('/api/news/search', async (req, res) => {
  const { query } = req.query;

  try {
    const news = await News.find({
      $or: [
        { title: new RegExp(query, 'i') },
        { description: new RegExp(query, 'i') },
        { source: new RegExp(query, 'i') },
      ],
    }).sort({ publishedAt: -1 });

    res.send(news);
  } catch (error) {
    console.error('Error fetching news from database:', error);
    res.status(500).send('Error fetching news from database');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
