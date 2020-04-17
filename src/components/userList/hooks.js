import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const useAppState = () => {
  return useSelector(({ search: { isLoading, error }, users }) => ({
    isLoading,
    users,
    error,
  }));
};
