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
            }
        default:
            return state;
    }
};

export default tasksReducers;