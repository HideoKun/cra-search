import { call, put, takeEvery } from "redux-saga/effects";

import { parseUsers, parseRepos, validateXhrResponse } from "../../utils";
import { getUsers, getRepos } from "../../api";
import { actions, types } from "../../store";

function* fetchUsers({ payload }) {
  try {
    yield put(actions.searchFail(false));
    yield put(actions.usersSetUsers(null));
    yield put(actions.searchSetLoadingState(true));

    const res = yield call(getUsers, payload);
    validateXhrResponse(res);

    const parsed = parseUsers(res.data.items);

    yield put(actions.usersSetUsers(parsed));
  } catch (e) {
    yield put(actions.searchFail(e.message));
  } finally {
    yield put(actions.searchSetLoadingState(false));
  }
}

function* fetchRepos({ payload: { id, login } }) {
  try {
    yield put(actions.usersGetUserReposFail(id, false));
    yield put(actions.usersSetLoadingState(id, true));

    const res = yield call(getRepos, login);
    validateXhrResponse(res);

    const parsed = parseRepos(res.data);

    yield put(actions.usersSetRepos(id, parsed));
  } catch (e) {
    yield put(actions.usersGetUserReposFail(id, e.message));
  } finally {
    yield put(actions.usersSetLoadingState(id, false));
  }
}

export function* saga() {
  yield takeEvery(types.SEARCH_REQUEST, fetchUsers);
  yield takeEvery(types.USERS_GET_USER_REPOS, fetchRepos);
}
