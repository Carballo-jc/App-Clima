import React, { useContext } from "react";
import { Box } from "@material-ui/core";
import useStyles from "./styles";
import clouts from "../../assets/clima-hoy.png";
import WeatherInfo from "../weatherinfo/WeatherInfo";
import { WeatherContext } from "../context/WeatherContext";

const Header = () => {
  const {data} = useContext(WeatherContext)
  const classes = useStyles();
  return (
    <Box component="header" className={classes.header_wrap}>
      {/* <h1
        style={{
          color: "rgba(255,255,255,.9)",
        }}
      >
        Estado del Clima
      </h1> */}
        <img src={clouts} className={classes.logo_header} alt='clima' />
        {data ? <WeatherInfo /> : null}
    </Box>
  );
};

export default Header;
