import {useState,useEffect} from "react";
import { API_KEY,API_WEATHER } from "../../keys";
import CardDetail from "../card/CardDetail";

const WeatherInfo = ({ state }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const getWeather = async () => {
      const API_URL = `${API_WEATHER}argentina,AR&lang=sp&exclude=hourly&appid=${API_KEY}&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();
      setData(data)
      return data;
    };
    getWeather()
  }, []);
  
  // const lat = state.coord.lat;
  // const lon = state.coord.lon;
  // const getTempCity = async (lat,lon) => {
  //   const api_city = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=sp&appid=${API_KEY}`;
  //   const response = await fetch(api_city);
  //   const data_city = await response.json();
  //   setDay(data_city)
  // };

  return (
   <div>
     {
       data && <CardDetail data={data} /> 
     }
   </div>
  );
};

export default WeatherInfo;
