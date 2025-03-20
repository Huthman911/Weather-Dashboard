const WeatherCard = ({ weather }) => {
    if (!weather) return null;
  
    return (
      <div>
        <h2>{weather.name}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p>{weather.weather[0].description}</p>
        <p>Temperature: {weather.main.temp}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind Speed: {weather.wind.speed} km/h</p>
      </div>
    );
  };
  
  export default WeatherCard;
  