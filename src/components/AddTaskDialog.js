import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    addTaskButton: {
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));

const AddTaskDialog = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Fab className={classes.addTaskButton} onClick={handleClickOpen} size="small" color="primary" aria-label="add task">
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="add-task-form-dialog-title">
                <DialogTitle id="add-task-form-dialog-title">Add Task</DialogTitle>
                <DialogContent>
                    <TextField
                        id="dialog-task-title"
                        margin="dense"
                        label="Task Title"
                        className={classes.textField}
                        type="text"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="dialog-task-content"
                        margin="dense"
                        label="Task Content"
                        multiline
                        rows="4"
                        className={classes.textField}
                        variant="outlined"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="primary" >
                        Create
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddTaskDialog;