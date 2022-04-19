import * as types from "./actionType";

const initialState = {
    todoList: [],
    persons: {},
    categories: {},
    individualTodo: {},
    loading: false,
    error: null
}

const todoReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.LOAD_TODOLIST_START:
        case types.LOAD_PERSONS_START:
        case types.LOAD_CATEGORIES_START:
        case types.DELETE_TODO_START:
        case types.GET_TODO_START:

            return {
                ...state,
                loading: true
            }

        case types.POST_TODO_START:
        case types.UPDATE_TODO_START:

            return {
                ...state,
                individualTodo: { ...action.payload },
                loading: true
            }
            
        case types.POST_TODO_SUCCESS:
        case types.UPDATE_TODO_SUCCESS:

            return {
                ...state,
                individualTodo: action.payload,
                loading: false
            }

        case types.DELETE_TODO_SUCCESS:

            return {
                ...state,
                loading: false,
            }

        case types.GET_TODO_SUCCESS:

            return {
                ...state,
                individualTodo: action.payload
            }

        case types.LOAD_TODOLIST_SUCCESS:

            return {
                ...state,
                loading: false,
                todoList: { ...action.payload }
            }

        case types.LOAD_PERSONS_SUCCESS:
            return {
                ...state,
                loading: false,
                persons: { ...action.payload }
            }

        case types.LOAD_CATEGORIES_SUCCESS:

            return {
                ...state,
                loading: false,
                categories: { ...action.payload }
            }

        case types.UPDATE_TODO_FAIL:
        case types.POST_TODO_FAIL:
        case types.LOAD_TODOLIST_FAIL:
        case types.LOAD_CATEGORIES_FAIL:
        case types.DELETE_TODO_FAIL:
        case types.GET_TODO_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default todoReducer;