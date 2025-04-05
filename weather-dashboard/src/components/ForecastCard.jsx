import React from "react";

const ForecastCard = ({ forecastData }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h3 className="text-xl font-semibold mb-4">7-Day Forecast</h3>
      <div className="rounded-xl border border-white-200 grid grid-cols-3 md:grid-cols-7 gap-4">
        {forecastData.list
          .filter((_, index) => index % 8 === 0)
          .slice(0, 7)
          .map((day, index) => (
            <div key={index} className="text-center">
              <p className="text-gray-500">
                {new Date(day.dt * 1000).toLocaleDateString([], {
                  weekday: "short",
                })}
              </p>
              <p className="font-semibold">{Math.round(day.main.temp)}°</p>
              <p className="text-sm capitalize">{day.weather[0].description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ForecastCard;
