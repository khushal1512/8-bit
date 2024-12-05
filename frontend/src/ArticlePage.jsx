import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams hook for getting URL params
import axios from 'axios';

const ArticlePage = () => {
  const { url } = useParams(); // Get the article URL parameter from the route
  const [articleContent, setArticleContent] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticleContent = async (url) => {
    try {
      const response = await axios.get('https://api.diffbot.com/v3/article', {
        params: {
          token: 'c175fe76f8fc5e21094986f9a67e1c1e', // Replace with your Diffbot API key
          url: decodeURIComponent(url), // Decode the URL
        },
      });

      // Extract the article content and images
      if (response.data && response.data.objects && response.data.objects.length > 0) {
        const articleText = response.data.objects[0].text;
        const articleImages = response.data.objects[0].images || []; // Extract images if available
        setArticleContent(articleText);
        setImages(articleImages);
      } else {
        setArticleContent('No content found for this article.');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching article content:', error);
      setArticleContent('Failed to load article.');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      fetchArticleContent(url); // Fetch article content when URL changes
    } else {
      setArticleContent('Invalid URL.');
      setLoading(false);
    }
  }, [url]);

  return (
    <div>
      <h1>Full Article</h1>
      {loading ? (
        <p>Loading article...</p>
      ) : (
        <div>
          <div dangerouslySetInnerHTML={{ __html: articleContent }} />
          {images.length > 0 && (
            <div>
              <h3>Images:</h3>
              {images.map((image, index) => (
                <img key={index} src={image.url} alt={`Article image ${index + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
