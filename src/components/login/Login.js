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
import { Axios } from "axios";
import axiosInstance from "../../helpers/axios";

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
		<Grid container style={ { minHeight: "100vh" } }>
			<Grid item xs={ 3 } md={ 12 } className={ classes.topBarContainer }>
				Need an account ?{ " " }
				<Button
					as={ Link }
					to="/signup"
					href="/signup"
					className={ classes.entryFormToogle }
					variant="outlined"
				>
					Signup
				</Button>
			</Grid>

			<Grid item md={ 6 } className={ classes.formikContainer }>
				<Formik
					initialValues={ { ...INITIAL_FORM_STATE } }
					validationSchema={ FORM_VALIDATION }
					onSubmit={ (values, { setSubmitting }) => {
						setTimeout(() => {
							console.log(values);
							setSubmitting(false);

							axiosInstance
								.post("/api/users/login", values)
								.then((res) => {
									localStorage.token = JSON.stringify(res.data);
									console.log("res", res.data)
									navigate("/dashboard")
								})
								.catch((err) => alert(err.response.data.errors));
						}, 400);
					} }
				>
					<Form className={ classes.formContainer }>
						<Grid container justifyContent="center">
							<WhiteTypography variant="h3">Login</WhiteTypography>
						</Grid>

						<Typography className={ classes.textfieldTypography }>
							Email_ID
						</Typography>
						<Textfield name="email" className={ classes.textfield } />

						<Typography className={ classes.textfieldTypography }>
							Password
						</Typography>
						<Textfield name="password" className={ classes.textfield } />

						<ButtonSubmit>Submit</ButtonSubmit>
					</Form>
				</Formik>
			</Grid>
		</Grid >
	);
};

export default Login;
