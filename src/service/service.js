//servicios de las consulas de la api
import { API_KEY, API_WEATHER, API_WEATHER_DAY } from "../keys";
//funcion que consulat la api por los campos seleccionados en los inputs
export const getWeather = async (city, country) => {
  const API_URL = `${API_WEATHER}${city},${country}&lang=sp&exclude=hourly&appid=${API_KEY}&units=metric`;
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data);
  return data;
};

//funcion que realiza la consulta del pronostico semanals
export const getTempCity = async (lat, lon) => {
  const api_city = `${API_WEATHER_DAY}&lat=${lat}&lon=${lon}&lang=sp&exclude=hourly&appid=${API_KEY}&units=metric`;
  const response = await fetch(api_city);
  const data_city = await response.json();
  return data_city;
};
