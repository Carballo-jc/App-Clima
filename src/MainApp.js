import App from "./App";
import WeatherProvider from "./components/context/WeatherContext";
const MainApp = () => {
  return (
    <WeatherProvider>
      <App />
    </WeatherProvider>
  );
};

export default MainApp;
