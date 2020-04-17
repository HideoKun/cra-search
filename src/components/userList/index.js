import React, { memo } from "react";
import { values } from "ramda";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";

import { UserItem } from "../userItem";

import { Subheader } from "./components";
import { useStyles, useAppState } from "./hooks";

export const UserList = memo(() => {
  const classes = useStyles();
  const { isLoading, users, error } = useAppState();

  return (
    <>
      {!isLoading && !error && users && (
        <Grid container justify="center">
          <Grid item xs={10}>
            <Divider variant="middle" />
            <List
              subheader={<Subheader users={users} />}
              className={classes.root}
            >
              {values(users).map((props) => (
                <UserItem {...{ key: props.id, ...props }} />
              ))}
            </List>
          </Grid>
        </Grid>
      )}
    </>
  );
});
