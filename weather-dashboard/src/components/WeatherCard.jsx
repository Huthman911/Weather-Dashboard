import React from "react";
import { getWeatherIcon, WeatherIconSet } from "./WeatherIcons";


const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className=" bg-white shadow-md rounded-xl p-6 text-center w-full max-w-2xl mx-auto text-gray-900">
            <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{weather.name}</h2>
        
      </div>

      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-5xl font-bold">{Math.round(weather.main.temp)}°C</p>
          <p className="text-gray-500">Feels like: {Math.round(weather.main.feels_like)}°C</p>
        </div>
        <div className="text-center">
  {getWeatherIcon(weather.weather[0].main, 48, "mx-auto mb-2")}
  <p className="text-xl font-semibold capitalize">{weather.weather[0].description}</p>
  <p className="text-gray-500">{weather.main.humidity}% Humidity</p>
</div>

      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
  <div className="text-center">
    <WeatherIconSet.sunrise className="mx-auto text-2xl text-orange-400" />
    <p className="text-gray-500">Sunrise</p>
    <p>{formatTime(weather.sys.sunrise)}</p>
  </div>
  <div className="text-center">
    <WeatherIconSet.sunset className="mx-auto text-2xl text-pink-500" />
    <p className="text-gray-500">Sunset</p>
    <p>{formatTime(weather.sys.sunset)}</p>
  </div>
</div>


      <div className="grid grid-cols-3 gap-4">
  <div className="text-center">
    <WeatherIconSet.wind className="mx-auto text-2xl text-blue-500" />
    <p className="text-gray-500">Wind</p>
    <p>{weather.wind.speed} km/h</p>
  </div>
  <div className="text-center">
    <WeatherIconSet.pressure className="mx-auto text-2xl text-red-400" />
    <p className="text-gray-500">Pressure</p>
    <p>{weather.main.pressure} hPa</p>
  </div>
  <div className="text-center">
    <WeatherIconSet.visibility className="mx-auto text-2xl text-green-500" />
    <p className="text-gray-500">Visibility</p>
    <p>{(weather.visibility / 1000).toFixed(1)} km</p>
  </div>
</div>

    </div>
  );
};

export default WeatherCard;
