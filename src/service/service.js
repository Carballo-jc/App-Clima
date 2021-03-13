import { API_KEY, API_WEATHER } from "../keys";

export const getWeather = async (city, country) => {
 const api_day = `https://api.openweathermap.org/data/2.5/onecall?lat=${city}&lon=${country}&lang=sp&exclude=hourly&appid=3f1e2d5bbaefe7a57fd8b736c3d91e95`;
 const API_URL = `${API_WEATHER}${city},${country}&lang=sp&exclude=hourly&appid=${API_KEY}&units=metric`;
 const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};
