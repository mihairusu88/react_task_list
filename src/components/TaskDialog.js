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
import { priority as priorityValues } from '../actions/types';
import { connect } from 'react-redux';
import { addTask, editTask } from '../actions/tasksActions';
import { closeTaskModal } from '../actions/modalsActions';
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
    const { modals } = props.modals;
    const isEdit = (modals.taskModal.content.id !== undefined) ? true : false;
    const [formData, setFormData] = React.useState(
        {
            title: '',
            description: '',
            priority: '',
        }
    );

    /**
     * Set form values with redux values.
     */
    React.useEffect(() => {
        setFormData(
            {
                id: (modals.taskModal.content.id !== undefined) ? modals.taskModal.content.id : uuid.v4(),
                title: (modals.taskModal.content.title !== undefined) ? modals.taskModal.content.title : '',
                description: (modals.taskModal.content.description !== undefined) ? modals.taskModal.content.description : '',
                priority: (modals.taskModal.content.priority !== undefined) ? modals.taskModal.content.priority : '',
                status: (modals.taskModal.content.status !== undefined) ? modals.taskModal.content.status : ''
            }
        )
    }, [modals]);

    console.log(formData);


    /**
     * Set form data values.
     * 
     * @param {Object} e 
     */
    const handleChangeFormFields = (e) => {
        const { value, name } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    /**
     * Close task modal.
     */
    const handleCloseModal = () => {
        props.closeTaskModal();
    };

    /**
     * Validate form fields.
     * 
     * @param {Object} formData 
     */
    const validateFormData = () => {
        // @TO DO validate fields....
    }

    /**
     * Add task
     */
    const addTask = () => {
        validateFormData();

        props.addTask(formData);
        handleCloseModal();
    }

    /**
     * Edit task
     */
    const editTask = () => {
        validateFormData();

        props.editTask(formData);
        handleCloseModal();
    }

    return (
        <div>
            <Dialog open={modals.taskModal.open} onClose={handleCloseModal} aria-labelledby="add-task-form-dialog-title">
                <DialogTitle className={classes.titleDialog} id="add-task-form-dialog-title">{(isEdit) ? 'Edit Task' : 'Add Task'}</DialogTitle>
                <DialogContent>
                    <TextField
                        id="dialog-task-title"
                        margin="dense"
                        label="Task Title"
                        type="text"
                        variant="outlined"
                        fullWidth
                        name="title"
                        value={formData.title}
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
                        name="description"
                        value={formData.description}
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
                            value={formData.priority}
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
                    <Button id="dialog-submit-button" onClick={(isEdit) ? editTask : addTask} variant="contained" color="primary" >
                        {(isEdit) ? 'Edit' : 'Create'}
                    </Button>
                    <Button id="dialog-cancel-button" onClick={handleCloseModal} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const mapStateToProps = state => ({
    modals: state.modals
});

TaskDialog.propTypes = {
    addTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    closeTaskModal: PropTypes.func.isRequired,
};

export default connect(
    mapStateToProps,
    { addTask, editTask, closeTaskModal }
)(TaskDialog);