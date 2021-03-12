import React from "react";
import {
  Container,
  FormGroup,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      backgroundColor: "white",
      margin: theme.spacing(2),
      boxShadow: "2px 2px 6px #0864B133",
    },

    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiFormGroup-root": {
      width: "100%",
    },
    "& input": {
      color: "#676767",
      height: 40,
      width: "auto",
      fontSize: 10,
    },
  },
  span: {
    color: "#0864B1",
    fontSize: 30,
    fontWeight: "bold",
    marginRight: 15,
  },
  form__send: {
    margin: 60,
    marginLeft: "15%",
  },
  btn__send: {
    backgroundColor: "#0864B1",
    border: "none",
    boxShadow: "3px 4px 8px #0016534D",
    maxWidth: 100,
    height: 100,
    color: "#ffff",
    fontSize: 20,
    fontWeight: "bold",
    cursor: "pointer",
  },
}));
const WeatherForm = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <form className={classes.root}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <FormGroup>
              <label>Coloque su ciiudad:</label>
              <TextField />
            </FormGroup>
          </Grid>
          <Grid item md={6} xs={12}>
            <FormGroup>
              <label>Seleccione el pais:</label>
              <TextField />
            </FormGroup>
          </Grid>
        </Grid>
      </form>

      <div className={classes.form__send}>
        <Button variant="contained" color="primary">
          Consultar
        </Button>
      </div>
    </Container>
  );
};

export default WeatherForm;
