import App from "../App";
import WeatherProvider from "./context/WeatherContext";
const MainApp = () => {
  return (
    <WeatherProvider>
      <App />
    </WeatherProvider>
  );
};

export default MainApp;
