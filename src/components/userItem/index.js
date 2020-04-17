import React, { memo } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "ramda";
import Avatar from "@material-ui/core/Avatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";

import { Loader, Error } from "../../shared";
import { stopPropagation } from "../../utils";

import { useStyles, useHandlers } from "./hooks";
import { Expand, Repo } from "./components";

export const UserItem = memo(
  ({ id, login, avatar_url, html_url, isLoading, repos, error }) => {
    const classes = useStyles();
    const { isOpen, clickHandler } = useHandlers(repos);

    return (
      <>
        <ListItem button onClick={clickHandler(id, login)}>
          <ListItemIcon>
            <Avatar alt={login} src={avatar_url}>
              {/* fallback for missing avatar */}
              {login.split("")[0]}
            </Avatar>
          </ListItemIcon>

          <ListItemText
            primary={
              <Link
                onClick={stopPropagation}
                href={html_url}
                rel="noopener"
                target="_blank"
              >
                {login}
              </Link>
            }
          />

          <Expand isOpen={isOpen} />
        </ListItem>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          {isLoading && <Loader />}

          {error && <Error error={error} />}

          {!isLoading && !error && repos && isEmpty(repos) && (
            <List component="div" disablePadding>
              <ListItem className={classes.nested}>
                <ListItemText secondary="Sorry, noting to display..." />
              </ListItem>
            </List>
          )}

          {repos &&
            repos.map((props) => <Repo {...{ ...props, key: props.name }} />)}
        </Collapse>
      </>
    );
  }
);

UserItem.prototypes = {
  id: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string,
  html_url: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  repos: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
