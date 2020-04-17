import { usersActions, types } from "./index";

describe("actions", () => {
  it("should create an action to add users", () => {
    const users = {
      a: { id: "a" },
      b: { id: "b" },
      c: { id: "c" },
    };

    const expectedAction = {
      payload: users,
      type: types.USERS_SET_USERS,
    };

    expect(usersActions.usersSetUsers(users)).toEqual(expectedAction);
  });

  it("should create an action to set init loading", () => {
    const id = 123;
    const isLoading = true;

    const expectedAction = {
      payload: { id, isLoading },
      type: types.USERS_SET_LOADING_STATE,
    };

    expect(usersActions.usersSetLoadingState(id, isLoading)).toEqual(
      expectedAction
    );
  });

  it("should create an action to set stop loading", () => {
    const id = 123;
    const isLoading = false;

    const expectedAction = {
      payload: { id, isLoading },
      type: types.USERS_SET_LOADING_STATE,
    };

    expect(usersActions.usersSetLoadingState(id, isLoading)).toEqual(
      expectedAction
    );
  });

  it("should create an action to set add error message to user", () => {
    const id = 123;
    const message = "connection error";

    const expectedAction = {
      payload: { id, message },
      type: types.USERS_GET_USER_REPOS_FAIL,
    };

    expect(usersActions.usersGetUserReposFail(id, message)).toEqual(
      expectedAction
    );
  });

  it("should create an action to set repos for user with provided id", () => {
    const id = 123;
    const repos = [1, 2, 3];

    const expectedAction = {
      payload: { id, repos },
      type: types.USERS_SET_REPOS,
    };

    expect(usersActions.usersSetRepos(id, repos)).toEqual(expectedAction);
  });

  it("should create an action to get repos for user with provided id", () => {
    const id = 123;
    const login = "John Doe";

    const expectedAction = {
      payload: { id, login },
      type: types.USERS_GET_USER_REPOS,
    };

    expect(usersActions.usersGetUserRepos(id, login)).toEqual(expectedAction);
  });
});
