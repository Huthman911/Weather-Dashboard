import React from "react";
import { getWeatherIcon } from "./WeatherIcons";

const ForecastCard = ({ forecastData }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h3 className="text-xl font-semibold mb-4">7-Day Forecast</h3>

      <p className="text-xs text-gray-500 mb-2 italic text-center md:hidden">
        Swipe left to see more &rarr;
      </p>

      <div className="flex overflow-x-auto gap-4 pb-2 custom-scrollbar">
        {forecastData.list
          .filter((_, index) => index % 8 === 0)
          .slice(0, 7)
          .map((day, index) => {
            const icon = getWeatherIcon(day.weather[0].main);
            return (
              <div
                key={index}
                className="flex-shrink-0 w-28 text-center bg-gray-100 rounded-lg p-3"
              >
                <p className="text-gray-500 text-sm">
                  {new Date(day.dt * 1000).toLocaleDateString([], {
                    weekday: "short",
                  })}
                </p>
                {icon && <div className="text-3xl my-2 text-gray-500">{icon}</div>}
                <p className="font-semibold">{Math.round(day.main.temp)}°</p>
                <p className="text-sm capitalize">{day.weather[0].description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ForecastCard;
