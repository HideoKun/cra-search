import {
  prop,
  pipe,
  map,
  identity,
  any,
  filter,
  take,
  pick,
  fromPairs,
  sort,
} from "ramda";

const doesLoginMatchSearchParam = pipe(
  prop("text_matches"),
  map(
    ({ object_type, property }) =>
      object_type === "User" && property === "login"
  ),
  any(identity)
);

const sortDescByStars = (a, b) => {
  if (a.stargazers_count < b.stargazers_count) {
    return 1;
  }
  if (a.stargazers_count > b.stargazers_count) {
    return -1;
  }
  return 0;
};

export const stopPropagation = (e) => e.stopPropagation();

export const parseRepos = pipe(
  map(pick(["name", "description", "stargazers_count", "html_url"])),
  sort(sortDescByStars)
);

export const parseUsers = pipe(
  filter(doesLoginMatchSearchParam),
  take(5),
  map(pick(["id", "avatar_url", "login", "html_url"])),
  map(({ id, ...rest }) => [id, { ...rest, id, isLoading: false }]),
  fromPairs
);

export const validateXhrResponse = ({ status, statusText }) => {
  if (status !== 200) {
    throw new Error(`${statusText} (${status})`);
  }
};

export const buildPrefixedTypes = (prefix) =>
  pipe(
    map((type) => [`${prefix}_${type}`, `${prefix.toLowerCase()}::${type}`]),
    fromPairs
  );
