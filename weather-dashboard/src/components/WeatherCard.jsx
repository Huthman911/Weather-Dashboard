import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 text-center w-full max-w-sm text-gray-900">
            <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{weather.name}</h2>
        
      </div>

      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-5xl font-bold">{Math.round(weather.main.temp)}°C</p>
          <p className="text-gray-500">Feels like: {Math.round(weather.main.feels_like)}°C</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold capitalize">{weather.weather[0].description}</p>
          <p className="text-gray-500">{weather.main.humidity}% Humidity</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-gray-500">Sunrise</p>
          <p>{formatTime(weather.sys.sunrise)}</p>
        </div>
        <div>
          <p className="text-gray-500">Sunset</p>
          <p>{formatTime(weather.sys.sunset)}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-gray-500">Wind Speed</p>
          <p>{weather.wind.speed} km/h</p>
        </div>
        <div>
          <p className="text-gray-500">Pressure</p>
          <p>{weather.main.pressure} hPa</p>
        </div>
        <div>
          <p className="text-gray-500">Visibility</p>
          <p>{(weather.visibility / 1000).toFixed(1)} km</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
