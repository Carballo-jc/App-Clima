import React from "react";
import Header from "./components/header/Header";
import { Container, Grid } from "@material-ui/core";
import WeatherForm from "./components/weatherform/WeatherForm";
import WeatherInfoDay from "./components/weatherinfoday/WeatherInfoDay";

const App = () => {
  return (
    <>
      <Container maxWidth="md">
        <Header />
        <Grid container direction="column">
          <Grid item md={6} xs={12}>
            <WeatherForm />
          </Grid>
          <Grid item md={6} xs={12}>
              <WeatherInfoDay />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
