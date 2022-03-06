import * as types from "./actionType";
import axiosInstance from "../helpers/axios";
import path from "../helpers/apiURL";

const getTasks = (tasks) => ({
    type: types.GET_TASKS,
    payload: tasks,
});

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