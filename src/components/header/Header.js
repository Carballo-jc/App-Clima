import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./styles";
import clouts from "../../assets/wb_sunny-24px.svg";

const Header = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.header_wrap}>
      <h1
        style={{
          color: "rgba(255,255,255,.9)",
        }}
      >
        Estado del Clima
        <i src={clouts}></i>
      </h1>
    </Box>
  );
};

export default Header;
