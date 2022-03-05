import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './components/login/Login';
import Signup from "./components/signup/Signup";
import Dashboard from './components/Dashboard/Dashboard';

// import { createTheme } from '@material-ui/core';
// import { ThemeProvider } from '@mui/material';

// const theme = createTheme({
//   palette: {
//     primary: { main: '#09A79E' }, // Purple and green play nicely together.
//     secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
//   },
// });

function App() {
  useEffect(() => {

  })
  return (
    // <ThemeProvider theme={ theme }>
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route exact path="signup" element={ <Signup /> } />
      <Route exact path="dashboard" element={ <Dashboard /> } />
    </Routes>
    // </ThemeProvider>
  );
}

export default App;
