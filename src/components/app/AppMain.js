import React, {useState} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import {logoutUser, getSettings} from '../../actions/userActions';

import {Container} from '@material-ui/core';
import TopBar from './TopBar';
import {makeStyles} from '@material-ui/styles';
import LeftMenu from './LeftMenu';
import Tasks from './Tasks';
import Settings from './Settings';
import Profile from './Profile';
import TaskView from './TaskView';
import TaskEdit from './TaskEdit';


const useStyles = makeStyles((theme) => ({
    containerDiv: {
        marginTop: 64,
        maxHeight: 'calc(100vh - 64px)',
        height: 'calc(100vh - 64px)',
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
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        '& $list': {
            display: 'block',
            position: 'absolute',
            left: 0,
            width: 'calc(100vw - 60px)',
            marginLeft: '60px',
            // transition: 'margin-left 150ms cubic-bezier(0.4,0,0.6,1)',
            transition: 'margin-left 150ms cubic-bezier(0.4,0,0.6,1), width 150ms cubic-bezier(0.4,0,0.6,1)',
            '@media (min-width: 1400px)': {
                marginLeft: '60px',
                width: 'calc(100vw - 60px)',
            },
        }
    },
    containerOpen: {
        marginLeft: 220,
        width: 'auto',
        '@media (min-width: 1720px)': {
            marginLeft: 'auto',
        },
        transition: 'margin-left 250ms cubic-bezier(0,0,0.2,1)',
        '& $list': {
            width: 'calc(100vw - 220px)',
            marginLeft: '220px',
            // transition: 'margin-left 250ms cubic-bezier(0,0,0.2,1)',
            transition: 'margin-left 250ms cubic-bezier(0,0,0.2,1), width 250ms cubic-bezier(0,0,0.2,1)',
            '@media (min-width: 1720px)': {
                marginLeft: '0',
                width: '100vw',
            }
        }
    },
    list: {}
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
                <Container className={[classes.container, (drawer ? classes.containerOpen : '')].join(' ')}
                           maxWidth='lg'>
                    <Switch>
                        {['inbox', 'next', 'waiting', 'calendar', 'projects', 'trash', 'someday', 'reference', 'completed'].map(s => (
                            <Route key={s} path={`/app/${s}`}>
                                {/*<Tasks stage={s} setStage={setStage} drawer={drawer}/>*/}
                                <Tasks stage={s} setStage={setStage} listClass={classes.list}/>
                            </Route>
                        ))}
                        <Route path='/app/search/:s'>
                            <Tasks setStage={setStage} search listClass={classes.list}/>
                        </Route>
                        <Route path='/app/tag/:t'>
                            <Tasks setStage={setStage} tag listClass={classes.list}/>
                        </Route>
                        <Route path='/app/task/edit/:id'>
                            <TaskEdit setStage={setStage}/>
                        </Route>
                        <Route path='/app/task/:id'>
                            <TaskView setStage={setStage}/>
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
