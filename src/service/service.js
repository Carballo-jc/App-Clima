import { API_KEY, API_WEATHER } from "../keys";

export const getWeather = async (city, country) => {
  const API_URL = `${API_WEATHER}${city},${country}&appid=${API_KEY}&units=metric`;
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};
