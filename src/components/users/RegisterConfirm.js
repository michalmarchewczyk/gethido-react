import React from 'react';
import {Box, Button, Paper, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';


function RegisterConfirm(props) {
    return (
        <Paper>
            <Box p={2}>
                <Typography variant='h5'>
                    Registration completed
                </Typography>
                <Box mt={1}/>
                <Typography variant='body1'>
                    You can now login
                </Typography>
                <Box mt={3} display='flex' justifyContent='space-between'>
                    <Link to='/'>
                        <Button color='primary'>Return to home page</Button>
                    </Link>
                    <Link to='/users/login'>
                        <Button variant='contained' color='primary'>Login</Button>
                    </Link>
                </Box>
            </Box>
        </Paper>
    );
}

export default RegisterConfirm;
