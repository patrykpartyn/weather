import React, { useMemo } from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import {
  CITY_DESC_LABEL,
  CITY_LABEL,
  DEGREES_LABEL,
  WIND_LABEL,
  PRESSURE_LABEL,
  WEATHER_UNITS,
  PRESSURE_UNITS,
} from "../../../constants/constants";
import { FONT_BOLD_900 } from "../../../constants/constantsStyles";
import PropTypes from "prop-types";

const styles = {
  fontBold: {
    fontWeight: FONT_BOLD_900,
  },
};

const Details = ({ data, showDetails, desc }) => {
  const { name, main, wind } = data;

  const calculateDegrees = (temp) => `${Math.round(temp - 273.15)}\u00b0C`;

  const calcValue = useMemo(() => calculateDegrees(main.temp), [main.temp]);

  if (showDetails) {
    return (
      <>
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            marginTop={"24px"}
            marginBottom={"8px"}
          >
            <span style={styles.fontBold}>{CITY_LABEL}:</span> {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            marginBottom={"8px"}
          >
            <span style={styles.fontBold}>{DEGREES_LABEL}: </span>
            {calcValue}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            marginBottom={"8px"}
          >
            <span style={styles.fontBold}> {WIND_LABEL}:</span> {wind.speed}{" "}
            {WEATHER_UNITS}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={styles.fontBold}> {PRESSURE_LABEL}: </span>
            {main.pressure} {PRESSURE_UNITS}
          </Typography>
        </CardContent>
      </>
    );
  }
  return (
    <>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          marginTop={"24px"}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {CITY_DESC_LABEL}:{desc}
        </Typography>
      </CardContent>
    </>
  );
};

Details.propTypes = {
  data: PropTypes.object.isRequired,
  showDetails: PropTypes.bool.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Details;
