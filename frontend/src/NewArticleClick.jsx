import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const NewArticleClick = () => {
  const location = useLocation();
  const url = new URLSearchParams(location.search).get('url'); // Extract the URL from query parameters
  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (url) {
      fetchArticleContent(url);
    }
  }, [url]);

  const fetchArticleContent = async (url) => {
    try {
      const response = await axios.get(
        `https://api.diffbot.com/v3/article?token=c175fe76f8fc5e21094986f9a67e1c1e&url=${url}`
      );

      const article = response.data.objects ? response.data.objects[0] : null;
      setArticleData(article);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching article content:', error);
      setLoading(false);
    }
  };

  return (
    <div className="article-container">
      {loading ? (
        <p>Loading article...</p>
      ) : articleData ? (
        <div className="article-content">
          <h1>{articleData.title || 'No Title Available'}</h1>
          <p>{articleData.text || 'No Description Available'}</p>
          {articleData.author && <p>Author: {articleData.author}</p>}
          {articleData.published && <p>Published on: {new Date(articleData.published).toLocaleDateString()}</p>}
        </div>
      ) : (
        <p>No article data available</p>
      )}
    </div>
  );
};

export default NewArticleClick;