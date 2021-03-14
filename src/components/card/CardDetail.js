import React, { useContext } from "react";
import useStyles from "../weatherinfo/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import clouts from "../../assets/images/wb_sunny-24px.svg";
import { WeatherContext } from "../context/WeatherContext";

const CardDetail = () => {
  const classes = useStyles();
  
  const {data} = useContext(WeatherContext)
  const {name,main,weather}=data;
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            <span>Ciudad:{name}</span>
            <img src={clouts} className={classes.logo_header} alt="clima" />
          </Typography>
          <Typography variant="h6" component="h3">
            <span>Temperatura:{main.temp}°</span>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <span>Pronostico:{weather[0].description}</span>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <span>Humedad:{main.humidity}</span>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardDetail;
