import useForm from "../../hooks/useForm";
import { getWeather } from "../../service/service";
import { TextField ,Button, Grid} from "@material-ui/core";
import useStyles from './styles'
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const WeatherForm = () => {
  const classes = useStyles();
  const {resultDay} = useContext(WeatherContext)
  const [formValues, handleInputChange,reset] = useForm({
    city: "",
    country: "",
  });
  const { city, country } = formValues;
  const getdata = (e) => {
    e.preventDefault();
    getWeather(city, country);
    reset()
    
  };
   
  return (
      <form onSubmit={getdata} className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="Coloque la Ciudad"
              name="city"
              type="text"
              variant="outlined"
              fullWidth={true}
              value={city}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Coloque el Pais"
              name="country"
              type="text"
              variant="outlined"
              fullWidth={true}
              value={country}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      <Button
        variant="contained"
        color="primary"
        type="submit"
         onClick={() => resultDay(city, country)}
        >
        Consultar
      </Button>
        </form>
  );
};

export default WeatherForm;
