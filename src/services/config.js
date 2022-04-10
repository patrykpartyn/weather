const API_KEY = "a75bc19cc344a470665cbdcc890b3358";

export const weatherByGeoData = (lon, lat) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

export const weatherByName = (name) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`;
