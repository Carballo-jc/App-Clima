import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
      display:'flex',
      backgroundColor:'#fff',
      width:'100%',
      borderRadius:5,
      marginTop:10,
      marginBottom:10,
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "95%",
    },
  },
}));

export default useStyles;
