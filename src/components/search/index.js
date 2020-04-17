import React, { memo } from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useStyles, useAppState, useHandlers } from "./hooks";

export const Search = memo(() => {
  const classes = useStyles();
  const { value, isValid, isLoading, validationErrorMessage } = useAppState();
  const { onChangeHandler, submit } = useHandlers(value);

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid container item xs={7} justify="flex-end">
          <form onSubmit={submit}>
            <TextField
              error={!isValid}
              required
              label="Github Username"
              value={value}
              onChange={onChangeHandler}
              helperText={validationErrorMessage}
            />
          </form>
        </Grid>

        <Grid
          container
          item
          xs={5}
          justify="flex-start"
          alignItems="flex-start"
          className={classes.submit}
        >
          <Button
            variant="contained"
            color="primary"
            disabled={isLoading || !isValid}
            onClick={submit}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
});
