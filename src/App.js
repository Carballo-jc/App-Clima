import React from "react";
import Header from "./components/header/Header";
import { Container, Grid } from "@material-ui/core";
import WeatherForm from "./components/weatherform/WeatherForm";
import WeatherInfo from "./components/weatherinfo/WeatherInfo";
import { getWeather } from "./service/service";

const App = () => {
  const [state, setState] = React.useState("");

  const result = async (city, country) => {
    const data = await getWeather(city, country);
    setState(data);
  };

  return (
    <>
    <Container maxWidth='md'>
    <Header />
      <Grid container direction='column' >
        <Grid item md={6} xs={12}>
          <WeatherForm result={result} />
        </Grid>
        <Grid item md={6} xs={12}>
          {state ?
        <WeatherInfo state={state} />
        : null  
        }
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default App;
