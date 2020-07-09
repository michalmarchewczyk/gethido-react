import React, {useState} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import {logoutUser, getSettings} from '../../actions/userActions';

import {Container} from '@material-ui/core';
import TopBar from './TopBar';
import {makeStyles} from '@material-ui/styles';
import LeftMenu from './LeftMenu';
import TasksList from './TasksList';
import Settings from './Settings';
import Profile from './Profile';


const useStyles = makeStyles((theme) => ({
    containerDiv: {
        marginTop: 56,
        maxHeight: 'calc(100vh - 56px)',
        height: 'calc(100vh - 56px)',
        '@media (min-width: 0px) and (orientation: landscape)': {
            marginTop: 48,
            maxHeight: 'calc(100vh - 48px)',
            height: 'calc(100vh - 48px)',
        },
        '@media (min-width: 600px)': {
            marginTop: 64,
            maxHeight: 'calc(100vh - 64px)',
            height: 'calc(100vh - 64px)',
        },
        overflow: 'hidden',
        overflowY: 'auto',
    },
    container: {
        width: 'auto',
        marginLeft: 60,
        '@media (min-width: 1400px)': {
            marginLeft: 'auto',
        },
        transition: 'margin-left 150ms cubic-bezier(0.4,0,0.6,1)',
    },
    containerOpen: {
        marginLeft: 220,
        width: 'auto',
        '@media (min-width: 1720px)': {
            marginLeft: 'auto',
        },
        transition: 'margin-left 250ms cubic-bezier(0,0,0.2,1)',
    }
}));


function AppMain(props) {
    const [logout, setLogout] = useState(false);
    
    const classes = useStyles();
    
    const [drawer, setDrawer] = useState(false);
    
    const [stage, setStage] = useState('');
    
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
                stage={stage}
            />
            <LeftMenu toggleDrawer={toggleDrawer} drawer={drawer} className={classes.leftMenu}/>
            <div className={classes.containerDiv}>
                <Container className={[classes.container, (drawer ? classes.containerOpen : '')].join(' ')} maxWidth='lg'>
                    <Switch>
                        <Route path='/app/inbox'>
                            <TasksList stage='inbox' setStage={setStage}/>
                        </Route>
                        <Route path='/app/trash'>
                            <TasksList stage='trash' setStage={setStage}/>
                        </Route>
                        <Route path='/app/someday'>
                            <TasksList stage='someday' setStage={setStage}/>
                        </Route>
                        <Route path='/app/reference'>
                            <TasksList stage='reference' setStage={setStage}/>
                        </Route>
                        <Route path='/app/next'>
                            <TasksList stage='next' setStage={setStage}/>
                        </Route>
                        <Route path='/app/waiting'>
                            <TasksList stage='waiting' setStage={setStage}/>
                        </Route>
                        <Route path='/app/projects'>
                            <TasksList stage='projects' setStage={setStage}/>
                        </Route>
                        <Route path='/app/calendar'>
                            <TasksList stage='calendar' setStage={setStage}/>
                        </Route>
                        <Route path='/app/completed'>
                            <TasksList stage='completed' setStage={setStage}/>
                        </Route>
                        <Route path='/app/profile'>
                            <Profile setStage={setStage} logoutUser={() => {
                                props.logoutUser();
                                setLogout(true);
                            }}/>
                        </Route>
                        <Route path='/app/settings'>
                            <Settings setStage={setStage}/>
                        </Route>
                        <Route path='/app'>
                            <Redirect to='/app/inbox'/>
                        </Route>
                    </Switch>
                </Container>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(mapStateToProps, {logoutUser, getSettings})(AppMain);
