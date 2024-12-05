import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import App from './App'; // Your main component
import ArticleClick from './ArticleClick'; // Import ArticleClick component




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />  {/* Route for the main page */}
      <Route path="/articleclick/:id" element={<ArticleClick />} />  {/* Route for ArticleClick */}

    </Routes>
  </BrowserRouter>
);