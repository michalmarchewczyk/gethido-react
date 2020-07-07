import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import {Container, Box} from '@material-ui/core';
import Logout from './Logout';
import RegisterConfirm from './RegisterConfirm';


function Users() {
    return (
        <div>
            <Container maxWidth='xs'>
                <Box mt={12}>
                    <Switch>
                        <Route path='/users/register'>
                            <RegisterForm/>
                        </Route>
                        <Route path='/users/login'>
                            <LoginForm/>
                        </Route>
                        <Route path='/users/logout'>
                            <Logout/>
                        </Route>
                        <Route path='/users/ty'>
                            <RegisterConfirm/>
                        </Route>
                        <Route path='/users/'>
                            <Redirect to='/users/login'/>
                        </Route>
                    </Switch>
                </Box>
            </Container>
        </div>
    );
}

export default Users;
