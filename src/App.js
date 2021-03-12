import { BrowserRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Header from "./components/header/Header";
import WeatherForm from "./components/weatherform/WeatherForm";
import WeatherInfo from "./components/weatherinfo/WeatherInfo";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(() => ({
  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

function App() {
const classes = useStyles();
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container maxWidth="md">
          <div className={classes.content}>
            <WeatherForm />
            <WeatherInfo />
          </div>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
