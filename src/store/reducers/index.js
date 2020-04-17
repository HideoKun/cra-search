import { combineReducers } from "redux";

import {
  searchReducer as search,
  types as searchTypes,
  searchActions,
} from "./search";

import {
  usersReducer as users,
  types as usersTypes,
  usersActions,
} from "./users";

export const actions = {
  ...searchActions,
  ...usersActions,
};

export const types = {
  ...searchTypes,
  ...usersTypes,
};

export const rootReducer = combineReducers({
  search,
  users,
});
