import {
    WiDaySunny, WiRain, WiCloudy, WiSnow, WiThunderstorm,
    WiFog, WiDayCloudy, WiNightClear, WiHumidity, WiStrongWind,
    WiBarometer, WiSunrise, WiSunset, WiUmbrella
  } from "react-icons/wi";
  import { FiDroplet, FiEye, FiNavigation } from "react-icons/fi";


  const WeatherIcons = {
    clear: WiDaySunny,
    rain: WiRain,
    clouds: WiCloudy,
    snow: WiSnow,
    thunderstorm: WiThunderstorm,
    fog: WiFog,
    mist: WiFog,
    haze: WiFog,
    drizzle: WiRain,
    default: WiDayCloudy
  };

  export const getWeatherIcon = (condition, size = 50, className = "") => {
    const IconComponent = WeatherIcons[condition.toLowerCase()] || WeatherIcons.default;
    return <IconComponent size={size} className={`text-yellow-400 ${className}`} />;
  };

  export const WeatherIconSet = {
    humidity: WiHumidity,
    wind: WiStrongWind,
    pressure: WiBarometer,
    sunrise: WiSunrise,
    sunset: WiSunset,
    precipitation: WiUmbrella,
    visibility: FiEye,
    droplet: FiDroplet,
    navigation: FiNavigation
  };


  export default WeatherIcons;
  