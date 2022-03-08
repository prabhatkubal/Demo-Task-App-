import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	formContainer: {},
	textfield: {
		width: "100%",
		border: "1px solid #FFFFFF",
		borderRadius: "4px",
	},
	textfieldTypography: {
		color: "#FFFFFF",
		marginTop: 20,
		marginBottom: 5,
	},
	textarea: {
		border: "1px solid #FFFFFF",
	},
	errorMsg: {
		color: "red",
		textTransform: "capitalize",
	},
});

export default useStyles;
