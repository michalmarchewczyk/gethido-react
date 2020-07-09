import React, {useState} from 'react';
import {Box, Button, FormControl, Paper, TextField, Typography} from '@material-ui/core';
import {connect} from 'react-redux';
import {deleteUser} from '../../../actions/userActions';
import {Link} from 'react-router-dom';


function SettingsDelete(props) {
    
    const [password, setPassword] = useState('');
    
    const onSubmit = e => {
        e.preventDefault();
        props.deleteUser({password});
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
                            Delete account
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
                                <Button type='submit' variant='contained' color='primary'>Delete</Button>
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

export default connect(mapStateToProps, {deleteUser})(SettingsDelete);
