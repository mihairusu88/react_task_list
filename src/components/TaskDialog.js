import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { priority as priorityValues, status as statusValues } from '../actions/types';
import { connect } from 'react-redux';
import { addTask } from '../actions/tasksActions';
import PropTypes from 'prop-types';
import uuid from "uuid";

const useStyles = makeStyles(theme => ({
    titleDialog: {
        textAlign: 'center',
    },
    formControl: {
        marginTop: theme.spacing(1),
        minWidth: '50%',

        '& label': {
            marginTop: '-8px',
            padding: '0 10px',
            background: '#ffffff',

            '&.Mui-focused': {
                marginTop: '0',
            }
        }
    },
    selectElement: {
        '& .MuiSelect-select:focus': {
            backgroundColor: 'transparent'
        }
    }
}));

const TaskDialog = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        title: (props.data.task.title !== undefined) ? props.data.task.title : '',
        content: (props.data.task.description !== undefined) ? props.data.task.description : '',
        priority: (props.data.task.priority !== undefined) ? props.data.task.priority : '',
        status: (props.data.task.status !== undefined) ? props.data.task.status : statusValues.BACKLOG
    });

    const handleChangeFormFields = (e) => {
        const { value, name } = e.target;

        setState({
            ...state,
            [name]: value
        });
    };

    /**
     * Close task modal.
     */
    const handleCloseModal = () => {
        props.close();
    };

    /**
     * Add new task
     */
    const addTask = () => {
        var TaskObject = {
            id: uuid.v4(),
            title: state.title,
            description: state.content,
            priority: state.priority,
            status: state.status
        };

        props.addTask(TaskObject);
        handleCloseModal();
    }

    /**
     * Edit task
     */
    // const editTask = () => {
    //     // @TO DO ...
    // }

    return (
        <div>
            <Dialog open={props.open} onClose={handleCloseModal} aria-labelledby="add-task-form-dialog-title">
                <DialogTitle className={classes.titleDialog} id="add-task-form-dialog-title">Add Task</DialogTitle>
                <DialogContent>
                    <TextField
                        id="dialog-task-title"
                        margin="dense"
                        label="Task Title"
                        type="text"
                        variant="outlined"
                        fullWidth
                        name="title"
                        value={state.title}
                        onChange={handleChangeFormFields}
                    />
                    <TextField
                        id="dialog-task-content"
                        margin="dense"
                        label="Task Content"
                        multiline
                        rows="4"
                        variant="outlined"
                        fullWidth
                        name="content"
                        value={state.content}
                        onChange={handleChangeFormFields}
                    />
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="dialog-task-priority-outlined-label">
                            - Select Priority -
                        </InputLabel>
                        <Select
                            className={classes.selectElement}
                            margin="dense"
                            labelId="dialog-task-priority-label"
                            id="dialog-task-priority"
                            value={state.priority}
                            name="priority"
                            onChange={handleChangeFormFields}
                        >
                            <MenuItem value="">- Select Priority -</MenuItem>
                            {Object.entries(priorityValues).map(element => {
                                return (<MenuItem key={element[1]} value={element[1]}>{element[1]}</MenuItem>);
                            })}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button id="dialog-submit-button" onClick={addTask} variant="contained" color="primary" >
                        Create
                    </Button>
                    <Button id="dialog-cancel-button" onClick={handleCloseModal} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

TaskDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    addTask: PropTypes.func.isRequired,
};

export default connect(
    null,
    { addTask }
)(TaskDialog);