const baseURL = process.env.REACT_APP_BACKEND_URL;
let apiURLs = {
    SIGNUP_URL: baseURL + "/api/users",
    LOGIN_URL: baseURL + "/api/users/login",
    USERDETAIL_URL: baseURL + "/api/users/me",
    GET_TASKS: baseURL + "/api/tasks",
    CREATE_TASK: baseURL + "/api/tasks",
}

export default apiURLs;