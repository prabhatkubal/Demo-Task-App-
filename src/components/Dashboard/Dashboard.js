import React from "react";
import Table from "./Table/Table";
import { makeStyles, Container } from "@material-ui/core";
import Appbar from "../AppBar/Appbar";

const dash = makeStyles({
	dashContainer: {},
});

const Dashboard = () => {
	const classes = dash();
	return (
		// <ThemeProvider theme={ theme }>
		<Container className={classes.dashContainer}>
			<Appbar />
			<Table />
		</Container>
		// </ThemeProvider>
	);
};

export default Dashboard;
