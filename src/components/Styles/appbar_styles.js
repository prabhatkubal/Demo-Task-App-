import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	appbar: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		height: 71,
		paddingLeft: "40px",
		paddingRight: "30px",
	},
	typography: {
		display: "inline",
	},
	paper: {
		width: 36,
		height: 36,
		borderRadius: 50,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: "#09A79E",
		color: "#FFFFFF",
		marginLeft: "auto",
	},
	button: {
		color: "#FFFFFF",
	},
});

export default useStyles;
