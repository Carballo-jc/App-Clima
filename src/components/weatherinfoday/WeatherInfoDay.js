import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const WeatherInfoDay = () => {
  const { day } = useContext(WeatherContext);
  console.log(day);
  return <div></div>;
};

export default WeatherInfoDay;
