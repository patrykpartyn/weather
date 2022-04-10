import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { CIRCULAR_PROGRESS_SIZE } from "../../constants/constants";
const styles = {
  circularBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};

function withLoading(WrappedComponent, selectData) {
  // ...i zwraca inny komponent...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.setLoadingState = this.setLoadingState.bind(this);
      this.state = {
        isLoading: false,
      };
    }

    setLoadingState = (isComponentLoading) => {
      this.setState({
        isLoading: isComponentLoading,
      });
    };
    render() {
      if (this.state.isLoading) {
        return (
          <>
            {this.state.isLoading && (
              <Box sx={styles.circularBox}>
                <CircularProgress size={CIRCULAR_PROGRESS_SIZE} />
              </Box>
            )}
          </>
        );
      }
      return (
        <>
          <WrappedComponent
            {...this.props}
            setLoadingState={this.setLoadingState}
          />
        </>
      );
    }
  };
}

export default withLoading;
