import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import Textfield from "../FormsUI/Textfield/index";
import ButtonSubmit from "../FormsUI/Buttons/index";
import { Button } from "@material-ui/core";
import { Axios } from "axios";
import { Link } from "react-router-dom";
import useStyles from "../Styles/login&signup.styles";
import axiosInstance from "../../helpers/axios";
import path from "../../helpers/apiURL"
const WhiteTypography = withStyles({
	root: {
		color: "#FFFFFF",
	},
})(Typography);

const INITIAL_FORM_STATE = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};

const FORM_VALIDATION = Yup.object().shape({
	firstName: Yup.string()
		.max(15, "Must be 15 characters or less")
		.required("Required"),
	lastName: Yup.string()
		.max(20, "Must be 20 characters or less")
		.required("Required"),
	email: Yup.string().email("Invalid email address").required("Required"),
	password: Yup.string().required("Required"),
});

const Signup = () => {
	const classes = useStyles();

	return (
		<Grid container style={{ minHeight: "100vh" }}>
			<Grid item xs={3} md={12} className={classes.topBarContainer}>
				Need an account ?{" "}
				<Link to="/">
				<Button
					className={classes.entryFormToogle}
					variant="outlined"
				>
					Login
				</Button>
				</Link>
			</Grid>
			<Grid item md={6} className={classes.formikContainer}>
				<Formik
					initialValues={{ ...INITIAL_FORM_STATE }}
					validationSchema={FORM_VALIDATION}
					onSubmit={(values, { setSubmitting }) => {
						axiosInstance
							.post(path.SIGNUP_URL, values)
							.then((res) => {
								alert("sign up succcesfull");
								console.log("res", res.data);
							})
							.catch((err) => {
								alert(err.response.data.errors);
								console.log("err", err.response.data.errors);
							});
					}}
				>
					<Form className={classes.formContainer}>
						<Grid container justifyContent="center">
							<WhiteTypography variant="h3">SignUp</WhiteTypography>
						</Grid>

						<Typography className={classes.textfieldTypography}>
							First Name
						</Typography>
						<Textfield name="firstName" className={classes.textfield} />

						<Typography className={classes.textfieldTypography}>
							Last Name
						</Typography>
						<Textfield name="lastName" className={classes.textfield} />

						<Typography className={classes.textfieldTypography}>
							Email_ID
						</Typography>
						<Textfield name="email" className={classes.textfield} />

						<Typography className={classes.textfieldTypography}>
							Password
						</Typography>
						<Textfield name="password" className={classes.textfield} />

						<ButtonSubmit>Submit</ButtonSubmit>
					</Form>
				</Formik>
			</Grid>
		</Grid>
	);
};

export default Signup;
