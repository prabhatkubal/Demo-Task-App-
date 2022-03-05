import Login from "../components/login/Login"
import Signup from "../components/signup/Signup"

const routes = [
    {
        path: '/',
        component: <Login />,
    },
    {
        path: "/signup",
        component: <Signup />,
    },
];

export default routes;