import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Textfield from "../FormsUI/Textfield/index";
import ButtonSubmit from "../FormsUI/Buttons";
import { Button } from "@material-ui/core";
import useStyles from "../Styles/login&signup.styles";
import axiosInstance from "../../helpers/axios";
import path from "../../helpers/apiURL";
import { sha512 } from "js-sha512";

const WhiteTypography = withStyles({
	root: {
		color: "#FFFFFF",
	},
})(Typography);

const INITIAL_FORM_STATE = {
	email: "",
	password: "",
};

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string().email("Invalid email address").required("Required"),
	password: Yup.string().required("Required"),
});

const Login = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	return (
		<Grid container style={{ minHeight: "100vh" }}>
			<Grid item xs={3} md={12} className={classes.topBarContainer}>
				Need an account ?{" "}
				<Link to="/signup">
					<Button className={classes.entryFormToogle} variant="outlined">
						Signup
					</Button>
				</Link>
			</Grid>
			<Grid item md={6} className={classes.formikContainer}>
				<Formik
					initialValues={{
						...(INITIAL_FORM_STATE &&
							INITIAL_FORM_STATE.password ===
								sha512(INITIAL_FORM_STATE.password)),
					}}
					validationSchema={FORM_VALIDATION}
					onSubmit={(values) => {
						axiosInstance
							.post(path.LOGIN_URL, values)
							.then((res) => {
								console.log(res.data.data);
								localStorage.firstname = res.data.data.firstName;
								localStorage.token = res.data.data.accessToken;
								navigate("/dashboard");
							})
							.catch((err) => alert(err.response.data.errors));
					}}
				>
					<Form className={classes.formContainer}>
						<Grid container justifyContent="center">
							<WhiteTypography variant="h3">Login</WhiteTypography>
						</Grid>

						<Typography className={classes.textfieldTypography}>
							Email_ID
						</Typography>
						<Textfield
							color="secondary"
							type="email"
							name="email"
							className={classes.textfield}
						/>

						<Typography className={classes.textfieldTypography}>
							Password
						</Typography>
						<Textfield
							color="secondary"
							type="password"
							name="password"
							className={classes.textfield}
						/>

						<ButtonSubmit>Submit</ButtonSubmit>
					</Form>
				</Formik>
			</Grid>
		</Grid>
	);
};

export default Login;
