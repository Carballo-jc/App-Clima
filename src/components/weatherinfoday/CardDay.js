//este es el card que se muestra al iniciar la aplicacion en el header
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 150,
    display: "flex",
    margin: 5,
    maxHeight: 160,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const CardDay = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        Temperatura:
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        ></Typography>
        <Typography variant="h5" component="h2">
          {item.temp.day}°
        </Typography>
        <Typography variant="body2" component="p">
          Humedad:{item.humidity}
        </Typography>
        <Typography variant="body2" component="p">
          Vientos:{item.wind_speed}
        </Typography>
        <Typography variant="body2" component="p">
          {item.weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CardDay;
