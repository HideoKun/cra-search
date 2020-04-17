import axios from "axios";
import { pipe } from "ramda";

import { baseURL } from "../config";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/vnd.github.v3.text-match+json",
  },
});

const getUserSearchUrl = (user) => `search/users?q=${user}`;
const getUserReposUrl = (user) => `users/${user}/repos`;

export const getUsers = pipe(getUserSearchUrl, api.get);
export const getRepos = pipe(getUserReposUrl, api.get);
