import React from 'react';
import {Switch, Route, Link, Redirect} from "react-router-dom";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";


function Users() {
    return (
        <div>
            <Switch>
                <Route path='/users/register'>
                    <RegisterForm/>
                </Route>
                <Route path='/users/login'>
                    <LoginForm/>
                </Route>
                <Route path='/users/'>
                    <Redirect to='/users/login'/>
                </Route>
            </Switch>
        </div>
    );
}

export default Users;
