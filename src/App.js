import React from 'react';
import './App.scss';
import {CssBaseline} from '@material-ui/core';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/home/Home';
import AppMain from './components/app/AppMain';
import Users from './components/users/Users';

import {connect} from 'react-redux';


function App(props) {
    return (
        <div className='App'>
            <CssBaseline/>
            <BrowserRouter>
                <Switch>
                    <Route path='/users'>
                        {props.logged ? <Redirect to='/app'/> : ''}
                        <Users/>
                    </Route>
                    <Route path='/app'>
                        {/*{(props.logged || props.logged === null)? "" : <Redirect to='/users'/>}*/}
                        {props.logged ? '' : <Redirect to='/users'/>}
                        <AppMain/>
                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

const mapStateToProps = state => ({
    logged: state.user.logged,
});

export default connect(mapStateToProps, {})(App);
