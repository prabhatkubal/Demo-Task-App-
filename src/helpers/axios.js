import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

console.log("baseurl", baseURL);

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
	(req) => {
		if (localStorage.token) {
			req.headers.Authorization = `Bearer ${localStorage.token}`;
		}
		return req;
	},
	(err) => {
		console.log(err);
	}
);

axiosInstance.interceptors.response.use(
	(res) => {
		return res;
	},
	(err) => {
		console.log(err);
	}
);

export default axiosInstance;
