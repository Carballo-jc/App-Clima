import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 275,
    marginTop:   15
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default useStyles;
