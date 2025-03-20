import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import './App.css'

function App() {
  
  const [weather, setWeather] = useState(null);
 

  const fetchWeather = async (city) => {
    try {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`
      );
      setWeather(response.data);
      console.log("API Response:", response.data); 
    } catch (err) {
      console.log("Error fetching weather data:", err);
      setWeather(null);
    }
  };

  return (
    <>

    
    
<div>
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      <WeatherCard weather={weather} />
    </div>
    </>
  )
}

export default App
