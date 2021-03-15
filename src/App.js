import React, { useContext } from "react";
import Header from "./components/header/Header";
import { Box, Container, Grid} from "@material-ui/core";
import WeatherForm from "./components/weatherform/WeatherForm";
import WeatherDay from "./components/weatherinfoday/WeatherDay";
import { WeatherContext } from "./components/context/WeatherContext";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  tem_day: {
    fontSize: 60,
    color: "white",
    margin: 20,
  },
  content_temp: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
}));

const App = () => {
  const classes = useStyles();
  const { data } = useContext(WeatherContext);

  return (
    <>
      <Container>
        <Header />
        <Grid container>
          <Box className={classes.content_temp}>
            <Grid container>
              <Grid item md={6} xs={12}>
                <WeatherForm />
              </Grid>
              <Grid item md={6} xs={12}>
                {data && (
                  <Box className={classes.tem_day}>
                    <span>{data.main.temp}° Grados</span>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Box>
          <Grid item md={12} xs={12}>
            {data && <WeatherDay />}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
