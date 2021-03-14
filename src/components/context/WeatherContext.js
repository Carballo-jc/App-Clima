import { createContext, useState, useEffect } from "react";
import { API_KEY, API_WEATHER } from "../../keys";
import { getWeather } from "../../service/service";

export const WeatherContext = createContext();

const WeatherProvider = (props) => {
  const [data, setData] = useState();
  const [day, setDay] = useState("");

  const resultDay = async (city, country) => {
    const data = await getWeather(city, country);
    setData(data);
  };

  const getTempCity = async () => {
    const api_city = `https://api.openweathermap.org/data/2.5/forecast?lat=-34&lon=-64&lang=sp&appid=${API_KEY}`;
    const response = await fetch(api_city);
    const data_city = await response.json();
    setDay(data_city);
  };

  useEffect(() => {
    const getWeather = async () => {
      const API_URL = `${API_WEATHER}argentina,AR&lang=sp&exclude=hourly&appid=${API_KEY}&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();
      setData(data);
      return data;
    };
    getWeather();
  }, []);
  return (
    <WeatherContext.Provider
      value={{
        data,
        day,
        resultDay,
        getTempCity,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
export default WeatherProvider;
