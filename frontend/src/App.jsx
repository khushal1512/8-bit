import { useState, useEffect } from 'react';
import './App.css';
import './global.css';
import Header from './components/Header'; // Ensure the path to Header is correct
import { Link } from 'react-router-dom'; // Import Link from React Router

function App() {
  const [selectedCategory, setSelectedCategory] = useState('LATEST'); // Default category
  const [news, setNews] = useState([]); // Stores news articles

  // Sample news data with recent US and India news
  const allNews = [
    {
      category: 'LATEST',
      title: 'US Congress Passes $1.9 Trillion Economic Relief Bill',
      description: 'The US Congress has passed a $1.9 trillion relief bill aimed at providing economic support to citizens and businesses affected by the COVID-19 pandemic.',
      date: '2024-12-01',
      time: '10:00 AM',
      image: '/article/us_relief_bill.jpg',
    },
    {
      category: 'LATEST',
      title: 'India Faces Severe Air Pollution Crisis in Delhi',
      description: 'Delhi’s air quality continues to deteriorate as residents face a toxic mix of pollution, leading to health concerns across the city.',
      date: '2024-12-05',
      time: '9:30 AM',
      image: '/article/india_air_pollution.jpg',
    },
    {
      category: 'LATEST',
      title: 'US Launches New Space Mission to Explore Mars',
      description: 'NASA has launched a new mission to explore Mars, aiming to gather data that will help understand the planet’s potential for supporting human life.',
      date: '2024-12-03',
      time: '12:00 PM',
      image: '/article/us_mars_mission.jpg',
    },
    {
      category: 'LATEST',
      title: 'India’s GDP Growth Accelerates to 6.5% in Q3 2024',
      description: 'India’s GDP growth for the third quarter of 2024 has accelerated to 6.5%, signaling a strong recovery post-pandemic.',
      date: '2024-12-04',
      time: '2:00 PM',
      image: '/article/india_gdp_growth.jpg',
    },
    {
      category: 'SPORTS',
      title: 'US Wins Gold in Women’s Basketball at Paris Olympics',
      description: 'The US women’s basketball team has clinched the gold medal at the Paris 2024 Olympics, defeating Spain in the finals.',
      date: '2024-12-02',
      time: '8:00 AM',
      image: '/article/us_womens_basketball.jpg',
    },
    {
      category: 'SPORTS',
      title: 'Virat Kohli Becomes the Highest Run Scorer in T20 World Cups',
      description: 'India’s cricket star, Virat Kohli, has set a new record as the highest run scorer in T20 World Cup history.',
      date: '2024-12-01',
      time: '11:30 AM',
      image: '/article/india_virat_kohli.jpg',
    },
    {
      category: 'POLITICAL',
      title: 'US President Faces Impeachment Proceedings Over Scandals',
      description: 'Amid growing scandals, US President faces impeachment proceedings in Congress over alleged misuse of power and corruption.',
      date: '2024-11-29',
      time: '4:00 PM',
      image: '/article/us_impeachment.jpg',
    },
    {
      category: 'POLITICAL',
      title: 'India’s Parliament Passes Controversial Farm Laws',
      description: 'The Indian Parliament has passed new farm laws, sparking protests among farmers who argue these laws will harm their livelihoods.',
      date: '2024-11-28',
      time: '3:00 PM',
      image: '/article/india_farm_laws.jpg',
    },
    {
      category: 'HEALTH',
      title: 'US Battles Surge in Flu Cases as Winter Approaches',
      description: 'Health experts in the US are warning of a potential flu surge this winter, urging citizens to get vaccinated as cases rise.',
      date: '2024-12-01',
      time: '5:00 PM',
      image: '/article/us_flu_cases.jpg',
    },
    {
      category: 'HEALTH',
      title: 'India Introduces New Guidelines to Combat COVID-19 Third Wave',
      description: 'The Indian government has introduced new guidelines to address the potential third wave of COVID-19, focusing on vaccinations and containment measures.',
      date: '2024-11-30',
      time: '6:00 PM',
      image: '/article/india_covid_guidelines.jpg',
    },
    {
      category: 'ECONOMY',
      title: 'US Federal Reserve Raises Interest Rates to Tackle Inflation',
      description: 'In a move to curb inflation, the US Federal Reserve has raised interest rates for the second time this year, signaling its commitment to controlling prices.',
      date: '2024-12-02',
      time: '7:00 AM',
      image: '/article/us_interest_rates.jpg',
    },
    {
      category: 'ECONOMY',
      title: 'India’s Stock Market Hits Record High Amid Economic Optimism',
      description: 'India’s stock market has reached a record high, driven by investor optimism following strong GDP growth and robust corporate earnings.',
      date: '2024-12-04',
      time: '9:00 AM',
      image: '/article/india_stock_market.jpg',
    },
  ];

  // Filter news based on selected category
  useEffect(() => {
    if (selectedCategory) {
      const filteredNews = allNews.filter((news) => news.category === selectedCategory);
      setNews(filteredNews);
    }
  }, [selectedCategory]);

  // Show "Go to Top" button on scroll
  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById('goToTop');
      if (window.scrollY > 100) {
        button.classList.add('show');
      } else {
        button.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Header Component */}
      <Header onCategoryChange={setSelectedCategory} activeCategory={selectedCategory} />

      {/* Selected Category Title */}
      <div className="category-title text-center text-6xl font-bold mt-5">
        {`${selectedCategory} NEWS`}
      </div>

      {/* News Articles */}
      <div className="news-container mt-5">
        {news.map((article, index) => (
          <div
            key={index}
            className="article-container border-2 mt-10 border-black flex container mx-auto"
          >
            {/* Link to navigate to the ArticleClick page */}
            <Link
              to={`/articleclick/${index}`}
              state={{ article }} // Pass the article data as state
              className="flex"
            >
              <div className="article-image">
                <img
                  src={article.image}
                  alt={article.title}
                  className="article-img"
                />
              </div>

              <div className="article-info flex-1 p-4">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-description">{article.description}</p>
                <div className="article-meta">
                  <span className="article-date">{article.date}</span>
                  <br />
                  <span className="article-time">{article.time}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Go to Top Button */}
      <button id="goToTop" onClick={scrollToTop} className="go-to-top-btn">
        ↑
      </button>
    </div>
  );
}

export default App;