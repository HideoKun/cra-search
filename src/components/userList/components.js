import React, { memo } from "react";

import { isEmpty } from "ramda";
import ListSubheader from "@material-ui/core/ListSubheader";

import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

export const Subheader = memo(({ users }) => (
  <ListSubheader component="div">
    <Grid container>
      <Grid container item justify="center">
        {isEmpty(users)
          ? "Sorry, no match"
          : "List of users matching your query"}
      </Grid>
    </Grid>
  </ListSubheader>
));

Subheader.propTypes = {
  users: PropTypes.object.isRequired,
};
