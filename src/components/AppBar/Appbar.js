import React from "react";
import {
	AppBar,
	Container,
	Typography,
	Paper,
	Menu,
	MenuItem,
	Button,
} from "@material-ui/core";
import useStyles from "../Styles/appbar_styles";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

const theme = createTheme({
	palette: {
		primary: {
			main: "#2B2C41",
		},
	},
});

let displayName = localStorage.getItem("firstname");
let displayLetter = displayName.charAt(0);

const Appbar = () => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<ThemeProvider theme={ theme }>
			<AppBar className={ classes.appbar }>
				<Typography className={ classes.typography }>Task Management</Typography>
				<Paper className={ classes.paper }>{ displayLetter }</Paper>
				<Button
					id="basic-button"
					aria-controls={ open ? "basic-menu" : undefined }
					aria-haspopup="true"
					endIcon={ <ArrowDropDown /> }
					aria-expanded={ open ? "true" : undefined }
					onClick={ handleClick }
					className={ classes.button }
				>
					{ displayName }
				</Button>
				<Menu
					id="basic-menu"
					anchorEl={ anchorEl }
					open={ open }
					onClose={ handleClose }
					MenuListProps={ {
						"aria-labelledby": "basic-button",
					} }
				>
					<MenuItem onClick={ handleClose }>Logout</MenuItem>
				</Menu>
			</AppBar>
		</ThemeProvider>
	);
};

export default Appbar;
