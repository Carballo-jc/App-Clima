import { useContext } from "react";
import CardDetail from "./CardDetail";
import { WeatherContext } from "../context/WeatherContext";

const WeatherInfo = () => {
  const {data } = useContext(WeatherContext)


  return (
   <div>
     {
       data && <CardDetail  /> 
     }
   </div>
  );
};

export default WeatherInfo;
