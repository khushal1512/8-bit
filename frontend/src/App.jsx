import { useState, useEffect } from 'react';
import './App.css';
import './global.css';
import Header from './components/Header'; // Ensure the path to Header is correct
import { Link } from 'react-router-dom'; // Import Link from React Router

function App() {
  const [selectedCategory, setSelectedCategory] = useState('LATEST'); // Default category
  const [news, setNews] = useState([]); // Stores news articles

  // Sample news data
  const allNews = [
    {
      category: 'LATEST',
      title: 'Trump has won the 2025 US Elections',
      description: 'The Republican Party has beaten the Democrats with a huge margin',
      date: '2024-11-06',
      time: '9:00 AM',
      image: '/article/trump.jpeg',
    },
    {
      category: 'LATEST',
      title: 'Trump’s Historic Win: A Resounding Message from American Voters',
      description: 'Trump’s Historic Win: A Resounding Message from American Voters',
      date: '2024-11-06',
      time: '9:00 AM',
      image: '/article/article.jpg',
    },
    {
      category: 'LATEST',
      title: '3',
      description: 'This is a LATEST news article.',
      date: 'December 5, 2024',
      time: '9:00 AM',
      image: '/article/article.jpg',
    },
    {
      category: 'LATEST',
      title: '4',
      description: 'This is a LATEST news article.',
      date: 'December 5, 2024',
      time: '9:00 AM',
      image: '/article/article.jpg',
    },
    {
      category: 'LATEST',
      title: '5',
      description: 'This is a LATEST news article.',
      date: 'December 5, 2024',
      time: '9:00 AM',
      image: '/article/article.jpg',
    },
    {
      category: 'LATEST',
      title: '6',
      description: 'This is a LATEST news article.',
      date: 'December 5, 2024',
      time: '9:00 AM',
      image: '/article/article.jpg',
    },
    {
      category: 'SPORTS',
      title: 'Sports Headline: Big Game Tonight!',
      description: 'This is a sports news article.',
      date: 'December 5, 2024',
      time: '9:00 AM',
      image: '/article/article.jpg',
    },
    {
      category: 'POLITICAL',
      title: 'Political Headline 1',
      description: 'This is a political news article.',
      date: 'December 5, 2024',
      time: '10:30 AM',
      image: '/political/article1.jpg',
    },
    {
      category: 'HEALTH',
      title: 'Health Headline 1',
      description: 'This is a health news article.',
      date: 'December 5, 2024',
      time: '11:00 AM',
      image: '/health/article1.jpg',
    },
    {
      category: 'ECONOMY',
      title: 'Economy Headline 1',
      description: 'This is an economy news article.',
      date: 'December 5, 2024',
      time: '12:00 PM',
      image: '/economy/article1.jpg',
    },
  ];

  // Filter news based on selected category
  useEffect(() => {
    if (selectedCategory) {
      const filteredNews = allNews.filter((news) => news.category === selectedCategory);
      setNews(filteredNews);
    }
  }, [selectedCategory]);

  // Show "Go to Top" button on scroll
  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById('goToTop');
      if (window.scrollY > 100) {
        button.classList.add('show');
      } else {
        button.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Header Component */}
      <Header onCategoryChange={setSelectedCategory} activeCategory={selectedCategory} />

      {/* Selected Category Title */}
      <div className="category-title text-center text-6xl font-bold mt-5">
        {`${selectedCategory} NEWS`}
      </div>

      {/* News Articles */}
      <div className="news-container mt-5">
        {news.map((article, index) => (
          <div
            key={index}
            className="article-container border-2 mt-10 border-black flex container mx-auto"
          >
            {/* Link to navigate to the ArticleClick page */}
            <Link
              to={`/articleclick/${index}`}
              state={{ article }} // Pass the article data as state
              className="flex"
            >
              <div className="article-image">
                <img
                  src={article.image}
                  alt={article.title}
                  className="article-img"
                />
              </div>

              <div className="article-info flex-1 p-4">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-description">{article.description}</p>
                <div className="article-meta">
                  <span className="article-date">{article.date}</span>
                  <br />
                  <span className="article-time">{article.time}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Go to Top Button */}
      <button id="goToTop" onClick={scrollToTop} className="go-to-top-btn">
        ↑
      </button>
    </div>
  );
}

export default App;