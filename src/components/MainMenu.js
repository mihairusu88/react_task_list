import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/Close';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PieChartIcon from '@material-ui/icons/PieChart';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    userMenu: {
        marginLeft: 'auto',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuLink: {
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        top: '64px',
        height: 'calc(100% - 101px)',
        background: theme.palette.primary.main,

        '& > ul': {
            padding: 0,
            color: '#FFFFFF',

            '& .MuiListItem-root': {
                padding: 0,
                borderBottom: '1px solid rgba(255, 255, 255, 0.15)',

                '&:first-child': {
                    borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                },

                '&:hover': {
                    background: 'rgba(255, 255, 255, 0.12)'
                },

                '& a': {
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#FFFFFF',
                    padding: '8px 25px'
                }
            },

            '& .MuiListItemIcon-root': {
                color: '#FFFFFF',
                minWidth: '35px'
            }
        }
    }
}));

const MainMenu = (props) => {
    const classes = useStyles();
    const auth = true;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openSideMenu, setOpenSideMenu] = React.useState(false);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSideMenuToggle = () => {
        setOpenSideMenu(!openSideMenu);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleSideMenuToggle}>
                        {(!openSideMenu) ? <MenuIcon /> : <CloseIcon />}
                    </IconButton>
                    {auth && (
                        <div className={classes.userMenu}>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    <RouterLink className={classes.menuLink} to="/users/profile/1">Profile</RouterLink>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={openSideMenu}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <List>
                    <ListItem>
                        <RouterLink to="/dashboard">
                            <ListItemIcon>
                                <PieChartIcon></PieChartIcon>
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </RouterLink>
                    </ListItem>
                    <ListItem>
                        <RouterLink to="/">
                            <ListItemIcon>
                                <ListAltIcon></ListAltIcon>
                            </ListItemIcon>
                            <ListItemText primary="Tasks" />
                        </RouterLink>
                    </ListItem>
                    <ListItem>
                        <RouterLink to="/users">
                            <ListItemIcon>
                                <GroupIcon></GroupIcon>
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </RouterLink>
                    </ListItem>
                    <ListItem>
                        <RouterLink to="/settings">
                            <ListItemIcon>
                                <SettingsIcon></SettingsIcon>
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </RouterLink>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

export default MainMenu;