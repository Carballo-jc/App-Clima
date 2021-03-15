//este es el componente del pronostico diario de la semana
import { makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import CardDay from "./CardDay";

const useStyles = makeStyles(() => ({
  content_card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    minWidth: 80,
    overflow: "scroll",
  },
}));

const WeatherDay = () => {
  const classes = useStyles();
  const { day } = useContext(WeatherContext);
  console.log(day);
  return (
    <div className={classes.content_card}>
      {day
        ? day.daily.map((item, index) => {
            return <CardDay item={item} key={index} />;
          })
        : null}
    </div>
  );
};

export default WeatherDay;
