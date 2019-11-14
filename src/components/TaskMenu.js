import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                anchorEl={anchorEl}
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
                <MenuItem className={classes.taskMenuItem} onClick={handleClose}>Edit Task</MenuItem>
                <MenuItem className={classes.taskMenuItem} onClick={handleDeleteTask}>Delete Task</MenuItem>
                {(props.task.groupId !== 4) ? <MenuItem className={classes.taskMenuItem} onClick={handleClose}>Mark as Complete</MenuItem> : ''}
            </Menu>

        </React.Fragment>
    )
}

export default TaskMenu;