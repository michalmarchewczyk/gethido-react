import React, {useEffect, useState} from 'react';
import {Box, Button, FormControl, Paper, TextField, Typography, MenuItem} from '@material-ui/core';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getEmails, deleteEmail} from '../../../actions/userActions';


function EmailsDelete(props) {
    
    const {getEmails} = props;
    
    useEffect(() => {
        getEmails();
    }, [getEmails]);
    
    const [email, setEmail] = useState('');
    
    const onSubmit = e => {
        e.preventDefault();
        props.deleteEmail({email});
        setEmail('');
    };
    
    return (
        <div>
            <Box my={3}>
                <Paper>
                    <Box p={2}>
                        <Typography variant='h5'>
                            Delete inbox email address
                        </Typography>
                        <form onSubmit={onSubmit}>
                            <Box mt={1}>
                                <FormControl fullWidth>
                                    <TextField
                                        select
                                        label="Select email address"
                                        value={email}
                                        onChange={(e) => {setEmail(e.target.value)}}
                                    >
                                        {props.emails.map((email, index) => (
                                            <MenuItem key={index} value={email}>
                                                {email}
                                            </MenuItem>
                                        ))}
                                    </TextField>
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
    emails: state.user.emails,
});

export default connect(mapStateToProps, {getEmails, deleteEmail})(EmailsDelete);
