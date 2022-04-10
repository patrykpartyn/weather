import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";
import Details from "./components/Details";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import {
  API_ERROR,
  CIRCULAR_PROGRESS_SIZE,
  BUTTON_BACK_TITLE,
} from "../../constants/constants";

const styles = {
  card: {
    minWidth: "300px",
    maxWidth: "22%",
    marginRight: "16px",
    marginTop: "16px",
    flexBasis: "20%",
    flexGrow: "1",
    minHeight: "366px",
    flexDirection: "column",
    justifyContent: "space-between",
    display: "flex",
    "@media (max-width: 576px)": {
      maxWidth: "90%",
      marginRight: 0,
    },
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    padding: "8px 24px",
  },
  mainBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "80%",
  },
};

const WeatherCard = ({ data, apiCall }) => {
  const { buttonTitle, city, desc, logo } = data;
  const [showDetails, setShowDetails] = useState(false);
  const [apiRes, setApiRes] = useState(null);
  const [apiError, setApiError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      const data = await apiCall(city);
      setApiRes(data);
      setIsLoading(false);
    } catch (e) {
      setApiError(true);
    }
  };

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    setTimeout(() => {
      const dane = getData();
    }, 2000);
    return () => (mounted = false);
  }, []);

  if (apiError) {
    return (
      <div style={styles.card}>
        <ErrorComponent title={API_ERROR} />
      </div>
    );
  }

  return (
    <Card sx={styles.card}>
      <CardActionArea>
        {" "}
        <CardMedia
          component="img"
          height="140px"
          image={logo}
          alt="green iguana"
        />
        {isLoading ? (
          <div style={styles.mainBox}>
            <CircularProgress size={CIRCULAR_PROGRESS_SIZE} />
          </div>
        ) : !!apiRes ? (
          <Details
            data={apiRes}
            showDetails={showDetails}
            city={city}
            desc={desc}
          />
        ) : null}
      </CardActionArea>
      <CardActions style={styles.cardActions}>
        <Button
          size="small"
          color="primary"
          variant="contained"
          style={styles.button}
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? BUTTON_BACK_TITLE : buttonTitle}
        </Button>
      </CardActions>
    </Card>
  );
};

WeatherCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WeatherCard;
