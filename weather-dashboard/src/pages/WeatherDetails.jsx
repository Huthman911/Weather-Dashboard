import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import WeatherCard from "../components/WeatherCard";
import ErrorMessage  from "../components/ErrorMessage"; 
import MenuBar from "../components/MenuBar";
import ForecastCard from "../components/ForecastCard";


const WeatherDetails = () => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
        const currentResponse= await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        setWeatherData(currentResponse.data);

        // Fetch 7-day forecast
       
        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );

        setForecastData(forecastResponse.data);
        
      } catch (error) {
        setError(`Failed to fetch weather data for ${city}. Please try again.`);
      } finally {
        setLoading(false);

      }
    };

    fetchWeather();
  }, [city]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Loading weather details...</p>
      </div>
    );
  }


  return (
    <div className="container mx-auto px-20 py-20">
      
      
            
              <MenuBar
              />
            
      
      <ErrorMessage error={error} />

      {weatherData && (
        <div className="space-y-6">
          
          <WeatherCard weather={weatherData} />
          
          {forecastData && <ForecastCard forecastData={forecastData} />}

          
        </div>
      )}


<button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 text-white bg-gray-700 hover:bg-gray-800 rounded-lg transition duration-200"
      >
        Back
      </button>

     
      
      
    </div>
  );
};

export default WeatherDetails;
