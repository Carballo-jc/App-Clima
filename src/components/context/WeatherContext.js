//componente que maneja el estado de la aplicacion
import { createContext, useState } from "react";
import { getTempCity, getWeather } from "../../service/service";

export const WeatherContext = createContext();

const WeatherProvider = (props) => {
  const [data, setData] = useState();
  const [day, setDay] = useState();

  //**se hace la consulta a la api para mostrar la vista al iniciar la aplicacion

  const lat = -34.6132;
  const lon = -58.3772;
  //  const lat = data.coord.lat;
  //  const lon = data.coord.lon;

  //este efecto maneja la carga del pronostico de la semana

  const getDataDay = async () => {
    const data_day = await getTempCity(lat, lon);
    setDay(data_day);
  };
  //funcion que ejecuta la consulata a la api mediante la busqueda

  const resultDay = async (city, country) => {
    const data = await getWeather(city, country);
    setData(data);
    getTempCity(lat, lon);
    getDataDay();
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
