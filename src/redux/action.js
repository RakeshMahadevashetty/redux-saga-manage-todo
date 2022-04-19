import * as types from './actionType';

export const loadTodoListStart = () => ({
    type: types.LOAD_TODOLIST_START
})

export const loadTodoListSuccess = (todoList) => ({
    type: types.LOAD_TODOLIST_SUCCESS,
    payload: todoList
})

export const loadTodoListFail = (error) => ({
    type: types.LOAD_TODOLIST_FAIL,
    payload: error
})

export const loadPersonStart = () => ({
    type: types.LOAD_PERSONS_START
})

export const loadPersonSuccess = (personsList) => ({
    type: types.LOAD_PERSONS_SUCCESS,
    payload: personsList
})

export const loadPersonFail = (error) => ({
    type: types.LOAD_PERSONS_FAIL,
    payload: error
})

export const loadCategoriesStart = () => ({
    type: types.LOAD_CATEGORIES_START
})

export const loadCategoriesSuccess = (categoriesList) => ({
    type: types.LOAD_CATEGORIES_SUCCESS,
    payload: categoriesList
})

export const loadCategoriesFail = () => ({
    type: types.LOAD_CATEGORIES_FAIL
})

export const postTodoStart = (todo) => ({
    type: types.POST_TODO_START,
    payload: todo
})

export const postTodoSuccess = () => ({
    type: types.POST_TODO_SUCCESS,
    payload: {}
})

export const postTodoFail = () => ({
    type: types.POST_TODO_FAIL
})

export const updateTodoStart = (todo) => ({
    type: types.UPDATE_TODO_START,
    payload: todo
})

export const updateTodoSuccess = () => ({
    type: types.UPDATE_TODO_SUCCESS,
    payload: {}
})

export const updateTodoFail = (error) => ({
    type: types.UPDATE_TODO_FAIL,
    payload: error
})

export const deleteTodoStart = (todoId) => ({
    type: types.DELETE_TODO_START,
    payload: todoId
})

export const deleteTodoSuccess = () => ({
    type: types.DELETE_TODO_SUCCESS
})

export const deleteTodoFail = (error) => ({
    type: types.DELETE_TODO_FAIL,
    payload: error
})

export const getTodoStart = (todoId) => ({
    type: types.GET_TODO_START,
    payload: todoId
})

export const getTodoSuccess = (todo) => ({
    type: types.GET_TODO_SUCCESS,
    payload: todo
})

export const getTodoFail = (error) => ({
    type: types.GET_TODO_FAIL,
    payload: error
})