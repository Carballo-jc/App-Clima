import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header_wrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "var(--main-color-header)",
    padding: "1rem 4rem",
    boxShadow: "0 1px 6px rgba(0,0,0,.3)",
  },

  header_wrap_nav: {
    display: "flex",
    justifyContent: "center",
  },

  header_wrap_nav_a: {
    marginRight: "1rem",
  },
}));

export default useStyles;
