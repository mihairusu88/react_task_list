import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { deleteTask, editTask } from '../actions/tasksActions';
import { openTaskModal } from '../actions/modalsActions';
import PropTypes from 'prop-types';
import { status as statusValues } from '../actions/types';

const useStyles = makeStyles(theme => ({
    taskMenuButton: {
        float: 'right',
        margin: '3px',
    },
    taskMenu: {
        padding: 0,
        marginTop: '10px',
        // Overwrite css to .MuiList-root
        '& ul': {
            padding: 0
        }
    },
    taskMenuItem: {
        fontSize: '14px',
    }
}));

const TaskMenu = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        anchorEl: null,
    });

    const open = Boolean(state.anchorEl);

    /**
     * Open task menu.
     */
    const handleClick = event => {
        setState({
            ...state,
            anchorEl: event.currentTarget
        });
    };

    /**
     * Close task menu.
     */
    const handleClose = () => {
        setState({
            ...state,
            anchorEl: null
        });
    };

    /**
     * Open task modal and prepare for edit.
     */
    const handleEditTask = (taskData) => {
        setState({
            ...state,
            anchorEl: null,
        });

        props.openTaskModal(taskData);
    }

    /**
     * Delete task.
     */
    const handleDeleteTask = () => {
        props.deleteTask(props.task.id);
        handleClose();
    }

    /**
     * Mark task as complete.
     */
    const handleMarkComplete = (taskData) => {
        taskData.status = statusValues.DONE;

        props.editTask(taskData);
        handleClose();
    }

    return (
        <React.Fragment>
            <IconButton
                className={classes.taskMenuButton}
                size="small"
                aria-label="more"
                aria-controls="task-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                className={classes.taskMenu}
                id={`task-menu-${props.task.id}`}
                anchorEl={state.anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem className={classes.taskMenuItem} onClick={() => handleEditTask(props.task)}>Edit Task</MenuItem>
                <MenuItem className={classes.taskMenuItem} onClick={handleDeleteTask}>Delete Task</MenuItem>
                {(props.task.groupId !== 4) ? <MenuItem className={classes.taskMenuItem} onClick={() => handleMarkComplete(props.task)}>Mark as Complete</MenuItem> : ''}
            </Menu>
        </React.Fragment>
    )
}

TaskMenu.propTypes = {
    deleteTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    openTaskModal: PropTypes.func.isRequired,
};

export default connect(
    null,
    { deleteTask, editTask, openTaskModal }
)(TaskMenu);