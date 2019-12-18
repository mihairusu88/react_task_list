import React from 'react';
import blue from '@material-ui/core/colors/blue';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        textAlign: 'center',
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
        background: blue[100]
    }
}));

const Footer = (props) => {
    const classes = useStyles();
    const dateNow = new Date();
    const dateYear = dateNow.getFullYear();

    return (
        <div className={classes.footer}>
            <Typography variant="body2">
                &copy; {dateYear} Copyright. All rights reserved.
            </Typography>
        </div>
    );
}

export default Footer;