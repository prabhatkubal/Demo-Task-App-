import * as types from "./actionType";
import axiosInstance from "../helpers/axios";
import path from "../helpers/apiURL";

const getTasks = (tasks) => ({
    type: types.GET_TASKS,
    payload: tasks,
});

const taskToDeleted = () => ({
    type: types.DELETE_TASKS
})

const taskToADD = () => ({
    type: types.ADD_TASKS
})

// const taskToEDIT = () => ({
//     type: types.EDIT_TASKS
// })

const taskToGET = (task) => ({
    type: types.GET_SINGLE_TASK,
    payload: task,
})

export const loadTasks = () => {
    return function (dispatch) {
        axiosInstance
            .get(path.GET_TASKS)
            .then((res) => {
                dispatch(getTasks(res.data))
            })
            .catch((err) => console.log(err.response.data.errors));
    }
}

export const deleteTask = (_id) => {
    return function (dispatch) {
        axiosInstance
            .delete(`${path.GET_TASKS}/${_id}`)
            .then((res) => {
                dispatch(taskToADD());
                dispatch(loadTasks());
            })
            .catch((err) => console.log(err.response.data.errors));
    }
}

export const addTask = (task) => {
    return function (dispatch) {
        axiosInstance
            .post(`${path.CREATE_TASK}`, task)
            .then((res) => {
                dispatch(taskToDeleted());
                dispatch(loadTasks());
            })
            .catch((err) => console.log(err.response.data.errors));
    }
}

export const getSingleTask = (_id) => {
    return function (dispatch) {
        axiosInstance
            .get(`${path.TASKS}/${_id}`)
            .then((res) => {
                dispatch(taskToGET(res.data));
                dispatch(loadTasks());
            })
            .catch((err) => console.log(err.response.data.errors));
    }
}

// export const editTask = (task) => {
//     return function (dispatch) {
//         axiosInstance
//             .put(`${path.EDIT_TASKS}/${_id}`, task)
//             .then((res) => {
//                 dispatch(taskToEDIT());
//             })
//             .catch((err) => console.log(err.response.data.errors));
//     }
// }

