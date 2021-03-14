import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header_wrap: {
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: "var(--main-color-header)",
     padding: "1rem",
    boxShadow: "0 1px 6px rgba(0,0,0,.3)",
  },
  logo_header: {
    borderRadius: 6,
    opacity: 0.9,
    width:435,
    height:180
  },
}));

export default useStyles;
