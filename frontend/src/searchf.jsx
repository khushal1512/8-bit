import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './searchf.css'; // Add this for custom styles
import Header from './components/Header';

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const navigate = useNavigate();
  const [news1, setNews1] = useState([]);
  const [news2, setNews2] = useState([]);
  const [news3, setNews3] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      fetchSearchResults(query);
    }
  }, [query]);

const handleArticleClick = async (article) => {
  try {
    // Fetch full article content from Diffbot or other API
    const response = await fetch(
      `https://api.diffbot.com/v3/article?token=c175fe76f8fc5e21094986f9a67e1c1e&url=${encodeURIComponent(article.url)}`
    );
    const data = await response.json();
    const fullContent = data.objects[0]; // Assuming Diffbot API structure

    // Navigate with full article data
    navigate('/article', { state: { article: fullContent } });
  } catch (error) {
    console.error('Error fetching full article:', error);
  }
};

  const fetchSearchResults = async (query) => {
    setLoading(true);
    try {
      const responses = await Promise.all([
        fetch(`https://newsapi.org/v2/everything?q=${query}&pageSize=1&sources=cnn&apiKey=3d63998bb81c455eaf8bed11487c53e4`),
        fetch(`https://newsapi.org/v2/everything?q=${query}&pageSize=1&sources=al-jazeera-english&apiKey=3d63998bb81c455eaf8bed11487c53e4`),
        fetch(`https://newsapi.org/v2/everything?q=${query}&pageSize=1&sources=fox-news&apiKey=3d63998bb81c455eaf8bed11487c53e4`),
      ]);
      const [data1, data2, data3] = await Promise.all(responses.map((res) => res.json()));

      setNews1(data1.articles);
      setNews2(data2.articles);
      setNews3(data3.articles);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };



  return (
    <div className="search-page">
      <Header />
      <h1 className="search-title">Search Results for "{query}"</h1>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <div className="media-sections flex justify-center  space-x-6 mt-10 max-w-7xl mx-auto">
          {[{ title: "Left Wing Media", articles: news1 }, 
            { title: "Independent Media", articles: news2 }, 
            { title: "Right Wing Media", articles: news3 }].map((section, idx) => (
            <div
              key={idx}
              className="media-column flex-1 max-w-sm p-4 border-2 border-black hover:scale-105 transition-transform text-center"
            >
              <h2 className="media-title text-4xl font-semibold mb-4">{section.title}</h2>
              {section.articles.map((article, index) => (
                <div
                  key={index}
                  className="media-content cursor-pointer"
                  onClick={() => handleArticleClick(article)}
                >
                  <h3 className="news-title text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="news-description">{article.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;