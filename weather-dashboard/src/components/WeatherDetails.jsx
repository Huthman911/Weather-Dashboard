import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import WeatherCard from "./WeatherCard"; 

const WeatherDetails = () => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div>
     
      {weatherData ? <WeatherCard weather={weatherData} /> : <p>Loading weather details...</p>}

      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default WeatherDetails;
