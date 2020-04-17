import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import { Search, UserList, GlobalLoader, Error } from "./components";
import { ErrorBoundary } from "./hoc";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "radial-gradient(circle, rgba(5,149,238,1) 4%, rgba(0,212,255,1) 100%)",
    minHeight: "100vh",
    width: "100vw",
    padding: "75px 25px 25px 25px",
  },
  info: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper elevation={5} className={classes.container}>
          <ErrorBoundary>
            <Search />
            <GlobalLoader />
            <Error />
            <UserList />
          </ErrorBoundary>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
