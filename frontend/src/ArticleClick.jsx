import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // useNavigate for navigation
import Header from './components/Header'; // Import the Header component

function ArticleClick() {
  const { id } = useParams(); // Get the article ID from the URL
  const navigate = useNavigate(); // For navigation
  const [articleData, setArticleData] = useState({
    title: "Breaking News: Major Event Happens",
    description: "This is a detailed article about a major event that has occurred recently.",
    date: "December 5, 2024",
    time: "9:00 AM",
    sourceUrl: "https://www.news-source.com",
    image: "/article/article.jpg", // Relative path to the image
  });
  const [activeCategory, setActiveCategory] = useState('LATEST'); // Track active category in the article page

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

  return (
    <div>
      {/* Header Section */}
      <Header onCategoryChange={handleCategoryChange} />
      <h2 className='text-6xl font-bold text-center my-2'>MEDIA VIEWS</h2>
      {/* Media Divisions */}
      <div className="media-columns flex justify-center text-center ml-5 mr-5 mt-8 space-x-6 ">
        {/* Left Wing Media */}
        <div className="media-column left w-1/3 p-4 border-2 border-black">
          <div className="media-title text-4xl font-semibold mb-4">Left Wing Media</div>
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

        {/* Independent Media */}
        <div className="media-column middle w-1/3 p-4 border-2 border-black">
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
        <div className="media-column right w-1/3 p-4 border-2 border-black">
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
    </div>
  );
}

export default ArticleClick;