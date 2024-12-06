import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'; // Main component
import ArticleClick from './ArticleClick'; // Adjust path if needed
import NewArticleClick from './NewArticleClick'; // Adjust path if needed
import SearchPage from './searchf'; // Adjust path if needed
import ArticlePage from './ArticlePage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Route for the main page */}
        <Route path="/" element={<App />} />
        
        {/* Route for ArticleClick */}
        <Route path="/articleclick/:id" element={<ArticleClick />} />
        
        {/* Route for NewArticleClick */}
        <Route path="/newarticleclick" element={<NewArticleClick />} />
        
        {/* Route for the search page */}
        <Route path="/search" element={<SearchPage />} />
        <Route path="/article" element={<ArticlePage />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);