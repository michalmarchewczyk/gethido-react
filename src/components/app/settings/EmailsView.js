import React, {useEffect} from 'react';
import {Paper, Typography, Box, Button, List, ListItem, ListItemText, Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {getEmails} from '../../../actions/userActions';


function EmailsView(props) {
    
    const {getEmails} = props;
    
    useEffect(() => {
        getEmails();
    }, [getEmails]);
    
    return (
        <div>
            <Box my={3}>
                <Paper>
                    <Box p={2} pb={1}>
                        <Typography variant='h5'>
                            Inbox email addresses:
                        </Typography>
                    </Box>
                    {(props.emails.length === 0) ?
                        <Box p={2}>
                            <Typography variant='h4' component='span' align='center' display='block'
                                        color='textSecondary'>
                                No email addresses
                            </Typography>
                        </Box>
                        : ''}
                    <List>
                        {props.emails.map((email, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={email}/>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                    <Box p={2} display='flex' justifyContent='space-between'>
                        <Link to='/app/settings'>
                            <Button>Go back</Button>
                        </Link>
                        <Link to='/app/settings/emails/set'>
                            <Button variant='contained' color='primary'>Add</Button>
                        </Link>
                    </Box>
                </Paper>
            </Box>
        </div>
    );
}

const mapStateToProps = state => ({
    emails: state.user.emails
});

export default connect(mapStateToProps, {getEmails})(EmailsView);
