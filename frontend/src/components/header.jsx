import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <header className=" relative fixed -top-10  left-0 w-full font-extrabold z-50 bg-[#e2d9c7]">
      <nav className="container mx-auto flex flex-col items-center">

        {/* Title */}
        <div className="flex justify-center cursor-default items-center" style={{ fontSize: '11dvw' }}>
          <h1 className="text-black font-extrabold">TRUTH</h1>
          <div className="relative mx-2 w-24 h-24">
            <img
              src="https://static.tildacdn.net/tild3934-3066-4931-a333-643635303532/GERB.svg"
              alt="Logo"
              className="w-full h-full object-contain"
            />
            <span
              className="absolute inset-0 flex justify-center items-center text-black font-extrabold"
              style={{ fontSize: '2dvw' }}
            >
              TD
            </span>
          </div>
          <h1 className="text-black font-extrabold">DAILY</h1>
        </div>

        {/* Line below the title */}
        <div className="w-[110%] border-b-2 border-black -mt-10 mb-2"></div>

        {/* Navigation and Search */}
        <div className="flex justify-center items-center w-[98%]">
          <ul className="flex text-xl cursor-default font-thin space-x-20">
            {['SPORTS', 'POLITICAL', 'HEALTH', 'ECONOMY'].map((item, index) => (
              <li key={index} className="relative group">
                <span className="">{item}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-200  "></div>
              </li>
            ))}
          </ul>

          {/* Search Section */}
          <div className="relative flex items-center">
            <FiSearch
              className="text-black ml-24 text-2xl cursor-pointer hover:text-gray-500"
              onClick={toggleSearch}
            />
            {showSearch && (
              <input
                type="text"
                className="absolute right-20 top-0 transform translate-x-[136%] border-2 border-black rounded text-black bg-inherit w-64 text-center placeholder:text-right focus:outline-0"
                style={{ fontFamily: 'inherit' }}
              />
            )}
          </div>
        </div>

        {/* Line below the navigation */}
        <div className="w-[110%] border-t-2 border-black mt-2"></div>
      </nav>
    </header>
  );
};

export default Header;