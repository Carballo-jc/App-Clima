import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection:'column',
    backgroundColor: "#fff",
    width: "100%",
    height:220,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "95%",
    },
  },
  content_form: {
    display: "flex",
    maxWidth:'max-content'
  },
}));

export default useStyles;
