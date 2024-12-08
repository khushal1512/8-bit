import React from 'react';
import { useNavigate } from 'react-router-dom';

const Headlines = ({ articles }) => {
  const navigate = useNavigate();

  const handleHeadlineClick = (url) => {
    navigate(`/newarticleclick?url=${encodeURIComponent(url)}`);
  };

  return (
    <div>
      {articles.map((article, index) => (
        <div key={index} className="headline" onClick={() => handleHeadlineClick(article.url)}>
          <h2>{article.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Headlines;