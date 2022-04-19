import {
    take,
    takeEvery,
    takeLatest,
    put,
    all,
    delay,
    fork,
    call
} from "redux-saga/effects";

import {
    loadTodoListStart,
    loadTodoListSuccess,
    loadTodoListFail,
    loadPersonSuccess,
    loadPersonFail,
    loadCategoriesSuccess,
    loadCategoriesFail,
    postTodoSuccess,
    postTodoFail,
    updateTodoSuccess,
    updateTodoFail,
    deleteTodoSuccess,
    deleteTodoFail,
    getTodoSuccess,
    getTodoFail,
} from "./action";

import {
    loadTodoListApi,
    loadPersonApi,
    loadCategoriesApi,
    postTodoApi,
    updateTodoApi,
    deleteTodoApi,
    getTodoApi
} from "./api";

import * as types from "./actionType";

export function* onLoadTodoListStartAsync() {
    try {
        const response = yield call(loadTodoListApi);

        if (response.status === 200) {
            yield delay(300);
            yield put(loadTodoListSuccess(response.data))
        }
    } catch (error) {
        yield put(loadTodoListFail(error.response.data))
    }
}

export function* onLoadTodoList() {
    yield takeEvery(types.LOAD_TODOLIST_START, onLoadTodoListStartAsync)
}

export function* onLoadPersonsStartAsync() {
    try {
        const response = yield call(loadPersonApi);
        if (response.status === 200) {
            yield delay(300);
            yield put(loadPersonSuccess(response.data))
        }
    } catch (error) {
        yield put(loadPersonFail(error.response.data))
    }
}

export function* onLoadPersons() {
    yield takeEvery(types.LOAD_PERSONS_START, onLoadPersonsStartAsync)
}

export function* onLoadCategoriesStartAsync() {
    try {
        const response = yield call(loadCategoriesApi);

        if (response.status === 200) {
            yield delay(300);
            yield put(loadCategoriesSuccess(response.data))
        }
    } catch (error) {
        yield put(loadCategoriesFail(error.response.data))
    }
}

export function* onLoadCategeries() {
    yield takeEvery(types.LOAD_CATEGORIES_START, onLoadCategoriesStartAsync)
}

export function* onLoadPostNewTodoStartAsync(action) {
    try {
        const response = yield call(postTodoApi, action.payload);

        if (response.status === 201) {
            yield delay(300);
            yield put(postTodoSuccess())
            yield put(loadTodoListStart())
        }
    } catch (error) {
        yield put(postTodoFail(error.response.data))
    }
}

export function* postNewTodo() {
    yield takeLatest(types.POST_TODO_START, onLoadPostNewTodoStartAsync)
}

export function* onLoadUpdateTodoStartAsync(action) {
    try {
        const response = yield call(updateTodoApi, action.payload);

        if (response.status === 200) {
            yield delay(300);
            yield put(updateTodoSuccess())
            yield put(loadTodoListStart())
        }
    } catch (error) {
        yield put(updateTodoFail(error.response.data))
    }
}

export function* updateTodo() {
    yield takeLatest(types.UPDATE_TODO_START, onLoadUpdateTodoStartAsync)
}

export function* onLoadDeleteTodoStartAsync(action) {
    try {
        const response = yield call(deleteTodoApi, action.payload);

        if (response.status === 200) {
            yield delay(300);
            yield put(deleteTodoSuccess())
            yield put(loadTodoListStart())
        }
    } catch (error) {
        yield put(deleteTodoFail(error.response.data))
    }
}

export function* deleteTodo() {
    yield takeLatest(types.DELETE_TODO_START, onLoadDeleteTodoStartAsync)
}

export function* onLoadGetTodoStartAsync(action) {
    try {
        const response = yield call(getTodoApi, action.payload);

        if (response.status === 200) {
            yield delay(300);
            yield put(getTodoSuccess({ ...response.data }))
        }
    } catch (error) {
        yield put(getTodoFail(error))
    }
}

export function* getTodo() {
    yield takeEvery(types.GET_TODO_START, onLoadGetTodoStartAsync)
}

const todoSagas = [
    fork(onLoadTodoList),
    fork(onLoadPersons),
    fork(onLoadCategeries),
    fork(postNewTodo),
    fork(updateTodo),
    fork(deleteTodo),
    fork(getTodo)
];

export default function* rootSaga() {
    yield all([...todoSagas])
}