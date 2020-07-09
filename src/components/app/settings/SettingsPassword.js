import React, {useState} from 'react';
import {Box, Button, FormControl, Paper, TextField, Typography} from '@material-ui/core';
import {connect} from 'react-redux';
import {updateUser} from '../../../actions/userActions';
import {Link} from 'react-router-dom';


function SettingsPassword(props) {
    
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newRepeatPassword, setNewRepeatPassword] = useState('');
    
    const onSubmit = e => {
        e.preventDefault();
        props.updateUser({oldPassword: password, newPassword, newRepeatPassword});
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
                            Change password
                        </Typography>
                        <form onSubmit={onSubmit}>
                            <Box mt={1}>
                                <FormControl fullWidth>
                                    <TextField
                                        error={!!(
                                            getError('updatePass')
                                        )}
                                        helperText={(
                                            getError('updatePass')
                                        )}
                                        label='Old password'
                                        type='password'
                                        name='password'
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                    />
                                    <Box mt={1}/>
                                    <TextField
                                        error={!!(
                                            getError('passReq') ||
                                            getError('passLen')
                                        )}
                                        helperText={(
                                            getError('passReq') ||
                                            getError('passLen')
                                        )}
                                        label='New password'
                                        type='password'
                                        name='newPassword'
                                        onChange={(e) => {
                                            setNewPassword(e.target.value)
                                        }}
                                    />
                                    <Box mt={1}/>
                                    <TextField
                                        error={!!(
                                            getError('passMatch')
                                        )}
                                        helperText={(
                                            getError('passMatch')
                                        )}
                                        label='Repeat new password'
                                        type='password'
                                        name='repeatPassword'
                                        onChange={(e) => {
                                            setNewRepeatPassword(e.target.value)
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

export default connect(mapStateToProps, {updateUser})(SettingsPassword);

