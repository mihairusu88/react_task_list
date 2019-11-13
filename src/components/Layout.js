import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import MainMenu from './MainMenu';
import Footer from './Footer';
import GroupList from './GroupList';

const styles = theme => ({
    mainContainer: {
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
                    <GroupList></GroupList>
                </Container>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Layout);