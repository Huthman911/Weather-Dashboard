import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(storedHistory);
  }, []);

  
  const handleCityClick = (city) => {
    navigate(`/weather/${city}`);
    setIsOpen(false); 
  };

  return (
    <div className="relative">
      
      <button
        className="fixed top-5 left-5 z-50 bg-gray-900 text-white p-2 rounded-full shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

     
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-600 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 shadow-lg`}
      >
        <h2 className="text-xl font-semibold p-4 border-b border-gray-600">Weather App</h2>
        <nav className="p-4 space-y-4">
          <Link to="/" className="block hover:bg-gray-700 p-2 rounded-md"> Home</Link>
          <Link to="/forecast" className="block hover:bg-gray-700 p-2 rounded-md"> Forecast</Link>
          <Link to="/settings" className="block hover:bg-gray-700 p-2 rounded-md"> Settings</Link>
          <Link to="/about" className="block hover:bg-gray-700 p-2 rounded-md"> About</Link>
        </nav>

        
        <div className="p-4 border-t border-gray-600">
          <h3 className="text-lg font-semibold mb-2">Search History</h3>
          {searchHistory.length > 0 ? (
            <ul className="space-y-2">
              {searchHistory.map((city, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-blue-300"
                  onClick={() => handleCityClick(city)}
                >
                   {city}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No recent searches</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
