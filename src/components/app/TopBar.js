import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, Divider, Box} from '@material-ui/core';
import {Menu as MenuIcon, AccountCircle} from '@material-ui/icons';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';


const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.appBar,
    },
    leftMenu: {
        zIndex: theme.zIndex.drawer,
    },
}));

function TopBar(props) {
    
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <React.Fragment>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <IconButton edge='start' className={classes.menuButton} color='inherit'
                                onClick={props.toggleDrawer(!props.drawer)}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        GeThiDo
                    </Typography>
                    <div>
                        <IconButton onClick={handleMenu} color='inherit'>
                            <AccountCircle/>
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorEl}
                            anchorOrigin={{vertical: 'top', horizontal: 'right',}}
                            keepMounted
                            transformOrigin={{vertical: 'top', horizontal: 'right',}}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>{props.user.username} - profile</MenuItem>
                            <MenuItem onClick={handleClose}>Settings</MenuItem>
                            <Box mt={1}/>
                            <Divider/>
                            <Box mt={1}/>
                            <MenuItem onClick={() => {
                                handleClose();
                                props.logoutUser();
                            }}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>

        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
});

export default connect(mapStateToProps, {})(TopBar);
