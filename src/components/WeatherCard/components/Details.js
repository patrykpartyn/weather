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
  NO_DATA,
} from "../../../constants/constants";
import ErrorComponent from "../../ErrorComponent/ErrorComponent";
import { FONT_BOLD_900 } from "../../../constants/constantsStyles";
import PropTypes from "prop-types";
import { DetailsOutlined } from "@mui/icons-material";

const styles = {
  fontBold: {
    fontWeight: FONT_BOLD_900,
  },
};

const Details = ({ data, showDetails, desc, details }) => {
  const {
    name,
    main: { temp },
  } = data;
  const calculateDegrees = (tempToCalc) =>
    `${Math.round(tempToCalc - 273.15)}\u00b0C`;

  const calcValue = useMemo(() => calculateDegrees(temp), [temp]);

  const detailWithProp = (key, weatherPropToShow) => (
    <Typography
      variant="body2"
      color="text.secondary"
      marginTop={"8px"}
      key={weatherPropToShow}
    >
      <span style={styles.fontBold}>{`${key} ${weatherPropToShow}`}:</span>{" "}
      {weatherPropToShow === "temp" ? calcValue : data[key][weatherPropToShow]}
    </Typography>
  );

  const detailsWithoutInnerProp = (key) => (
    <Typography variant="body2" color="text.secondary" key={key}>
      <span style={styles.fontBold}>{key}:</span> {data[key]}
    </Typography>
  );
  if (showDetails) {
    return (
      <>
        <CardContent>
          {details.length > 0 ? (
            details.map((config) => {
              return Object.keys(config).map((key) => {
                if (Array.isArray(config[key])) {
                  return config[key].map((weatherPropToShow) => {
                    return detailWithProp(key, weatherPropToShow);
                  });
                } else {
                  return detailsWithoutInnerProp(key);
                }
              });
            })
          ) : (
            <>
              <ErrorComponent title={NO_DATA} />
            </>
          )}
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
