import React, {useState} from 'react';
import {Box, Button, FormControl, Paper, TextField, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {updateUser} from '../../../actions/userActions';


function SettingsUsername(props) {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const onSubmit = e => {
        e.preventDefault();
        props.updateUser({oldPassword: password, newUsername: username});
    };
    
    const getError = (type) => {
        let findError = props.errors.find(e => e.type === type);
        if (findError && findError.msg) {
            return findError.msg;
        } else {
            return '';
        }
    };
    
    return (
        <div>
            <Box my={3}>
                <Paper>
                    <Box p={2}>
                        <Typography variant='h5'>
                            Change username
                        </Typography>
                        <form onSubmit={onSubmit}>
                            <Box mt={1}>
                                <FormControl fullWidth>
                                    <TextField
                                        error={!!(
                                            getError("userReq")||
                                            getError("userLen")||
                                            getError("userMax")||
                                            getError("userVal")||
                                            getError("userEx"))}
                                        helperText={(
                                            getError("userReq")||
                                            getError("userLen")||
                                            getError("userMax")||
                                            getError("userVal")||
                                            getError("userEx"))}
                                        label='New username'
                                        name='username'
                                        onChange={(e) => {
                                            setUsername(e.target.value)
                                        }}
                                    />
                                    <Box mt={1}/>
                                    <TextField
                                        error={!!(
                                            getError("updatePass")
                                        )}
                                        helperText={(
                                            getError("updatePass")
                                        )}
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
                                <Link to='/app/settings'>
                                    <Button>Cancel</Button>
                                </Link>
                                <Button type='submit' variant='contained' color='primary'>Change</Button>
                            </Box>
                        </form>
                    </Box>
                </Paper>
            </Box>
        </div>
    );
}

const mapStateToProps = state => ({
    errors: state.user.errors,
});

export default connect(mapStateToProps, {updateUser})(SettingsUsername);
