import "./App.css";
import Weather from "./Views/WeatherView/Weather";
import Typography from "@mui/material/Typography";
import { WEATHER_TITILE } from "./constants/constants";

const styles = {
  app: { height: "100vh" },
  title: {
    margin: "3% 0",
  },
};

const App = () => {
  return (
    <div className="App" style={styles.app}>
      <Typography variant="h2" gutterBottom component="div" sx={styles.title}>
        {WEATHER_TITILE}
      </Typography>
      <Weather />
    </div>
  );
};

export default App;
