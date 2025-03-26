import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import ErrorMessage  from "./ErrorMessage"; 

const WeatherDetails = () => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setError(null);
        const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        setWeatherData(response.data);
      } catch (error) {
        setError(`Failed to fetch weather data for ${city}. Please try again.`);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div>
      <ErrorMessage error={error} />
     
      {weatherData ? <WeatherCard weather={weatherData} /> : <p>Loading weather details...</p>}

      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default WeatherDetails;
