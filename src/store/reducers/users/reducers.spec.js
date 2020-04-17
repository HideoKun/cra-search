import { usersReducer, usersActions } from "./index";
import { pipe, map, fromPairs } from "ramda";

const Chance = require("chance");
const chance = new Chance();

const createUser = (id) => ({
  id: id || chance.ssn(),
  avatar_url: chance.url(),
  login: chance.name(),
  html_url: chance.url(),
  isLoading: chance.bool(),
});

const createUsersState = pipe(
  map(({ id, ...rest }) => [id, { ...rest, id }]),
  fromPairs
);

describe("todos reducer", () => {
  it("should return the passed state", () => {
    expect(usersReducer(null, {})).toEqual(null);
  });

  it("should return users", () => {
    const users = createUsersState([createUser(), createUser(), createUser()]);

    expect(usersReducer(null, usersActions.usersSetUsers(users))).toEqual(
      users
    );
  });
});
