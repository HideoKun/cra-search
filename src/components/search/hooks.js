import { useSelector, useDispatch } from "react-redux";
import { identity, ifElse } from "ramda";
import { makeStyles } from "@material-ui/core/styles";

import { actions } from "../../store";

const selectAction = ifElse(
  identity,
  actions.searchRequest,
  actions.searchSetValue // update value to trigger validation
);

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(5),
  },
  submit: {
    paddingTop: theme.spacing(1.5),
  },
}));

export const useAppState = () => {
  return useSelector(
    ({ search: { value, isValid, isLoading, validationErrorMessage } }) => ({
      value,
      isValid,
      isLoading,
      validationErrorMessage,
    })
  );
};

export const useHandlers = (inputValue) => {
  const dispatch = useDispatch();

  const onChangeHandler = ({ target: { value } }) =>
    dispatch(actions.searchSetValue(value));

  const submit = (e) => {
    e.preventDefault();
    dispatch(selectAction(inputValue));
  };

  return { onChangeHandler, submit };
};
