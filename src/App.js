import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './components/login/Login';
import Signup from "./components/signup/Signup";
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  useEffect(() => {

  })
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route exact path="signup" element={ <Signup /> } />
      <Route exact path="dashboard" element={ <Dashboard /> } />
    </Routes>
  );
}

export default App;
