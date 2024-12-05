import React, { useState } from 'react';
import { Route, Link, Routes } from 'react-router-dom';  // Import Routes and Route from react-router-dom
import axios from 'axios';
import ArticlePage from './ArticlePage'; // Import ArticlePage component

const App = () => {
  const [query, setQuery] = useState('');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=3&sources=fox-news,cnn&apiKey=ae7b36161fc94081939f943c5971fc13` // Fetch articles from specific sources
      );
      const jsonData = await response.json();
      const articlesWithBody = await Promise.all(
        jsonData.articles.map(async (article) => {
          const fullTextAndImages = await fetchFullArticleBody(article.url);
          return { ...article, ...fullTextAndImages };
        })
      );
      setNews(articlesWithBody);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  const fetchFullArticleBody = async (url) => {
    try {
      const response = await axios.get('https://api.diffbot.com/v3/article', {
        params: {
          token: 'c175fe76f8fc5e21094986f9a67e1c1e', // Replace with your Diffbot API key
          url: url,
        },
      });

      // Return both the article text and images
      const articleText = response.data.objects[0].text;
      const images = response.data.objects[0].images || []; // Extract images if available

      return { body: articleText, images };
    } catch (error) {
      console.error('Error fetching article body:', error);
      return { body: 'Unable to fetch full content.', images: [] };
    }
  };

  return (
    <div>
      <h1>News Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for news"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Loading...' : 'Search'}
      </button>

      <Routes>
        <Route path="/article/:url" element={<ArticlePage />} />
        <Route path="/" element={
          <div>
            {news.map((article, index) => (
              <div key={index}>
                <h2>
                  <Link to={`/article/${encodeURIComponent(article.url)}`}>
                    {article.title}
                  </Link>
                </h2>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
                <p>Source: {article.source.name}</p>
                <p>Published at: {new Date(article.publishedAt).toLocaleString()}</p>
              </div>
            ))}
          </div>
        } />
      </Routes>
    </div>
  );
};

export default App;
