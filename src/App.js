import React, {useEffect} from 'react';
import './App.scss';
import {CssBaseline} from '@material-ui/core';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/home/Home';
import AppMain from './components/app/AppMain';
import Users from './components/users/Users';

import {connect} from 'react-redux';
import {checkUser, getSettings} from './actions/userActions';

import useMuiTheme from './components/hooks/useMuiTheme';
import {ThemeProvider} from '@material-ui/styles';


function App(props) {
    const {logged, settings, checkUser, getSettings} = props;
    // const [defaultTheme, setDefaultTheme] = useMuiTheme();
    const [defaultTheme] = useMuiTheme();
    const [theme, setTheme] = useMuiTheme();
    // const [theme] = useMuiTheme();
    
    useEffect(() => {
        checkUser();
    }, [logged, checkUser]);
    
    useEffect(() => {
        getSettings();
    }, [logged, getSettings]);
    
    useEffect(() => {
        if(settings) {
            if (settings.darkTheme) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        }
    }, [settings]);
    
    
    return (
        <div className='App'>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <BrowserRouter>
                    <Switch>
                        <Route path='/users/logout'>
                            <Users/>
                        </Route>
                        <Route path='/users'>
                            {props.logged ? <Redirect to='/app'/> : <Users/>}
                            
                        </Route>
                        <Route path='/app'>
                            {(props.logged)? <AppMain/> : ''}
                            {(props.logged || props.logged === null)? '' : <Redirect to='/users'/>}
                            {/*{props.logged ? '' : <Redirect to='/users'/>}*/}
                            
                        </Route>
                        <Route path='/'>
                            <ThemeProvider theme={defaultTheme}>
                                <CssBaseline/>
                                <Home/>
                            </ThemeProvider>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

const mapStateToProps = state => ({
    logged: state.user.logged,
    settings: state.user.user.settings,
});

export default connect(mapStateToProps, {checkUser, getSettings})(App);
