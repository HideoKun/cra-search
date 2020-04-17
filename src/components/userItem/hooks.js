import { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { actions } from "../../store";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  nested: {
    paddingLeft: theme.spacing(5),
  },
}));

export const useRepoStyles = makeStyles((theme) => ({
  repo: {
    alignItems: "flex-start",
    padding: `0 0 0 ${theme.spacing(10)}px`,
  },

  stars: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
    marginLeft: 18,
    marginRight: 18,
  },
}));

export const useHandlers = (repos) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = (id, login) => () => {
    setIsOpen(!isOpen);
    !isOpen && !repos && dispatch(actions.usersGetUserRepos(id, login));
  };

  return { isOpen, clickHandler };
};
