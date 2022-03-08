import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";

import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
	palette: {
		type: "dark",
		primary: {
			main: "#09A79E",
		},
		secondary: {
			main: "#FFFFFF",
		},
		background: {
			default: "#2B2C41",
			paper: "#2B2C41",
		},
		// redColor: palette.augmentColor({ color: red }),
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="signup" element={<Signup />} />
				<Route exact path="dashboard" element={<Dashboard />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
