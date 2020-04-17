import { handleActions, createActions } from "redux-actions";

import { buildPrefixedTypes } from "../../../utils";

const prefix = "USERS";

export const types = buildPrefixedTypes(prefix)([
  "SET_USERS",
  "GET_USER_REPOS",
  "GET_USER_REPOS_FAIL",
  "SET_REPOS",
  "SET_LOADING_STATE",
]);

const initState = null;

export const usersReducer = handleActions(
  {
    [types.USERS_SET_USERS]: (state, { payload }) => ({
      ...payload,
    }),

    [types.USERS_SET_REPOS]: (state, { payload: { id, repos } }) => {
      if (state && state[id]) {
        const updated = { ...state[id], repos };

        return { ...state, [id]: updated };
      }

      return state;
    },
    [types.USERS_SET_LOADING_STATE]: (
      state,
      { payload: { id, isLoading } }
    ) => {
      if (state && state[id]) {
        const updated = { ...state[id], isLoading };

        return { ...state, [id]: updated };
      }
      return state;
    },
    [types.USERS_GET_USER_REPOS_FAIL]: (state, { payload }) => {
      state[payload.id].error = payload.message;

      return { ...state };
    },
  },
  initState
);

export const usersActions = createActions(
  {
    [types.USERS_GET_USER_REPOS]: (id, login) => ({ id, login }),
    [types.USERS_SET_REPOS]: (id, repos) => ({ id, repos }),
    [types.USERS_GET_USER_REPOS_FAIL]: (id, message) => ({ id, message }),
    [types.USERS_SET_LOADING_STATE]: (id, isLoading) => ({
      id,
      isLoading,
    }),
  },
  types.USERS_SET_USERS
);
