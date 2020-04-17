import React, { memo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(5),
  },
}));

export const Loader = memo(({ size = 40 }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={size} />
    </div>
  );
});

Loader.propTypes = {
  error: PropTypes.number,
};
