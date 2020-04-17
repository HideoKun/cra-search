import { handleActions, createActions } from "redux-actions";
import { values } from "ramda";
import { buildPrefixedTypes } from "../../../utils";

const prefix = "SEARCH";

export const types = buildPrefixedTypes(prefix)([
  "SET_VALUE",
  "SET_LOADING_STATE",
  "REQUEST",
  "FAIL",
]);

export const searchActions = createActions(...values(types));

const initState = {
  value: "",
  isLoading: false,
  isValid: true,
  error: false,
  validationErrorMessage: "",
};

const validate = (value) =>
  value && value.includes(" ")
    ? "White spaces are not allowed"
    : "Please provide the value";

export const searchReducer = handleActions(
  {
    [types.SEARCH_SET_VALUE]: (state, { payload: value }) => {
      const isValid = value && !value.includes(" ");

      return {
        ...state,
        value,
        isValid,
        validationErrorMessage: isValid ? "" : validate(value),
      };
    },
    [types.SEARCH_SET_LOADING_STATE]: (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }),
    [types.SEARCH_FAIL]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
  initState
);
