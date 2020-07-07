import React, {useState} from 'react';
import {Redirect, Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import {logoutUser} from '../../actions/userActions';

import {Box, Button} from '@material-ui/core';


function AppMain(props) {
    const [logout, setLogout] = useState(false);
    
    return (
        <div>
            {(logout)? <Redirect to='/users/logout'/> : ""}
            APP|
            {props.user.username}|
            {props.user.id}|
            {props.user.email}
            <Button color='primary' onClick={() => {
                props.logoutUser();
                setLogout(true);
            }}>Logout</Button>
            <Switch>
            </Switch>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(mapStateToProps, {logoutUser})(AppMain);
