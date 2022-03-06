import React, { useState, useEffect } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
	TablePagination,
	Toolbar,
	TextField,
	InputBase,
	InputAdornment,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import useStyles from "../Styles/table.styles"
import SearchIcon from "@material-ui/icons/Search";
import Popup from "../Popup/popup";
import AddTaskForm from "../AddTaskFrom/AddTaskForm";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "../../redux/actions";

const useButton = makeStyles({
	root: {
		color: "#FFFFFF",
		width: 164,
		height: 40,
		background: "#09A79E",
		'&:hover': {
			background: "#09A79E"
		},
		borderRadius: 2,
		marginLeft: 20,
	}
})

const useOutlinedInputStyles = makeStyles((theme) => ({
	root: {
		height: 40,
		"& $notchedOutline": {
			borderColor: "red",
		},
		"&:hover $notchedOutline": {
			borderColor: "blue",
		},
		"&$focused $notchedOutline": {
			borderColor: "green",
		},
	},
	focused: {},
	notchedOutline: {},
}));

const StyledTableCell = withStyles({
	root: {
		borderBottom: "none",
		color: "#FFFFFF",
	},
})(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: "#2B2C41",
		},
		"&:nth-of-type(even)": {
			backgroundColor: "#3A3B55",
		},
	},
}))(TableRow);

function createData(date, title, description, priority, type, label) {
	return { date, title, description, priority, type, label };
}

const rows = [
	createData(
		"23 june 2020",
		"Reduce churn rate from 2...",
		"Amet minim mollit non deserunt ulla...",
		"Highest",
		"Task",
		"Feature, Front end,.."
	),
	createData(
		"23 june 2020",
		"Reduce churn rate from 2...",
		"Amet minim mollit non deserunt ulla...",
		"Highest",
		"Task",
		"Feature, Front end,.."
	),
	createData(
		"23 june 2020",
		"Reduce churn rate from 2...",
		"Amet minim mollit non deserunt ulla...",
		"Highest",
		"Task",
		"Feature, Front end,.."
	),
	createData(
		"23 june 2020",
		"Reduce churn rate from 2...",
		"Amet minim mollit non deserunt ulla...",
		"Highest",
		"Task",
		"Feature, Front end,.."
	),
	createData(
		"23 june 2020",
		"Reduce churn rate from 2...",
		"Amet minim mollit non deserunt ulla...",
		"Highest",
		"Task",
		"Feature, Front end,.."
	),
	createData(
		"23 june 2020",
		"Reduce churn rate from 2...",
		"Amet minim mollit non deserunt ulla...",
		"Highest",
		"Task",
		"Feature, Front end,.."
	),
	createData(
		"23 june 2020",
		"Reduce churn rate from 2...",
		"Amet minim mollit non deserunt ulla...",
		"Highest",
		"Task",
		"Feature, Front end,.."
	),
	createData(
		"23 june 2020",
		"Reduce churn rate from 2...",
		"Amet minim mollit non deserunt ulla...",
		"Highest",
		"Task",
		"Feature, Front end,.."
	),
	createData(
		"23 june 2020",
		"Reduce churn rate from 2...",
		"Amet minim mollit non deserunt ulla...",
		"Highest",
		"Task",
		"Feature, Front end,.."
	),
];

export default function BasicTable() {
	let dispatch = useDispatch();
	const { tasks } = useSelector(state => state.data)
	let taskData = tasks.data.label;
	console.log(taskData)
	const classes = useStyles();
	const outlinedInputClasses = useOutlinedInputStyles();
	const buttonClasses = useButton();

	const pages = [4, 10, 15];

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
	const [filterFn, setFilterFn] = useState({
		fn: (items) => {
			return items;
		},
	});
	const [openPopup, setOpenPopup] = useState(false);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const rowsAfterPagingAndSorting = () => {
		return rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
	};

	const handleSearch = (e) => {
		let target = e.target;
		setFilterFn({
			fn: (items) => {
				if ((target.value = "")) return items;
				else return items.filter((x) => x.title.toLowerCase().includes(target));
			},
		});
	};

	useEffect(() => {
		dispatch(loadTasks());
	}, []);

	return (
		<>
			<ThemeProvider>
				<TableContainer
					className={ classes.tableContainer }
					component={ Paper }
					sx={ { boxShadow: "none" } }
				>
					<Toolbar>
						<TextField
							size="small"
							classes={ outlinedInputClasses }
							className={ classes.searchInput }
							variant="outlined"
							placeholder="Search"
							InputProps={ {
								startAdornment: (
									<InputAdornment position="start" style={ { height: "40" } }>
										<SearchIcon className={ classes.searchIcon } />
									</InputAdornment>
								),
							} }
							onChange={ handleSearch }
						/>
						<Button
							classes={ buttonClasses }
							onClick={ () => setOpenPopup(true) }
						>
							Add Task
						</Button>
					</Toolbar>
					<Table sx={ { minWidth: 650 } } aria-label="simple table">
						<TableHead>
							<TableRow>
								<StyledTableCell>Date</StyledTableCell>
								<StyledTableCell>Title</StyledTableCell>
								<StyledTableCell>Description</StyledTableCell>
								<StyledTableCell>Priority</StyledTableCell>
								<StyledTableCell>Type</StyledTableCell>
								<StyledTableCell>Label</StyledTableCell>
								<StyledTableCell>&nbsp;</StyledTableCell>
								<StyledTableCell>&nbsp;</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{ rowsAfterPagingAndSorting().map((row) => (
								<StyledTableRow
									key={ row.date }
									sx={ { "&:last-child td, &:last-child th": { border: 0 } } }
								>
									<StyledTableCell component="th" scope="row">
										{ row.date }
									</StyledTableCell>
									<StyledTableCell>{ row.title }</StyledTableCell>
									<StyledTableCell>{ row.description }</StyledTableCell>
									<StyledTableCell>{ row.priority }</StyledTableCell>
									<StyledTableCell>{ row.type }</StyledTableCell>
									<StyledTableCell>{ row.label }</StyledTableCell>
									<StyledTableCell>
										<Button className={ classes.button } color="secondary">
											Edit
										</Button>
									</StyledTableCell>
									<StyledTableCell>
										<Button className={ classes.button } color="secondary">
											DELETE
										</Button>
									</StyledTableCell>
								</StyledTableRow>
							)) }
						</TableBody>
					</Table>
					<TablePagination
						rowsPerPageOptions={ pages }
						component="div"
						count={ rows.length }
						rowsPerPage={ rowsPerPage }
						page={ page }
						onPageChange={ handleChangePage }
						onRowsPerPageChange={ handleChangeRowsPerPage }
					/>
				</TableContainer>
				<Popup
					openPopup={ openPopup }
					setOpenPopup={ setOpenPopup }
				>
					<AddTaskForm />
				</Popup>
			</ThemeProvider>
		</>
	);
}
