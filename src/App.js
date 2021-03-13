import React from "react";
import Header from "./components/header/Header";

import WeatherForm from "./components/weatherform/WeatherForm";
import WeatherInfo from "./components/weatherinfo/WeatherInfo";
import { getWeather } from "./service/service";


const App = () => {

  const [state, setState] = React.useState('');

  const result = async(city,country) =>{
   const data = await getWeather(city,country);
   setState(data)
  }

  return (
    <div className="container p-4">
      <Header />
      <div className="row">
        <div className="col-md-6 mx-auto mt-4">
          <WeatherForm result={result} />
          <WeatherInfo state={state} />
        </div>
      </div>
    </div>
  );
};

export default App;
