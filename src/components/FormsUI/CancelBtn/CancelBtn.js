import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		background: "rgba(9, 167, 158, 0.18)",
		"&:hover": {
			background: "rgba(9, 167, 158, 0.18)",
		},
		border: "1px solid #09A79E",
		borderRadius: 2,
		marginTop: 30,
	},
});

const CancelBtn = ({ children }) => {
	const classes = useStyles();

	const configButton = {
		variant: "contained",
	};

	return (
		<Button className={classes.root} {...configButton}>
			{children}
		</Button>
	);
};

export default CancelBtn;
