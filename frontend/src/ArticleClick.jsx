import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // useNavigate for navigation
import Header from './components/Header'; // Import the Header component

function ArticleClick() {
  const { id } = useParams(); // Get the article ID from the URL
  const navigate = useNavigate(); // For navigation
  const [articleData, setArticleData] = useState({
    title: "Breaking News: Major Event Happens",
    description: "This is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recently.This is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recently.This is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recently.This is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recentlyThis is a detailed article about a major event that has occurred recently.",
    date: "December 5, 2024",
    time: "9:00 AM",
    sourceUrl: "https://www.news-source.com",
    image: "/article/article.jpg", // Relative path to the image
  });
  const [activeCategory, setActiveCategory] = useState('LATEST'); // Track active category in the article page
  const [selectedMedia, setSelectedMedia] = useState(null); // Track selected media section
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // State to track header visibility

  useEffect(() => {
    console.log("Article ID:", id); // You can replace this with an actual fetch call
  }, [id]);

  // Handle category change in the Header
  const handleCategoryChange = (category) => {
    setActiveCategory(category); // Set the active category
    if (category === 'LATEST') {
      navigate('/'); // Navigate to home page when 'LATEST' is clicked
    }
    // Add other navigation logic if necessary
  };

  // Handle Media Section Click
  const handleMediaClick = (media) => {
    setSelectedMedia(media); // Set selected media section
    setIsHeaderVisible(false); // Hide header when media section is selected
  };

  // Handle Background Click to close media
  const handleBackgroundClick = () => {
    setSelectedMedia(null); // Close selected media section
    setIsHeaderVisible(true); // Show header again when media section is closed
  };

  return (
    <div>
      {/* Conditionally render Header based on isHeaderVisible */}
      {isHeaderVisible && <Header onCategoryChange={handleCategoryChange} />}
      <h2 className="text-6xl font-bold text-center my-2">MEDIA VIEWS</h2>

      {/* Overlay for background blur */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10" 
          onClick={handleBackgroundClick}
        />
      )}

      {/* Media Divisions */}
      <div className={`media-columns truncate-description flex justify-center text-center ml-5 mr-5 mt-10 space-x-6 relative ${selectedMedia ? 'blur-sm' : ''}`}>
        {/* Left Wing Media */}
        <div 
          className={`media-column left w-1/3 p-4 border-2 border-black ${selectedMedia === 'left' ? 'bg-[rgba(200,183,159,0.6)] shadow-xl' : 'hover:scale-105 hover:bg-[rgba(200,183,159,0.257)] hover:shadow-lg'} transition-transform duration-300 ease-in-out`} 
          onClick={() => handleMediaClick('left')}
        >
          <div className="media-title text-4xl font-semibold mb-4">Left Wing Media</div>
          <div className="media-content">
            <img src={articleData.image} alt="Article" className="media-image mb-4" />
            <h3 className="media-article-title text-xl font-semibold mb-2">{articleData.title}</h3>
            <p className="media-article-description text-wrap overflow-hidden text-base mb-4">{articleData.description}</p>
            <div className="media-meta text-sm">
              <span className="media-source">
                <a href={articleData.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Source</a>
              </span>
            </div>
          </div>
        </div>

        {/* Independent Media */}
        <div 
          className={`media-column middle w-1/3 p-4 border-2 border-black ${selectedMedia === 'middle' ? 'bg-[rgba(200,183,159,0.6)] shadow-xl' : 'hover:scale-105 hover:bg-[rgba(200,183,159,0.257)] hover:shadow-lg'} transition-transform duration-300 ease-in-out`} 
          onClick={() => handleMediaClick('middle')}
        >
          <div className="media-title text-4xl font-semibold mb-4">Independent Media</div>
          <div className="media-content">
            <img src={articleData.image} alt="Article" className="media-image mb-4" />
            <h3 className="media-article-title text-xl font-semibold mb-2">{articleData.title}</h3>
            <p className="media-article-description text-base mb-4">{articleData.description}</p>
            <div className="media-meta text-sm">
              <span className="media-source">
                <a href={articleData.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Source</a>
              </span>
            </div>
          </div>
        </div>

        {/* Right Wing Media */}
        <div 
          className={`media-column right w-1/3 p-4 border-2 border-black ${selectedMedia === 'right' ? 'bg-[rgba(200,183,159,0.6)] shadow-xl' : 'hover:scale-105 hover:bg-[rgba(200,183,159,0.257)] hover:shadow-lg'} transition-transform duration-300 ease-in-out`} 
          onClick={() => handleMediaClick('right')}
        >
          <div className="media-title text-4xl font-semibold mb-4">Right Wing Media</div>
          <div className="media-content">
            <img src={articleData.image} alt="Article" className="media-image mb-4" />
            <h3 className="media-article-title text-xl font-semibold mb-2">{articleData.title}</h3>
            <p className="media-article-description text-base mb-4">{articleData.description}</p>
            <div className="media-meta text-sm">
              <span className="media-source">
                <a href={articleData.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Source</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Show selected media details if any section is clicked */}
      {selectedMedia && (
        <div className="media-details fixed inset-0 bg-white bg-opacity-90 z-20 flex justify-center items-center p-4">
          <div className="w-1/2 p-6 border-2 mt-40 mb-40 border-black bg-white shadow-xl">
            <h3 className="text-3xl font-semibold mb-4">{articleData.title}</h3>
            <p className="media-article-description text-lg mb-4">{articleData.description}</p>
            <p className="media-article-meta text-sm">Date: {articleData.date} | Time: {articleData.time}</p>
            <div className="media-source text-sm">
              <a href={articleData.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Source</a>
            </div>
            <button 
              className="mt-4 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded"
              onClick={handleBackgroundClick}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleClick;