import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [query, setQuery] = useState('');
  const [news, setNews] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/news/search?query=${query}`);
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
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
      <button onClick={handleSearch}>Search</button>
      <div>
        {news.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            <p>Source: {article.source}</p>
            <p>Published at: {new Date(article.publishedAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
