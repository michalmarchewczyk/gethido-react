import React, {useEffect} from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {Box, Button, Paper, Typography, Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

function Profile(props) {
    useDocumentTitle('My account');
    
    useEffect(() => {
        props.setStage('My account');
    });
    
    return (
        <div>
            <Box my={3}>
                <Paper>
                    <Box p={2} pb={0}>
                        <Typography variant='h5'>
                            My account
                        </Typography>
                    </Box>
                    <Box p={2}>
                        <Typography variant='subtitle1' color='textSecondary'>
                            Username
                        </Typography>
                        <Typography variant='body1' component='span'>
                            {props.user.username}
                        </Typography>
                        <Typography variant='subtitle1' color='textSecondary'>
                            Email address
                        </Typography>
                        <Typography variant='body1' component='span'>
                            {props.user.email}
                        </Typography>
                    </Box>
                    <Divider/>
                    <Box p={2} display='flex' justifyContent='space-between'>
                        <Link to='/app/settings'>
                            <Button>Settings</Button>
                        </Link>
                        <Link to='/app/settings'>
                            <Button  onClick={props.logoutUser}>Logout</Button>
                        </Link>
                    </Box>
                </Paper>
            </Box>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
});

export default connect(mapStateToProps, {})(Profile);
