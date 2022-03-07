import React from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
    Radio,
    Grid,
    Typography,
    Checkbox,
} from '@material-ui/core'
import useStyles from "../Styles/addtaskform.styles"
import CreateBtn from '../FormsUI/CreateBtn/CreateBtn';
import CancelBtn from '../FormsUI/CancelBtn/CancelBtn';
import Textfield from "../FormsUI/Textfield/index"
import SelectWrapper from "../FormsUI/Select/index"
import Priorities from "../../Data/Priorities.json";
import { useDispatch, useSelector } from 'react-redux';
import { editTask, getTask } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

// const stylesRadio = theme => ({
//     radio: {
//         '&$checked': {
//             color: '#09A79E'
//         }
//     },
//     checked: {}
// })

const INITIAL_FORM_STATE = {
    title: "",
    description: "",
    dueDate: "",
    label: [],
    priority: "1",
    type: "1",
};

const FORM_VALIDATION = Yup.object().shape({
    // title: Yup.string()
    //     .required('Required'),
    // description: Yup.string()
    //     .required('Required'),
    // // label: Yup.array()
    // //     .required('Select atleast one'),
    // priority: Yup.string()
    //     .required('Required'),
    // type: Yup.string()
    // .required('Required'),
});

const EditTaskForm = (props) => {
    const classes = useStyles();
    let dispatch = useDispatch();
    const { task } = useSelector((state) => state.data)
    const setOpenEditPopup = props.setOpenEditPopup;

    // useEffect(() => {
    //     dispatch(getTask(_id))
    // }, [])

    return (
        <Formik initialValues={ INITIAL_FORM_STATE }
            validationSchema={ FORM_VALIDATION }
            onSubmit={ (task, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(task);
                    setSubmitting(false);
                    // dispatch(editTask(_id));
                })
            } }>
            <Form className={ classes.formContainer } color="tertiary">
                <Grid Container className={ classes.grid }>
                    <Typography>
                        Title
                    </Typography>
                    <Textfield variant='outlined' color='secondary' size="small" name='title' className={ classes.textfield } />
                    <Typography className={ classes.textfieldTypography }>
                        Description
                    </Typography>
                    <Textfield
                        className={ classes.textarea }
                        name='description'
                        aria-label="maximum height"
                        multiline
                        rows={ 4 }
                        maxRows={ 10 }
                    />

                    <Grid style={ { marginTop: "10px" } } container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } }>
                        <Grid item xs={ 6 }>
                            <Typography color='secondary'>
                                Date
                            </Typography>
                            <Textfield style={ { width: 250 } } type="date" color='secondary' variant='outlined' size="small" name='dueDate' />
                        </Grid>
                        <Grid item xs={ 6 }>
                            <Typography color='secondary' >Type</Typography>
                            <Field name="type" color="primary" type="radio" as={ Radio } value="1" />
                            Task
                            <Field name="type" color="primary" type="radio" as={ Radio } value="2" />
                            Story
                            <Field name="type" color="primary" type="radio" as={ Radio } value="3" />
                            Bug
                        </Grid>
                    </Grid>
                    <Grid style={ { marginTop: "10px", } } container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } }>
                        <Grid item xs={ 6 }>
                            <Typography color='secondary' >Priority</Typography>
                            <SelectWrapper
                                style={ { width: 250 } }
                                name="priority"
                                options={ Priorities }
                            />
                        </Grid>
                        <Grid item xs={ 6 }>
                            <Typography>Label</Typography>
                            <Grid container >
                                <Grid item>
                                    <Field name="label" color="primary" type="checkbox" as={ Checkbox } value="1" />
                                    Feature
                                </Grid>
                                <Grid item>
                                    <Field name="label" color="primary" type="checkbox" as={ Checkbox } value="2" />
                                    Front end
                                </Grid>

                                <Grid item>
                                    <Field name="label" color="primary" type="checkbox" as={ Checkbox } value="3" />
                                    Change request
                                </Grid>

                                <Grid item>
                                    <Field name="label" color="primary" type="checkbox" as={ Checkbox } value="4" />
                                    Back end
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={ { marginTop: "10px", justifyContent: "center" } } container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 1, md: 3 } }>
                        <CancelBtn onClick={ () => setOpenEditPopup(false) } >Cancel</CancelBtn>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <CreateBtn >Update</CreateBtn>
                    </Grid>
                </Grid>
            </Form>
        </Formik >
    )
}

export default EditTaskForm;