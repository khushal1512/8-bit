import { useState } from 'react';
import './App.css';
import './global.css';
import Header from './components/header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">

      {/* Main Content Section */}
      <div className="article-container">
        <div className="article-image">
          <img 
            src="/article/article.jpg"
            alt="Article" 
            className="article-img" 
          />
        </div>

        <div className="article-info">
          <h2 className="article-title">Breaking News: Major Event Happens</h2>
          <p className="article-description">
            A brief description of the news article goes here. This is where the summary of the article will be displayed to give readers an overview of the content.
          </p>
          <div className="article-meta">
            <span className="article-date">December 5, 2024</span>
            <span className="article-time">10:30 AM</span>
          </div>
        </div>
      </div>
      <div className="article-container">
        {/* Repeat the article container if needed for more content */}
      </div>
    </div>
  );
}

export default App;