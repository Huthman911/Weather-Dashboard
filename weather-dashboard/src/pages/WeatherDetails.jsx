import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import WeatherCard from "../components/WeatherCard";
import ErrorMessage  from "../components/ErrorMessage"; 
import MenuBar from "../components/MenuBar";

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
          
          {/* 7-day forecast section */}
          {forecastData && (
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
              <h3 className="text-xl font-semibold mb-4">7-Day Forecast</h3>
              <div className=" rounded-xl border border-white-200 grid grid-cols-3 md:grid-cols-7 gap-4">
                {forecastData.list.filter((_, index) => index % 8 === 0).slice(0, 7).map((day, index) => (
                  <div key={index} className="text-center">
                    <p className="text-gray-500">
                      {new Date(day.dt * 1000).toLocaleDateString([], { weekday: 'short' })}
                    </p>
                    <p className="font-semibold">{Math.round(day.main.temp)}°</p>
                    <p className="text-sm capitalize">{day.weather[0].description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
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
