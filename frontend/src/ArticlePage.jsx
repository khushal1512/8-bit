import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';

const ArticlePage = () => {
  const location = useLocation();
  const { article } = location.state || {};

  if (!article) {
    return <p>No article selected.</p>;
  }

  return (
    <div className="article-page">
      <Header />
      <div className="article-content max-w-3xl mx-auto p-6">
        <h1 className="article-title text-4xl font-bold mb-4">{article.title}</h1>
        {article.images?.length > 0 && (
          <img
            src={article.images[0].url}
            alt="Article"
            className="article-image w-full h-auto rounded-lg mb-4"
          />
        )}
        <p className="article-description text-lg leading-7 mb-4">{article.text || article.description}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="article-link text-blue-500 underline mt-4 block"
        >
          Read Full Article
        </a>
      </div>
    </div>
  );
};

export default ArticlePage;