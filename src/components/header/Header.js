import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./styles";

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
      </h1>
    </Box>
  );
};

export default Header;
