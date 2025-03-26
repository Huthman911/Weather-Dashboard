import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import WeatherCard from "./WeatherCard"; 
import ErrorMessage from "./ErrorMessage";

const randomCities = ["London", "New York", "Paris", "Tokyo", "Dubai"];

const LandingPage = () => {
  const [randomWeather, setRandomWeather] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      setError("City name cannot be empty");
     return;
    }
    setError(null);
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

      <ErrorMessage error={error} />
      
      {randomWeather && <WeatherCard weather={randomWeather} />}
    </div>
  );
};

export default LandingPage;
