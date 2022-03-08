import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    mainContainer: {
        maxWidth: "100%",
        justifyContent: "center",
    },
    topBarContainer: {
        textAlign: "right",
        paddingRight: "3vw",
        paddingTop: "4vh",
        color: "white",
    },
    formContainer: {
        width: 328,
        margin: "auto",
    },
    formikContainer: {
        margin: "auto",
        display: "flex",
        alignItems: "center",
        height: "90vh",
    },
    textfieldTypography: {
        marginTop: 20,
        color: "#FFFFFF",
    },
    textfield: {
        height: 56,
        border: "1px solid #FFFFFF",
        '&:hover': {
            border: "1px solid #FFFFFF",
        },
        borderRadius: 4,
        marginTop: 5,
    },
    submitbtnContainer: {
        width: 328,
    },
    entryFormToogle: {
        color: "white",
        border: "1px solid #fafafa",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 35,
        paddingLeft: 35,
    },
})

export default useStyles;
