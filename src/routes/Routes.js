import { BrowserRouter as Router, Link, Routes, Route, Switch } from "react-router-dom";
import Login from "../components/login/Login";
import Signup from "../components/signup/Signup";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={ <Login /> } />
                <Route exact path="signup" element={ <Signup /> } />
            </Routes>
        </>
    );
};

export default Routers;

