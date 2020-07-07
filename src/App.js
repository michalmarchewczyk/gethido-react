import React, {useEffect} from 'react';
import './App.scss';
import {CssBaseline} from '@material-ui/core';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/home/Home';
import AppMain from './components/app/AppMain';
import Users from './components/users/Users';

import {connect} from 'react-redux';
import {checkUser} from './actions/userActions';

import useMuiTheme from './components/hooks/useMuiTheme';
import {ThemeProvider} from '@material-ui/styles';


function App(props) {
    // const [defaultTheme, setDefaultTheme] = useMuiTheme();
    const [defaultTheme] = useMuiTheme();
    // const [theme, setTheme] = useMuiTheme();
    const [theme] = useMuiTheme();
    
    useEffect(() => {
        props.checkUser();
    });
    
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
                            {props.logged ? <Redirect to='/app'/> : ''}
                            <Users/>
                        </Route>
                        <Route path='/app'>
                            {(props.logged || props.logged === null)? "" : <Redirect to='/users'/>}
                            {/*{props.logged ? '' : <Redirect to='/users'/>}*/}
                            <AppMain/>
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
});

export default connect(mapStateToProps, {checkUser})(App);
