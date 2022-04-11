import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BrowserNotSupportedIcon from "@mui/icons-material/BrowserNotSupported";
import PropTypes from "prop-types";

const ErrorComponent = ({ title }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "50%",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: 32 }}>{title}</p>
        <BrowserNotSupportedIcon
          style={{ fontSize: "100px", marginBottom: "24px" }}
        />
      </Paper>
    </Box>
  );
};

ErrorComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ErrorComponent;
