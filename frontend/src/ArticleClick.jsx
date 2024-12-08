import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // useNavigate for navigation
import Header from './components/Header'; // Import the Header component

function ArticleClick() {
  const { id } = useParams(); // Get the article ID from the URL
  const navigate = useNavigate(); // For navigation

  // Update the state to hold 5 different articles
  const [articles, setArticles] = useState([
    {
      title: "Historic Victory: Biden's $1.9 Trillion American Rescue Plan Aims to Lift Millions Out of Poverty and Revitalize Economy",
      description: "December 5, 2024, President Joe Biden signed the $1.9 trillion American Rescue Plan Act into law, a landmark piece of legislation aimed at providing comprehensive relief to Americans grappling with the economic fallout of the COVID-19 pandemic. This sweeping package includes direct payments of $1,400 to individuals earning up to $75,000 annually, which many Democrats argue will provide essential financial support to families struggling to make ends meet. In addition to direct payments, the plan extends enhanced unemployment benefits of $300 per week through September 2021 and allocates significant funding for COVID-19 testing and vaccination efforts. Democratic leaders hailed the passage of the bill as a historic moment that underscores their commitment to addressing inequality and supporting working families. House Speaker Nancy Pelosi stated that this legislation would make a difference for millions of Americans,emphasizing its focus on lower- and middle-income households. The plan also includes provisions for child tax credits that could lift millions of children out of poverty, as well as funding for schools to safely reopen and support for small businesses affected by the pandemic.Progressives view this legislation as a crucial step toward a broader agenda of social safety net expansion, arguing that it reflects a shift in the national conversation about the role of government in providing economic support. Many see it as an opportunity to lay the groundwork for future reforms in areas like healthcare and education. Polls conducted around the time of the bill's passage indicated that approximately 70% of Americans supported the relief package, showcasing widespread public approval for its goals.",
      date: "December 5, 2024",
      time: "9:00 AM",
      sourceUrl: "https://www.cnn.com",
      image: "/article/biden.png", // Example image
    },
    {
      title: "Centrist Concerns Over $1.9 Trillion Relief Bill Highlight Need for Targeted Economic Support",
      description: "Centrists have taken a more nuanced approach regarding the American Rescue Plan, recognizing both the necessity for immediate economic relief and the potential long-term implications of such extensive spending. While there is acknowledgment that many Americans are in dire need of financial assistance due to job losses and business closures caused by the pandemic, centrists often express caution about how this level of spending might affect national debt and inflation in the future.Polling data around this time revealed that while a majority of Americans supported direct payments and unemployment benefits, there was also concern about ensuring accountability in how relief funds are utilized. Centrists advocate for a balanced approach that targets assistance effectively without creating long-term fiscal burdens. They emphasize that any relief measures should be carefully designed to reach those most affected by the pandemic while avoiding wasteful expenditures.Furthermore, centrist lawmakers have called for bipartisan cooperation in crafting future legislation aimed at economic recovery. They argue that addressing systemic issues such as healthcare costs and education funding should be part of a broader discussion on recovery strategies rather than solely relying on large-scale spending bills. This perspective reflects an understanding that while immediate relief is critical, sustainable economic growth requires thoughtful policy-making that considers both short-term needs and long-term consequences.",
      date: "December 4, 2024",
      time: "3:00 PM",
      sourceUrl: "https://www.tech-source.com",
      image: "/article/usa.jpg",
    },
    {
      title: "Republicans Slam $1.9 Trillion American Rescue Plan as a 'Bloated' Wish List of Left-Wing Priorities",
      description: "In stark contrast, Republican lawmakers expressed strong opposition to the American Rescue Plan, labeling it a bloated spending bill that prioritizes progressive policy initiatives over fiscal responsibility. GOP leaders argued that while some level of economic assistance is necessary, the scale of this package is excessive and not aligned with current economic realities. They pointed out that many states are experiencing economic recovery and that unemployment rates have begun to decline, questioning the need for such extensive federal intervention.Critics within the Republican Party have highlighted specific provisions in the bill that they believe divert funds away from immediate relief efforts. For instance, they criticized allocations for expanded health insurance subsidies under the Affordable Care Act as unnecessary expenditures that do not directly address pandemic-related hardships. Additionally, some Republicans expressed concern that extended unemployment benefits might discourage individuals from returning to work, potentially slowing down economic recovery.Senate Minority Leader Mitch McConnell referred to the bill as a liberal wish list, arguing that it contains numerous items unrelated to COVID-19 relief. He emphasized that lawmakers should focus on targeted assistance rather than broad spending measures that could lead to increased national debt and inflation. The GOP's stance reflects a commitment to limited government intervention and fiscal conservatism, advocating for policies that they believe will foster long-term economic growth without over-reliance on government aid.",
      date: "December 3, 2024",
      time: "12:00 PM",
      sourceUrl: "https://www.foxnews.com",
      image: "/article/Ttrump4.jpg",
    },
    {
      title: "Sports Highlights: Big Win",
      description: "The latest sports highlight, featuring a major victory in a championship.",
      date: "December 2, 2024",
      time: "6:00 PM",
      sourceUrl: "https://www.sports-source.com",
      image: "/article/article4.jpg",
    },
    {
      title: "Global Politics: Key Issues Today",
      description: "A deep dive into global political issues and the latest developments.",
      date: "December 1, 2024",
      time: "10:00 AM",
      sourceUrl: "https://www.politics-source.com",
      image: "/article/article5.jpg",
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
            <img src={articles[0].image} alt="Article" className="justify-center media-image mb-4" />
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
            <img src={articles[1].image} alt="Article" className="justify-center media-image mb-4" />
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
            <img src={articles[2].image} alt="Article" className="justify-center media-image mb-4" />
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

      {/* Media Details Modal (only shows when media is selected) */}
      {selectedMedia && (
        <div className="media-details fixed top-20 left-1/2 transform -translate-x-1/2 bg-white p-8 z-20 max-h-[80vh] overflow-y-auto">
          <h3 className="text-3xl font-semibold mb-4">{articles[0].title}</h3>
          <p className="text-xl ">{articles[0].description}</p>
          <h2 className='text-2xl font-bold underline mb-0 text-red-600'>MisMatch: </h2>
            <p> L -> M : The left advocates for extensive government intervention, while the middle calls for targeted assistance and fiscal caution.
            <br/> L -> R : The right views extensive government spending as excessive and unnecessary, while the left sees it as essential for supporting struggling families.
            </p>
            
        </div>
      )}
    </div>
  );
}

export default ArticleClick;