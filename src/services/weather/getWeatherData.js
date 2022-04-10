import { weatherByName } from "../config";
const axios = require("axios");

const getWeatherData = (name) =>
  axios
    .get(`${weatherByName(name)}`)
    .then((response) => (response.status === 200 ? response.data : []));

export default getWeatherData;
