import React from "react";
import { Container } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import Table from "../Table/Table";
import { makeStyles } from "@material-ui/core";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Appbar from "../AppBar/Appbar";
const theme = createTheme({});

const dash = makeStyles({
	dashContainer: {},
});

const Dashboard = () => {
	const classes = dash();
	return (
		<ThemeProvider theme={ theme }>
			<Container className={ classes.dashContainer }>
				<Appbar />
				<Table />
			</Container>
		</ThemeProvider>
	);
};

export default Dashboard;
