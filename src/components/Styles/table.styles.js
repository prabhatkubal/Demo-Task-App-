import { makeStyles } from '@material-ui/core';

const tableStyles = makeStyles({
    tableContainer: {
        marginTop: "15vh",
        background: "transparent",
        height: "fit-content",
        boxShadow: "none",
    },
    button: {
        color: "#09A79E",
        '&:hover': {
            background: "transparent",
        },
    },
    searchInput: {
        height: 40,
        '& .MuiOutlinedInput-adornedStart-164': {
            height: 40,
        },
        marginLeft: "auto",
        border: "1px solid #FFFFFF",
        '&:hover': {
            border: "1px solid #FFFFFF",
        },
        borderRadius: 4,
    },
    searchIcon: {
        color: "#FFFFFF",
    },
})

export default tableStyles;
