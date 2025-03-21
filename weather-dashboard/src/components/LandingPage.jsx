import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import WeatherCard from "./WeatherCard"; 

const randomCities = ["London", "New York", "Paris", "Tokyo", "Dubai"];

const LandingPage = () => {
  const [randomWeather, setRandomWeather] = useState(null);
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRandomWeather = async () => {
      try {
        const randomCity = randomCities[Math.floor(Math.random() * randomCities.length)];
        const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${randomCity}&units=metric&appid=${API_KEY}`
        );
        setRandomWeather(response.data);
      } catch (error) {
        console.error("Error fetching random city weather:", error);
      }
    };

    fetchRandomWeather();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    navigate(`/weather/${city}`); 
  };

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      
      {randomWeather && <WeatherCard weather={randomWeather} />}
    </div>
  );
};

export default LandingPage;
