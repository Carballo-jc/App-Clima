import React from "react";
import useStyles from "../weatherinfo/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import clouts from "../../assets/images/wb_sunny-24px.svg";

const CardDetail = (data) => {
  console.log(data);
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            <span>Ciudad:{data.data.name}</span>
            <img src={clouts} className={classes.logo_header} alt="clima" />
          </Typography>
          <Typography variant="h6" component="h3">
            <span>Temperatura:{data.data.main.temp}°</span>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <span>Pronostico:{data.data.weather[0].description}</span>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <span>Humedad:{data.data.main.humidity}</span>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardDetail;
