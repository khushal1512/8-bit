import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access the URL parameters
import Header from './components/header';

function ArticleClick() {
  const { id } = useParams(); // Get the article ID from the URL
  const [articleData, setArticleData] = useState({
    title: "Breaking News: Major Event HappensBreaking News: Major Event HappensBreaking News: Major Event HappensBreaking News: Major Event HappensBreaking News: Major Event Happens",
    description: "This is a detailed article about a major event that has occurred recently.This is a detailed article about a major event that has occurred recently.This is a detailed article about a major event that has occurred recently.This is a detailed article about a major event that has occurred recently.This is a detailed article about a major event that has occurred recently.",
    date: "December 5, 2024",
    time: "9:00 AM",
    sourceUrl: "https://www.news-source.com",
    image: "frontend/public/article/article.jpg",
  });

  useEffect(() => {
    // Use the ID to fetch the specific article data, if available
    console.log("Article ID:", id); // You can replace this with an actual fetch call

    // If you were fetching article data from an API or array, you would do it here.
    // Example:
    // const fetchedArticle = allNews[id];
    // setArticleData(fetchedArticle);
  }, [id]);

  return (
    <div className="article-container text-center mt-40  ">
      {/* Media Divisions */}
      <div className="media-columns flex justify-between">
        {/* Left Wing Media */}
        <div className="media-column left w-1/3">
          <div className="media-title text-4xl font-semibold ">Left Wing Media</div>
          <div className="media-content">
            <img src={articleData.image} alt="Article" className="media-image" />
            <h3 className="media-article-title">{articleData.title}</h3>
            <p className="media-article-description">{articleData.description}</p>
            <div className="media-meta">
              <span className="media-source">
                <a href={articleData.sourceUrl} target="_blank" rel="noopener noreferrer">Source</a>
              </span> 
            </div>
          </div>
        </div>

        {/* Independent Media */}
        <div className="media-column middle w-1/3 text-center">
          <div className="media-title text-4xl font-semibold">Independent Media</div>
          <div className="media-content">
            <img src={articleData.image} alt="Article" className="media-image" />
            <h3 className="media-article-title">{articleData.title}</h3>
            <p className="media-article-description">{articleData.description}</p>
            <div className="media-meta">
              <span className="media-source">
                <a href={articleData.sourceUrl} target="_blank" rel="noopener noreferrer">Source</a>
              </span>
            </div>
          </div>
        </div>

        {/* Right Wing Media */}
        <div className="media-column right w-1/3 text-center">
          <div className="media-title text-4xl font-semibold">Right Wing Media</div>
          <div className="media-content">
            <img src={articleData.image} alt="Article" className="media-image" />
            <h3 className="media-article-title">{articleData.title}</h3>
            <p className="media-article-description">{articleData.description}</p>
            <div className="media-meta">
              <span className="media-source">
                <a href={articleData.sourceUrl} target="_blank" rel="noopener noreferrer">Source</a>
              </span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleClick;