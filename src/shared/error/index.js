import React, { memo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(5),
    textAlign: "center",
  },
}));

export const Error = memo(({ error }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography color="error" variant="h5" component="h1">
        We are very sorry, something went wrong...
      </Typography>

      {error && (
        <Typography color="textSecondary" variant="h6" component="h2">
          {error}
        </Typography>
      )}
    </div>
  );
});

Error.propTypes = {
  error: PropTypes.string,
};
