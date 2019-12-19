import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Tooltip from '@material-ui/core/Tooltip';
import { Link as RouterLink } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { loadUsers } from '../actions/usersActions';

const styles = theme => ({
    alertInfo: {
        width: '100%',
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        margin: '15px 16px',
        backgroundColor: cyan[500]
    },
    btnViewProfile: {
        fontSize: '11px',
    },
    actionsBox: {
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        justifyContent: 'flex-end',
    },
    iconBox: {
        marginLeft: '15px'
    }
})

class Users extends Component {
    componentDidMount() {
        this.props.loadUsers();
    }

    render() {
        const { classes } = this.props;
        const { users, isLoading } = this.props.users;
        const LinkVewProfile = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

        const usersContent = (
            <Grid container spacing={3}>
                {users.map((user, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} lg={4} xl={4}>
                            <Card className={classes.card}>
                                <CardHeader
                                    avatar={
                                        <Avatar></Avatar>
                                    }
                                    action={
                                        <Button className={classes.btnViewProfile} variant="contained" size="small" color="primary" component={LinkVewProfile} to={`/users/profile/${user.id}`}>
                                            View profile
                                        </Button>
                                    }
                                    title={user.name}
                                    subheader={user.role}
                                />
                                <CardActions className={classes.actionsBox} disableSpacing>
                                    <div className={classes.iconBox}>
                                        <Tooltip arrow title={user.email} placement="top">
                                            <EmailIcon fontSize="small" />
                                        </Tooltip>
                                    </div>
                                    <div className={classes.iconBox}>
                                        <Tooltip arrow title={user.phone} placement="top">
                                            <PhoneIcon fontSize="small" />
                                        </Tooltip>
                                    </div>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })
                }

            </Grid >
        );

        const usersNotFoundContent = (
            <SnackbarContent className={classes.alertInfo}
                message="No users found."
                role="alert"
            />
        );

        return (
            (isLoading === false) ?
                (users.length > 0) ? usersContent : usersNotFoundContent
                :
                <div className="loader">
                    <div className="loading-circle"></div>
                </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        { loadUsers }
    )
)(Users);