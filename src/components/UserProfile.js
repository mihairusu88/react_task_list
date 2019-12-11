import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import lime from '@material-ui/core/colors/lime';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { loadUserTasks } from '../actions/tasksActions';

const styles = theme => ({
    sectionTitle: {
        width: '100%',
        fontSize: '18px',
        padding: '10px',
        textAlign: 'center',
        borderBottom: '2px solid rgba(0, 0, 0, 0.12)',
    },

    profileContainer: {
        marginTop: 0,
        marginBottom: 0,
    },
    profileInfoBox: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    profileInfoPaper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexGrow: 1,
        paddingBottom: '0 !important',
        marginBottom: '24px',
    },
    profileAvatar: {
        marginTop: '30px',
        width: '100px',
        height: '100px',
    },
    userTitle: {
        width: '100%',
        margin: '15px 0 5px 0',
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    userDescription: {
        fontSize: '12px',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        marginBottom: '15px'
    },
    userDetailsIcon: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        borderRight: '2px solid rgba(0, 0, 0, 0.12)',
    },
    userDetailsText: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        '& a': {
            textDecoration: 'none',
            color: theme.palette.primary.main,
        }
    },
    profileTasksBox: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexGrow: 1,
        marginBottom: '24px',
    },
    userTaskContainer: {
        width: '100%'
    },
    taskPriority: {
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
})

class UserProfile extends Component {
    componentDidMount() {
        const userId = 1;
        this.props.loadUserTasks(userId);
    }

    render() {
        const { classes } = this.props;
        const { tasks } = this.props.tasks;
        return (
            <Grid className={classes.profileContainer} container spacing={3}>
                <Grid className={classes.profileInfoBox} item xs={12} sm={5} lg={5} xl={5}>
                    <Paper className={classes.profileInfoPaper}>
                        <Avatar className={[classes.primary, classes.profileAvatar].join(' ')}></Avatar>
                        <Typography className={classes.userTitle} variant="h5">John Doe</Typography>
                        <Typography className={classes.userDescription} variant="h6">Web Developer</Typography>
                        <Divider style={{ width: '100%' }} />
                        <Grid container spacing={0}>
                            <Grid className={classes.userDetailsIcon} item xs={12} sm={3} lg={3} xl={3}>
                                <EmailIcon />
                            </Grid>
                            <Grid className={classes.userDetailsText} item xs={12} sm={9} lg={9} xl={9}>
                                <a href="mailto:john.doe@example.com">john.doe@example.com</a>
                            </Grid>
                            <Divider style={{ width: '100%' }} />
                            <Grid className={classes.userDetailsIcon} item xs={12} sm={3} lg={3} xl={3}>
                                <PhoneIcon />
                            </Grid>
                            <Grid className={classes.userDetailsText} item xs={12} sm={9} lg={9} xl={9}>
                                +97 799 376-4681
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper className={classes.profileTasksBox}>
                        <Typography className={classes.sectionTitle} variant="h5">Current Tasks</Typography>
                        <List className={classes.userTaskContainer} dense={true}>
                            {tasks.map((task, index) => {
                                return (
                                    <React.Fragment>
                                        {(index > 0) ? <Divider style={{ width: '100%' }} /> : ''}
                                        <ListItem key={task.id}>
                                            <ListItemText
                                                primary={task.title}
                                            />
                                            <Typography className={[classes.taskPriority, task.priority.toLowerCase()].join(' ')} variant="caption">{task.priority}</Typography>
                                        </ListItem>

                                    </React.Fragment>
                                );
                            })}
                        </List>
                    </Paper>
                </Grid>
                <Grid className={classes.profileInfoBox} item xs={12} sm={7} lg={7} xl={7}>
                    <Paper className={classes.profileInfoPaper}>
                        <Typography className={classes.sectionTitle} variant="h5">Activity</Typography>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
})

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        { loadUserTasks }
    )
)(UserProfile);