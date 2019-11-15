import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TaskDialog from './TaskDialog';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { deleteTask } from '../actions/tasksActions';
import PropTypes from 'prop-types';

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
        openModal: false,
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
     * Open/Close task modal.
     */
    const toggleTaskModal = () => {
        setState({
            ...state,
            anchorEl: null,
            openModal: !state.openModal
        });
    }

    /**
     * Open task modal and prepare for edit.
     */
    const handleEditTask = () => {
        toggleTaskModal();
    }

    /**
     * Delete task.
     */
    const handleDeleteTask = () => {
        props.deleteTask(props.task.id);
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
                <MenuItem className={classes.taskMenuItem} onClick={handleEditTask}>Edit Task</MenuItem>
                <MenuItem className={classes.taskMenuItem} onClick={handleDeleteTask}>Delete Task</MenuItem>
                {(props.task.groupId !== 4) ? <MenuItem className={classes.taskMenuItem} onClick={handleClose}>Mark as Complete</MenuItem> : ''}
            </Menu>
            <TaskDialog open={state.openModal} close={toggleTaskModal} data={{ task: props.task }} />
        </React.Fragment>
    )
}

TaskMenu.propTypes = {
    deleteTask: PropTypes.func.isRequired,
};

export default connect(
    null,
    { deleteTask }
)(TaskMenu);