import React from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	makeStyles,
} from "@material-ui/core";

const popupStyles = makeStyles({
	popupContainer: {
		"& .MuiDialog-paperWidthSm-330": {
			width: 736,
			height: 722,
		},
	},
});

const EditPopUp = (props) => {
	const { title, children, openEditPopup, setOpenEditPopup } = props;
	const classes = popupStyles();
	return (
		<Dialog open={openEditPopup} className={classes.popupContainer}>
			<DialogTitle>
				<div style={{ textAlign: "center", color: "#FFFFFF" }}>Edit Task</div>
			</DialogTitle>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	);
};

export default EditPopUp;
