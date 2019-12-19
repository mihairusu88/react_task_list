import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import MainMenu from './MainMenu';
import Footer from './Footer';
import GroupList from './GroupList';
import UserProfile from './UserProfile';
import Users from './Users';
import { Switch, Route } from "react-router-dom";

const styles = theme => ({
    mainContainer: {
        marginTop: '64px',
        paddingTop: theme.spacing(3),
        minHeight: 'calc(100vh - 64px - 53px)'
    },
});

class Layout extends Component {
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <MainMenu></MainMenu>
                <Container className={classes.mainContainer} maxWidth="lg">
                    <Switch>
                        <Route exact path="/">
                            <GroupList></GroupList>
                        </Route>
                        <Route path="/users/profile">
                            <UserProfile></UserProfile>
                        </Route>
                        <Route path="/users">
                            <Users></Users>
                        </Route>
                    </Switch>
                </Container>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Layout);