import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    MenuItem,
    Menu,
    Divider,
    Box,
    InputBase,
    fade
} from '@material-ui/core';
import {Menu as MenuIcon, MoreVert as MoreVertIcon, Search as SearchIcon} from '@material-ui/icons';
import {Link, withRouter} from 'react-router-dom';

import {connect} from 'react-redux';


const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        // flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.appBar,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(3),
        width: 'auto',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginRight: theme.spacing(7),
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '20ch',
        color: theme.palette.common.white,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    menu: {
        position: 'absolute',
        right: theme.spacing(3),
    }
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
    
    const [search, setSearch] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push(`/app/search/${search}`);
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
                        {/*{`GeThiDo - ${props.stage.charAt(0).toUpperCase() + props.stage.slice(1)}`}*/}
                        {props.stage.charAt(0).toUpperCase() + props.stage.slice(1)}
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <form onSubmit={handleSubmit}>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                input: classes.input,
                            }}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        </form>
                    </div>
                    <IconButton edge='end' onClick={handleMenu} color='inherit' className={classes.menu}>
                        <MoreVertIcon/>
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={{vertical: 'top', horizontal: 'right',}}
                        keepMounted
                        transformOrigin={{vertical: 'top', horizontal: 'right',}}
                        open={open}
                        onClose={handleClose}
                    >
                        <Link to='/app/profile'>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Link>
                        <Link to='/app/settings'>
                            <MenuItem onClick={handleClose}>Settings</MenuItem>
                        </Link>
                        <Box mt={1}/>
                        <Divider/>
                        <Box mt={1}/>
                        <MenuItem onClick={() => {
                            handleClose();
                            props.logoutUser();
                        }}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
});

export default connect(mapStateToProps, {})(withRouter(TopBar));
