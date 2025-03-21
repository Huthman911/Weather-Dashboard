import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div style={styles.card}>
      <h2>{weather.name}</h2>
      <p>🌡 Temperature: {weather.main.temp}°C</p>
      <p>🌬 Wind Speed: {weather.wind.speed} km/h</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌥 Condition: {weather.weather[0].description}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "250px",
    margin: "20px auto",
  },
};

export default WeatherCard;
