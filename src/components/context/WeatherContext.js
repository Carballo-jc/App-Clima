//componente que maneja el estado de la aplicacion
import { createContext, useState, useEffect } from "react";
import { API_KEY, API_WEATHER } from "../../keys";
import { getTempCity, getWeather } from "../../service/service";

export const WeatherContext = createContext();

const WeatherProvider = (props) => {
  const [data, setData] = useState();
  const [day, setDay] = useState();
  console.log(day);
//**se hace la consulta a la api para mostrar la vista al iniciar la aplicacion
  useEffect(() => {
    const getWeather = async () => {
      const API_URL = `${API_WEATHER}argentina,AR&lang=sp&exclude=hourly&appid=${API_KEY}&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();
      setData(data);
      return (data.coord);
    };
    getWeather();
}, []);
 
      
const lat = -34.9214;
const lon = -57.9544;
// const lat = data.coord.lat;
// const lon = data.coord.lon;

//este efecto maneja la carga del pronostico de la semana
useEffect(() => {
const getDataDay = async() => {
const data_day = await getTempCity(lat,lon);
setDay(data_day);
};
getDataDay()
}, [lat,lon]);

//funcion que ejecuta la consulata a la api mediante la busqueda
  const resultDay = async (city, country) => {
    const data = await getWeather(city, country);
    setData(data);
  };
 
  return (
    <WeatherContext.Provider
      value={{
        data,
        day,
        resultDay,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
export default WeatherProvider;
