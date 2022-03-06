import React from "react";
import { Dialog, DialogTitle, DialogContent, makeStyles } from "@material-ui/core";
import AddTaskForm from "../AddTaskFrom/AddTaskForm";

const popupStyles = makeStyles({
    popupContainer: {
        '& .MuiDialog-paperWidthSm-331': {
            background: "#2B2C41",
            width: 736,
            height: 722,
        }
    },
})

const Popup = (props) => {
    const { title, children, openPopup, steOpenPopup } = props;
    const classes = popupStyles();
    return (
        <Dialog open={ openPopup } className={ classes.popupContainer }>
            <DialogTitle><div style={ { textAlign: "center", color: "#FFFFFF" } }>Add Task</div></DialogTitle>
            <DialogContent>
                { children }
            </DialogContent>
        </Dialog>
    );
}

export default Popup;