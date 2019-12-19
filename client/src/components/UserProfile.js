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
import cyan from '@material-ui/core/colors/cyan';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { loadUserTasks } from '../actions/tasksActions';
import { loadUser } from '../actions/usersActions';

const styles = theme => ({
    sectionTitle: {
        width: '100%',
        fontSize: '18px',
        padding: '10px',
        textAlign: 'center',
        borderBottom: '2px solid rgba(0, 0, 0, 0.12)',
        background: 'rgba(0, 0, 0, 0.08)',
        borderRadius: '4px 4px 0 0',
    },

    profileContainer: {
        marginTop: 0,
        marginBottom: 0,
    },
    profileInfoBox: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start'
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
    alertInfo: {
        width: 'calc(100% - 32px)',
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        margin: '15px 16px',
        backgroundColor: cyan[500]
    },
    profileForm: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        padding: '15px',
    }
});

class UserProfile extends Component {
    state = {
        showPassword: false,
        showConfirmPassword: false,
    }

    static propTypes = {
        loadUser: PropTypes.func.isRequired,
        loadUserTasks: PropTypes.func.isRequired,
        tasks: PropTypes.object.isRequired,
        users: PropTypes.object.isRequired,
        auth: PropTypes.object.isRequired,
    };

    componentDidMount() {
        const urlSplited = (window.location.href).split('/');
        const userId = urlSplited.pop();
        this.props.loadUser(parseInt(userId));
        this.props.loadUserTasks(parseInt(userId));
    }

    handleClickShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        });
    }

    handleClickShowConfirmPassword = () => {
        this.setState({
            showConfirmPassword: !this.state.showConfirmPassword
        });
    }

    render() {
        const { classes } = this.props;
        const { tasks, isLoading } = this.props.tasks;
        const { users } = this.props.users;
        const { isAuth, user: authUser } = this.props.auth;
        const user = (users[0] !== undefined) ? users[0] : {};

        console.log('render', this.props.auth.isAuth);

        const userContent = (
            <Grid className={classes.profileContainer} container spacing={3}>
                <Grid className={classes.profileInfoBox} item xs={12} sm={6} lg={6} xl={6}>
                    <Paper className={classes.profileInfoPaper}>
                        <Avatar className={[classes.primary, classes.profileAvatar].join(' ')}></Avatar>
                        <Typography className={classes.userTitle} variant="h5">{user.name}</Typography>
                        <Typography className={classes.userDescription} variant="h6">{user.role}</Typography>
                        <Divider style={{ width: '100%' }} />
                        <Grid container spacing={0}>
                            <Grid className={classes.userDetailsIcon} item xs={12} sm={3} lg={3} xl={3}>
                                <EmailIcon />
                            </Grid>
                            <Grid className={classes.userDetailsText} item xs={12} sm={9} lg={9} xl={9}>
                                <a href={`mailto:${user.email}`}>{user.email}</a>
                            </Grid>
                            <Divider style={{ width: '100%' }} />
                            <Grid className={classes.userDetailsIcon} item xs={12} sm={3} lg={3} xl={3}>
                                <PhoneIcon />
                            </Grid>
                            <Grid className={classes.userDetailsText} item xs={12} sm={9} lg={9} xl={9}>
                                {user.phone}
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper className={classes.profileTasksBox}>
                        <Typography className={classes.sectionTitle} variant="h5">Current Tasks</Typography>
                        <List className={classes.userTaskContainer} dense={true}>
                            {
                                (isLoading === false) ?
                                    (tasks.length > 0) ?
                                        tasks.map((task, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    {(index > 0) ? <Divider style={{ width: '100%' }} /> : ''}
                                                    <ListItem key={task.id}>
                                                        <ListItemText
                                                            primary={task.title}
                                                        />
                                                        <Typography className={[classes.taskPriority, task.priority.toLowerCase()].join(' ')} variant="caption">{task.priority}</Typography>
                                                    </ListItem>

                                                </React.Fragment>
                                            );
                                        })
                                        :
                                        <SnackbarContent className={classes.alertInfo}
                                            message="No tasks found."
                                            role="alert"
                                        />
                                    :
                                    <div className="loader">
                                        <div className="loading-circle"></div>
                                    </div>
                            }
                        </List>
                    </Paper>
                </Grid>
                <Grid className={classes.profileInfoBox} item xs={12} sm={6} lg={6} xl={6}>
                    <Paper className={classes.profileInfoPaper}>
                        <Typography className={classes.sectionTitle} variant="h5">Activity</Typography>
                        <SnackbarContent className={classes.alertInfo}
                            message="This user has no activity."
                            role="alert"
                        />
                    </Paper>
                </Grid>
                {(isAuth && user.id === authUser.id) ?
                    <Grid className={classes.profileInfoBox} item xs={12} sm={12} lg={12} xl={12}>
                        <Paper className={classes.profileInfoPaper}>
                            <Typography className={classes.sectionTitle} variant="h5">Profile Info</Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6} lg={6} xl={6}>
                                    <form className={classes.profileForm} noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={6} lg={6} xl={6}>
                                                <TextField
                                                    // error={false}
                                                    id="profile-user-name"
                                                    margin="dense"
                                                    label="Name"
                                                    type="text"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="user_name"
                                                    defaultValue={(this.props.auth.user !== null) ? this.props.auth.user.name : ''}
                                                // onChange={handleChangeFormFields}
                                                // helperText={formValidation.title.message}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} lg={6} xl={6}>
                                                <TextField
                                                    error={false}
                                                    id="profile-user-role"
                                                    margin="dense"
                                                    label="Role"
                                                    type="text"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="user_role"
                                                    defaultValue={(this.props.auth.user !== null) ? this.props.auth.user.role : ''}
                                                // onChange={handleChangeFormFields}
                                                // helperText={formValidation.title.message}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} lg={6} xl={6}>
                                                <TextField
                                                    error={false}
                                                    id="profile-user-email"
                                                    margin="dense"
                                                    label="Email"
                                                    type="text"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="user_email"
                                                    defaultValue={(this.props.auth.user !== null) ? this.props.auth.user.email : ''}
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
                                                    }}
                                                // onChange={handleChangeFormFields}
                                                // helperText={formValidation.title.message}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} lg={6} xl={6}>
                                                <TextField
                                                    error={false}
                                                    id="profile-user-phone"
                                                    margin="dense"
                                                    label="Phone"
                                                    type="text"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="user_phone"
                                                    defaultValue={(this.props.auth.user !== null) ? this.props.auth.user.phone : ''}
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start"><PhoneIcon /></InputAdornment>,
                                                    }}
                                                // onChange={handleChangeFormFields}
                                                // helperText={formValidation.title.message}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} lg={12} xl={12}>
                                                <Button variant="contained" color="primary" type="submit">
                                                    Update Profile
                                            </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                                <Grid item xs={12} sm={6} lg={6} xl={6}>
                                    <form className={classes.profileForm} noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()} >
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={12} lg={12} xl={12}>
                                                <TextField
                                                    error={false}
                                                    id="profile-user-password"
                                                    margin="dense"
                                                    label="Password"
                                                    type={(this.state.showPassword) ? 'text' : 'password'}
                                                    variant="outlined"
                                                    fullWidth
                                                    name="user_password"
                                                    InputProps={{
                                                        endAdornment: <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={this.handleClickShowPassword}
                                                                edge="end"
                                                            >
                                                                {(this.state.showPassword) ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                            </IconButton>
                                                        </InputAdornment>,
                                                    }}
                                                // onChange={handleChangeFormFields}
                                                // helperText={formValidation.title.message}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} lg={12} xl={12}>
                                                <TextField
                                                    error={false}
                                                    id="profile-user-confirm-password"
                                                    margin="dense"
                                                    label="Confirm Password"
                                                    type={(this.state.showConfirmPassword) ? 'text' : 'password'}
                                                    variant="outlined"
                                                    fullWidth
                                                    name="user_confirm_password"
                                                    InputProps={{
                                                        endAdornment: <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle confirm password visibility"
                                                                onClick={this.handleClickShowConfirmPassword}
                                                                edge="end"
                                                            >
                                                                {(this.state.showConfirmPassword) ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                            </IconButton>
                                                        </InputAdornment>,
                                                    }}
                                                // onChange={handleChangeFormFields}
                                                // helperText={formValidation.title.message}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} lg={12} xl={12}>
                                                <Button variant="contained" color="primary" type="submit">
                                                    Change Password
                                            </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    :
                    ''
                }
            </Grid>
        );

        const userNotFoundContent = (
            <SnackbarContent className={classes.alertInfo}
                message="This user does not exist."
                role="alert"
            />
        );

        return (
            (users.length > 0) ? userContent : userNotFoundContent
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    tasks: state.tasks,
    users: state.users
})

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        { loadUserTasks, loadUser }
    )
)(UserProfile);