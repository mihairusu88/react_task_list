import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import lime from '@material-ui/core/colors/lime';
import cyan from '@material-ui/core/colors/cyan';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { loadGroups } from '../actions/groupsActions';
import { loadTasks } from '../actions/tasksActions';
import { openTaskModal } from '../actions/modalsActions';
import PropTypes from 'prop-types';
import TaskMenu from './TaskMenu';
import TaskDialog from './TaskDialog';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    groupContainer: {
        padding: 0,
        textAlign: 'center',
        color: theme.palette.text.dark,
    },
    groupTitle: {
        position: 'relative',
        fontSize: '16px',
        padding: '12px 5px',
        background: '#dbdbdb',
    },
    addTaskButton: {
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)'
    },
    groupTasks: {
        padding: '5px 5px',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        background: '#f5f5f5',
    },
    taskContainer: {
        margin: theme.spacing(2),
        padding: theme.spacing(0),
        textAlign: 'left',
        color: theme.palette.text.dark,
        background: '#FFFFFF',
        cursor: 'pointer',
    },
    taskPriority: {
        borderTopLeftRadius: '4px',
        display: 'block',
        float: 'left',
        padding: '5px 15px',
        textAlign: 'center',
        lineHeight: '1.2',
        color: '#FFFFFF',
        '&.high': {
            background: red[400],
        },
        '&.medium': {
            background: orange[400]
        },
        '&.low': {
            background: lime[400]
        }
    },
    taskTitle: {
        display: 'flex',
        width: '100%',
        paddingTop: '5px',
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
    },
    alertInfo: {
        width: '100%',
        minWidth: '100px',
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        margin: '15px 0',
        backgroundColor: cyan[500]
    }
});

class GroupList extends Component {
    static propTypes = {
        loadGroups: PropTypes.func.isRequired,
        loadTasks: PropTypes.func.isRequired,
        openTaskModal: PropTypes.func.isRequired,
        groups: PropTypes.object.isRequired,
        tasks: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.loadGroups();
        this.props.loadTasks();
    }

    openModal = (groupStatus) => {
        const taskData = {
            status: groupStatus
        }

        this.props.openTaskModal(taskData);
    }

    render() {
        const { classes } = this.props;
        const { groups } = this.props.groups;
        const { tasks, isLoading } = this.props.tasks;

        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {groups.map((group) => {
                        const groupTasks = (tasks !== undefined) ? tasks.filter((task) => task.status === group.status) : [];
                        return (
                            <Grid key={group.id} item xs={12} sm={6} lg={3} xl={3}>
                                <Paper className={classes.groupContainer}>
                                    <Typography className={classes.groupTitle} variant="h6">
                                        {group.title}
                                        <Fab className={classes.addTaskButton} onClick={() => this.openModal(group.status)} size="small" color="primary" aria-label="add task">
                                            <AddIcon />
                                        </Fab>
                                    </Typography>
                                    <Divider />
                                    <Paper className={classes.groupTasks} elevation={0}>
                                        {
                                            (isLoading === false) ?
                                                (groupTasks.length > 0) ?
                                                    groupTasks.map((task) => {
                                                        return (
                                                            <Paper key={task._id} className={classes.taskContainer}>
                                                                <Typography className={[classes.taskPriority, task.priority.toLowerCase()].join(' ')} variant="caption">{task.priority}</Typography>
                                                                <TaskMenu task={task} />
                                                                <Typography className={classes.taskTitle} variant="subtitle2">{task.title}</Typography>
                                                            </Paper>
                                                        )
                                                    })
                                                    :
                                                    (
                                                        <SnackbarContent className={classes.alertInfo}
                                                            message="No tasks found."
                                                            role="alert"
                                                        />
                                                    )
                                                :
                                                <div className="loader">
                                                    <div className="loading-circle"></div>
                                                </div>
                                        }
                                    </Paper>
                                </Paper>
                            </Grid>
                        );
                    }
                    )}
                </Grid>
                <TaskDialog />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    groups: state.groups,
    tasks: state.tasks,
});

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        { loadGroups, loadTasks, openTaskModal }
    )
)(GroupList);