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
	InputAdornment,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import useStyles from "../../Styles/table.styles";
import SearchIcon from "@material-ui/icons/Search";
import Popup from "../Popup/popup";
import EditPopUp from "../EditPopUp/EditPopUp";
import AddTaskForm from "../AddTaskFrom/AddTaskForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getSingleTask, loadTasks } from "../../../redux/actions";
import ConfirmDialog from "../ConfirmDialog/index";
import EditTaskForm from "../EditTaskForm/EditTaskForm";

const useButton = makeStyles({
	root: {
		color: "#FFFFFF",
		width: 164,
		height: 40,
		background: "#09A79E",
		"&:hover": {
			background: "#09A79E",
		},
		borderRadius: 2,
		marginLeft: 20,
	},
});

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
	createData("", "", "", "", "", ""),
	createData("", "", "", "", "", ""),
	createData("", "", "", "", "", ""),
	createData("", "", "", "", "", ""),
	createData("", "", "", "", "", ""),
	createData("", "", "", "", "", ""),
	createData("", "", "", "", "", ""),
	createData("", "", "", "", "", ""),
	createData("", "", "", "", "", ""),
	createData("", "", "", "", "", ""),
];

export default function BasicTable() {
	const [confirmDialog, setConfirmDialog] = useState({
		isOpen: false,
		title: "",
		subTitle: "",
	});
	let dispatch = useDispatch();
	const { tasks } = useSelector((state) => state.data);
	let taskDatas = tasks.data;
	console.log(taskDatas);

	const classes = useStyles();
	const buttonClasses = useButton();

	const [openPopup, setOpenPopup] = useState(false);
	const [openEditPopup, setOpenEditPopup] = useState(false);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	const emptyRows =
		rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

	const handleDelete = (_id) => {
		setConfirmDialog({
			...confirmDialog,
			isOpen: false,
		});
		dispatch(deleteTask(_id));
	};

	// const handleEdit = () => {
	// 	setOpenEditPopup(true)
	// 	dispatch(getSingleTask(_id))
	// }

	useEffect(() => {
		dispatch(loadTasks());
	}, []);

	function getPriority(key) {
		switch (key) {
			case 1:
				return "High";
			case 2:
				return "Medium";
			case 3:
				return "Low";
			default:
				break;
		}
	}

	function getType(key) {
		switch (key) {
			case 1:
				return "Task";
			case 2:
				return "Story";
			case 3:
				return "Bug";
			default:
				break;
		}
	}

	function getLabel(key) {
		switch (key) {
			case 1:
				return "Feature, ";
			case 2:
				return "Front end, ";
			case 3:
				return "Change request, ";
			case 4:
				return "Back end, ";
			default:
				break;
		}
	}

	return (
		<>
			<ThemeProvider>
				<TableContainer
					className={classes.tableContainer}
					component={Paper}
					sx={{ boxShadow: "none" }}
				>
					<Toolbar>
						<TextField
							size="small"
							className={classes.searchInput}
							variant="outlined"
							placeholder="Search"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start" style={{ height: "40" }}>
										<SearchIcon className={classes.searchIcon} />
									</InputAdornment>
								),
							}}
							// onChange={ handleSearch }
						/>
						<Button classes={buttonClasses} onClick={() => setOpenPopup(true)}>
							Add Task
						</Button>
					</Toolbar>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
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
							{/* { rowsAfterPagingAndSorting().map((row) => ( */}
							{taskDatas &&
								taskDatas
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((task, index) => (
										<>
											<StyledTableRow
												key={task._id}
												sx={{
													"&:last-child td, &:last-child th": { border: 0 },
												}}
											>
												<StyledTableCell component="th" scope="row">
													{task.dueDate.substring(0, 10)}
												</StyledTableCell>
												<StyledTableCell>{task.title}</StyledTableCell>
												<StyledTableCell>{task.description}</StyledTableCell>
												<StyledTableCell>
													{getPriority(task.priority)}
												</StyledTableCell>
												<StyledTableCell>{getType(task.type)}</StyledTableCell>
												<StyledTableCell>
													{getLabel(...task.label)}
												</StyledTableCell>
												<StyledTableCell>
													<Button
														className={classes.button}
														color="secondary"
														onClick={() => setOpenEditPopup(true)}
													>
														Edit
													</Button>
												</StyledTableCell>
												<StyledTableCell>
													<Button
														className={classes.button}
														color="secondary"
														onClick={() => {
															setConfirmDialog({
																isOpen: true,
																title:
																	"Are you sure you want to delete the Task?",
																subTitle:
																	"By giving delete the task will be deleted permanently",
																onConfirm: () => {
																	handleDelete(task._id);
																},
															});
														}}
													>
														DELETE
													</Button>
													<ConfirmDialog
														confirmDialog={confirmDialog}
														setConfirmDialog={setConfirmDialog}
													/>
												</StyledTableCell>
											</StyledTableRow>
											<Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
												<AddTaskForm props={setOpenPopup} />
											</Popup>
											<EditPopUp
												openEditPopup={openEditPopup}
												setOpenEditPopup={setOpenEditPopup}
											>
												<EditTaskForm />
											</EditPopUp>
										</>
									))}
							{emptyRows > 0 && (
								<StyledTableRow style={{ height: 53 * emptyRows }}>
									<TableCell colSpan={6} />
								</StyledTableRow>
							)}
						</TableBody>
					</Table>
					<TablePagination
						rowsPerPageOptions={[4, 10, 15]}
						component="div"
						count={rows.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onChangePage={handleChangePage}
						onChangeRowsPerPage={handleChangeRowsPerPage}
					/>
				</TableContainer>
			</ThemeProvider>
		</>
	);
}
