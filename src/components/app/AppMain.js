import React, {useState} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import {logoutUser} from '../../actions/userActions';

import {Box, Button, Container} from '@material-ui/core';
import TopBar from './TopBar';
import {makeStyles} from '@material-ui/styles';
import LeftMenu from './LeftMenu';


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 56,
        maxHeight: 'calc(100vh - 56px)',
        height: 'calc(100vh - 56px)',
        [`@media (min-width: 0px) and (orientation: landscape)`]: {
            marginTop: 48,
            maxHeight: 'calc(100vh - 48px)',
            height: 'calc(100vh - 48px)',
        },
        [`@media (min-width: 600px)`]: {
            marginTop: 64,
            maxHeight: 'calc(100vh - 64px)',
            height: 'calc(100vh - 64px)',
        },
        overflow: 'hidden',
        overflowY: 'auto',
        width: 'auto',
        marginLeft: 60,
        [`@media (min-width: 1400px)`]: {
            marginLeft: 'auto',
        },
        transition: 'margin-left 150ms cubic-bezier(0.4,0,0.6,1)',
    },
    containerOpen: {
        marginLeft: 220,
        width: 'auto',
        [`@media (min-width: 1720px)`]: {
            marginLeft: 'auto',
        },
        transition: 'margin-left 250ms cubic-bezier(0,0,0.2,1)',
    }
}));


function AppMain(props) {
    const [logout, setLogout] = useState(false);
    
    const classes = useStyles();
    
    const [drawer, setDrawer] = useState(false);
    
    const toggleDrawer = (openDrawer) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawer(openDrawer);
    };
    
    return (
        <div>
            {(logout) ? <Redirect to='/users/logout'/> : ''}
            <TopBar
                logoutUser={() => {
                    props.logoutUser();
                    setLogout(true);
                }}
                toggleDrawer={toggleDrawer}
                drawer={drawer}
            />
            <LeftMenu toggleDrawer={toggleDrawer} drawer={drawer} className={classes.leftMenu}/>
            <Container className={[classes.container, (drawer ? classes.containerOpen : '')].join(' ')} maxWidth='lg'>
                <Switch>
                    <Route path='/app/inbox'>
                        <h2>Inbox</h2>
                    </Route>
                    <Route path='/app/trash'>
                        <h2>Trash</h2>
                    </Route>
                    <Route path='/app/someday'>
                        <h2>Someday</h2>
                    </Route>
                    <Route path='/app/reference'>
                        <h2>Reference</h2>
                    </Route>
                    <Route path='/app/Next'>
                        <h2>Next</h2>
                    </Route>
                    <Route path='/app/waiting'>
                        <h2>Waiting</h2>
                    </Route>
                    <Route path='/app/projects'>
                        <h2>Projects</h2>
                    </Route>
                    <Route path='/app/calendar'>
                        <h2>Calendar</h2>
                    </Route>
                    <Route path='/app/completed'>
                        <h2>Completed</h2>
                    </Route>
                    <Route path='/app'>
                        <Redirect to='/app/inbox'/>
                    </Route>
                </Switch>
            </Container>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(mapStateToProps, {logoutUser})(AppMain);
