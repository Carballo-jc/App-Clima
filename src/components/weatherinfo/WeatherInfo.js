import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";
import useStyles from './styles'
import {API_KEY} from '../../keys'


const WeatherInfo = ({state}) => {
    console.log(state)
    const getTempCity = async() =>{
      const api_city = `https://api.openweathermap.org/data/2.5/onecall?lat=-34.61315&lon=-58.37723&lang=sp&exclude=hourly&appid=${API_KEY}`;
      const response = await fetch(api_city);
      const data_city = await response.json()
      console.log(data_city)
    }
const classes = useStyles();
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
          >
            <span>Ciudad:{state.name}</span>
          </Typography>
          <Typography variant="h6" component="h3">
            <span>Temperatura:{state.main.temp}°</span>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <span>Pronostico:{state.weather[0].description}</span>
          </Typography>
          <Typography className={classes.pos} color="textSecondary" >
            <span>Humedad:{state.main.humidity}</span>
          </Typography>
          
        </CardContent>
        <button onClick={() => getTempCity()}>consultar pronostico</button>
      </Card>
    );
}

export default WeatherInfo;