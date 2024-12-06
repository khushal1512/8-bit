import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // useNavigate for navigation
import Header from './components/Header'; // Import the Header component

function ArticleClick() {
  const { id } = useParams(); // Get the article ID from the URL
  const navigate = useNavigate(); // For navigation

  // Update the state to hold 5 different articles
  const [articles, setArticles] = useState([
    {
      title: "Breaking News: Major Event Happens",
      description: "This is a detailed article about a major event that has occurred recently.",
      date: "December 5, 2024",
      time: "9:00 AM",
      sourceUrl: "https://www.news-source.com",
      image: "/article/article1.jpg", // Example image
      mismatch:"HElllooooooo"
    },
    {
      title: "Technology Advances: New Innovations",
      description: "This article covers recent advancements in technology and their impact.",
      date: "December 4, 2024",
      time: "3:00 PM",
      sourceUrl: "https://www.tech-source.com",
      image: "/article/article2.jpg",
      mismatch:"HElllooo2312312oooo"
    },
    {
      title: "Health Update: Important Discoveries",
      description: "An update on health-related discoveries and their implications.",
      date: "December 3, 2024",
      time: "12:00 PM",
      sourceUrl: "https://www.health-source.com",
      image: "/article/article3.jpg",
      mismatch:"Hddd312oooo"
    },
    {
      title: "Sports Highlights: Big Win",
      description: "The latest sports highlight, featuring a major victory in a championship.",
      date: "December 2, 2024",
      time: "6:00 PM",
      sourceUrl: "https://www.sports-source.com",
      image: "/article/article4.jpg",
      mismatch:"Hsadds12312oooo"
    },
    {
      title: "Global Politics: Key Issues Today",
      description: "A deep dive into global political issues and the latest developments.",
      date: "December 1, 2024",
      time: "10:00 AM",
      sourceUrl: "https://www.politics-source.com",
      image: "/article/article5.jpg",
      mismatch:"opipoipo"
    },
  ]);
  
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

  // Prevent background scroll when media is selected
  useEffect(() => {
    if (selectedMedia) {
      document.body.style.overflow = 'hidden'; // Disable background scrolling
    } else {
      document.body.style.overflow = ''; // Enable background scrolling again
    }
    return () => {
      document.body.style.overflow = ''; // Clean up on unmount
    };
  }, [selectedMedia]);

  // Helper function to return the correct index based on the selected media
  const getMediaIndex = (media) => {
    if (media === 'left') return 0;
    if (media === 'middle') return 1;
    if (media === 'right') return 2;
    return 0; // Default to the first article if no valid media is selected
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
      <div className={`media-columns flex justify-center text-center ml-5 mr-5 mt-10 space-x-6 relative ${selectedMedia ? 'blur-sm' : ''}`}>
        {/* Left Wing Media */}
        <div 
          className={`media-column left w-1/3 p-4 border-2 border-black ${selectedMedia === 'left' ? 'bg-[rgba(200,183,159,0.6)] shadow-xl' : 'hover:scale-105 hover:bg-[rgba(200,183,159,0.257)] hover:shadow-lg'} transition-transform duration-300 ease-in-out`} 
          onClick={() => handleMediaClick('left')}
        >
          <div className="media-title text-4xl font-semibold mb-4">Left Wing Media</div>
          <div className="media-content">
            <img src={articles[0].image} alt="Article" className="media-image mb-4" />
            <h3 className="media-article-title text-xl font-semibold mb-2">{articles[0].title}</h3>
            <p className="media-article-description text-wrap overflow-hidden text-base mb-4">{articles[0].description}</p>
            <div className="media-meta text-sm">
              <span className="media-source">
                <a href={articles[0].sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Source</a>
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
            <img src={articles[1].image} alt="Article" className="media-image mb-4" />
            <h3 className="media-article-title text-xl font-semibold mb-2">{articles[1].title}</h3>
            <p className="media-article-description text-base mb-4">{articles[1].description}</p>
            <div className="media-meta text-sm">
              <span className="media-source">
                <a href={articles[1].sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Source</a>
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
            <img src={articles[2].image} alt="Article" className="media-image mb-4" />
            <h3 className="media-article-title text-xl font-semibold mb-2">{articles[2].title}</h3>
            <p className="media-article-description text-base mb-4">{articles[2].description}</p>
            <div className="media-meta text-sm">
              <span className="media-source">
                <a href={articles[2].sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Source</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Display Media Details Modal */}
      {selectedMedia && (
        <div className="media-details fixed top-20 left-1/2 transform -translate-x-1/2 bg-white p-8 z-20 max-h-[80vh] overflow-y-auto">
          <h3 className="text-3xl font-semibold mb-4">{articles[getMediaIndex(selectedMedia)].title}</h3>
          <p className="text-xl">{articles[getMediaIndex(selectedMedia)].description}</p>
          <h2 className="text-red-600 font-bold">Mismatch: </h2>
          <p>{articles[getMediaIndex(selectedMedia)].mismatch}</p>
        </div>
      )}
    </div>
  );
}

export default ArticleClick;