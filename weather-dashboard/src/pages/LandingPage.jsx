import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import WeatherCard from "../components/WeatherCard"; 
import ErrorMessage from "../components/ErrorMessage";
import CityTimeDisplay from "../components/CityTimeDisplay";
import MenuBar from "../components/MenuBar";


const randomCities = ["London", "New York", "Paris", "Tokyo", "Dubai"];

const LandingPage = () => {
  const [randomWeather, setRandomWeather] = useState(null);
  const [city, setCity] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [error, setError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRandomWeather = async () => {

      try {
        setError(null);
        const randomCity = randomCities[Math.floor(Math.random() * randomCities.length)];
        const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${randomCity}&units=metric&appid=${API_KEY}`
        );
        setRandomWeather(response.data);
      } catch (error) {
        setError("Failed to load weather data. Please try again.");
      
      }
    };

    fetchRandomWeather();
  }, []);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(storedHistory);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      setError("City name cannot be empty");
     return;
    }

    const updatedHistory = [...new Set([city, ...searchHistory])].slice(0, 5); 
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));

    setError(null);
    navigate(`/weather/${city}`); 
  };

  const handleHistoryClick = (city) => {
    setCity(city);
    navigate(`/weather/${city}`);
  };

  return (
    <div className="container mx-auto px-4 sm:px-20 py-20 lg:px-9">

     
        <MenuBar 
          
        />
     

      <h1 className="text-3xl font-bold text-center mb-5  text-gray-800">Weather Dashboard</h1>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-2">
      <div className="flex">
        <input
          type="text" 
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)} className="w-full p-3 text-lg border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-gray-500 mb-7"
        />
        
        </div>

        <button type="submit" className="py-3 px-5 bg-black text-white rounded-xl hover:bg-gray-900 transition duration-200">Search</button>

      </form>
      <h3 classname="text-3xl font-semibold mb-4 text-gray-700">Get real-time weather updates for your favorite city.</h3>

      <ErrorMessage error={error} />
      
      {randomWeather && (
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Random City Weather</h2>
          <CityTimeDisplay cityName={randomWeather.name} />
 <WeatherCard weather={randomWeather} />
 </div>
 
 )}
    </div>
  );
};

export default LandingPage;
