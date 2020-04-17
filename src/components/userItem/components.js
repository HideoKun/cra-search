import React, { memo } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import Link from "@material-ui/core/Link";
import { useRepoStyles } from "./hooks";

export const Expand = memo(({ isOpen }) =>
  isOpen ? <ExpandLess /> : <ExpandMore />
);

Expand.prototypes = {
  isOpen: PropTypes.bool,
};

export const Repo = memo(
  ({ name, stargazers_count, description, html_url }) => {
    const classes = useRepoStyles();

    return (
      <List component="div" disablePadding>
        <ListItem className={classes.repo}>
          <ListItemText
            primary={
              <Link href={html_url} rel="noopener" target="_blank">
                {name}
              </Link>
            }
            secondary={
              <Typography component="span" variant="body2" color="textPrimary">
                {description || <i>description is missing</i>}
              </Typography>
            }
          />
          <div className={classes.stars}>
            <div>{stargazers_count}</div>

            <StarIcon />
          </div>
        </ListItem>
      </List>
    );
  }
);

Repo.prototypes = {
  name: PropTypes.string.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  description: PropTypes.string,
  html_url: PropTypes.string.isRequired,
};
