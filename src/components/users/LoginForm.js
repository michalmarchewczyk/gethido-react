import React, {useState} from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {Paper, Box, Typography, FormControl, TextField, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/userActions';


function LoginForm(props) {
    useDocumentTitle('Login');
    
    const onSubmit = (e) => {
        e.preventDefault();
        props.loginUser({
            username: username,
            password: password
        })
    };
    
    const getLoginError = (type) => {
        let findError = props.errors.find(e => e.type===type);
        if(findError && findError.msg){
            return findError.msg;
        }else{
            return "";
        }
    };
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <Paper>
            <Box p={2}>
                <Typography variant='h5'>
                    Login
                </Typography>
                <form onSubmit={onSubmit}>
                    <Box mt={1}>
                        <FormControl fullWidth>
                            <TextField
                                error={!!getLoginError("loginEx")}
                                helperText={getLoginError("loginEx")}
                                label='Username'
                                name='username'
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                }}
                            />
                            <Box mt={1}/>
                            <TextField
                                error={!!getLoginError("loginPass")}
                                helperText={getLoginError("loginPass")}
                                label='Password'
                                type='password'
                                name='password'
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Box mt={3} display='flex' justifyContent='space-between'>
                        <Link to='/users/register'>
                            <Button color='primary'>Register</Button>
                        </Link>
                        <Button type='submit' variant='contained' color='primary'>Login</Button>
                    </Box>
                </form>
            </Box>
        </Paper>
    );
}

const mapStateToProps = state => ({
    errors: state.user.errors,
});

export default connect(mapStateToProps, {loginUser})(LoginForm);
