import * as types from "./actionType";

const initiaState = {
    tasks: [],
    task: {},
    loading: false
}

const tasksReducers = (state = initiaState, action) => {
    switch (action.type) {
        case types.GET_TASKS:
            return {
                ...state,
                tasks: action.payload,
                loading: false
            };
        case types.ADD_TASKS:
            return {
                ...state,
                task: action.payload,
                loading: false
            }
        case types.DELETE_TASKS:
            return {
                ...state,
                loading: false
            };
        case types.GET_SINGLE_TASK:
            return {
                ...state,
                task: action.payload,
                loading: false
            }
        default:
            return state;
    }
};

export default tasksReducers;