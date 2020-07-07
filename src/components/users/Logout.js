import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {Box, Button, Paper, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';


function Logout() {
    useDocumentTitle('Logout');
    return (
        <Paper>
            <Box p={2}>
                <Typography variant='h5'>
                    You have been logged out
                </Typography>
                <Box mt={3} display='flex' justifyContent='space-between'>
                    <Link to='/'>
                        <Button color='primary'>Return to home page</Button>
                    </Link>
                    <Link to='/users/login'>
                        <Button variant='contained' color='primary'>Login again</Button>
                    </Link>
                </Box>
            </Box>
        </Paper>
    );
}

export default Logout;
