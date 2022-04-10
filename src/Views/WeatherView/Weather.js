import React from "react";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import { cities } from "./config";
import { NO_DATA } from "../../constants/constants";
import getWeatherData from "../../services/weather/getWeatherData";

const styles = {
  mainBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
};

const Weather = () => {
  return (
    <div style={styles.mainBox}>
      {cities.length > 0 ? (
        cities.map((city, index) => {
          return (
            <WeatherCard key={index} data={city} apiCall={getWeatherData} />
          );
        })
      ) : (
        <ErrorComponent title={NO_DATA} />
      )}
    </div>
  );
};

export default Weather;
