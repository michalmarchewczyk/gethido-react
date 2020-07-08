import React, {useState} from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {Box, Button, FormControl, Paper, TextField, Typography} from '@material-ui/core';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/userActions';


function RegisterForm(props) {
    useDocumentTitle('Register');
    
    const onSubmit = (e) => {
        e.preventDefault();
        props.registerUser({username, email, password, repeatPassword});
    };
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    
    const getRegisterError = (type) => {
        let findError = props.errors.find(e => e.type === type);
        if (findError && findError.msg) {
            return findError.msg;
        } else {
            return '';
        }
    };
    
    return (
        <Paper>
            {props.errors[0] && props.errors[0].type === 'success' ? <Redirect to='/users/ty'/> : ''}
            <Box p={2}>
                <Typography variant='h5'>
                    Register
                </Typography>
                <form onSubmit={onSubmit}>
                    <Box mt={1}>
                        <FormControl fullWidth>
                            <TextField
                                error={!!(
                                    getRegisterError('userReq') ||
                                    getRegisterError('userLen') ||
                                    getRegisterError('userMax') ||
                                    getRegisterError('userVal') ||
                                    getRegisterError('userEx'))}
                                helperText={(
                                    getRegisterError('userReq') ||
                                    getRegisterError('userLen') ||
                                    getRegisterError('userMax') ||
                                    getRegisterError('userVal') ||
                                    getRegisterError('userEx'))}
                                label='Username'
                                name='login'
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                }}
                            />
                            <Box mt={1}/>
                            <TextField
                                error={!!(
                                    getRegisterError('emailReq') ||
                                    getRegisterError('emailVal') ||
                                    getRegisterError('emailEx')
                                )}
                                helperText={(
                                    getRegisterError('emailReq') ||
                                    getRegisterError('emailVal') ||
                                    getRegisterError('emailEx')
                                )}
                                label='Email address'
                                type='email'
                                name='email'
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                            <Box mt={1}/>
                            <TextField
                                error={!!(
                                    getRegisterError('passReq') ||
                                    getRegisterError('passLen')
                                )}
                                helperText={(
                                    getRegisterError('passReq') ||
                                    getRegisterError('passLen')
                                )}
                                label='Password'
                                type='password'
                                name='password'
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                            />
                            <Box mt={1}/>
                            <TextField
                                error={!!getRegisterError('passMatch')}
                                helperText={getRegisterError('passMatch')}
                                label='Repeat password'
                                type='password'
                                name='repeatPassword'
                                onChange={(e) => {
                                    setRepeatPassword(e.target.value)
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Box mt={3} display='flex' justifyContent='space-between'>
                        <Link to='/users/login'>
                            <Button color='primary'>Login</Button>
                        </Link>
                        <Button type='submit' variant='contained' color='primary'>Register</Button>
                    </Box>
                </form>
            </Box>
        </Paper>
    );
}

const mapStateToProps = state => ({
    errors: state.user.errors,
});

export default connect(mapStateToProps, {registerUser})(RegisterForm);
