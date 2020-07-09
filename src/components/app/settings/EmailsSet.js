import React, {useEffect} from 'react';
import {Box, Button, Divider, Paper, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getEmails, setEmail} from '../../../actions/userActions';


function EmailsSet(props) {
    
    const {getEmails} = props;
    
    useEffect(() => {
        getEmails();
    }, [getEmails]);
    
    const onSubmit = () => {
        props.setEmail();
    };
    
    return (
        <div>
            <Box my={3}>
                <Paper>
                    <Box p={2} pb={1}>
                        <Typography variant='h5'>
                            Generate new inbox email address
                        </Typography>
                    </Box>
                    <Box p={2}>
                        <Button variant='contained' color='primary' onClick={onSubmit}>Generate</Button>
                        {(props.emailGen) ?
                            <Box pl={2} display='inline'>
                                <Typography variant='subtitle1' component='span'>
                                    Generated email: {props.emailGen}
                                </Typography>
                            </Box> : ''}
                    </Box>
                    <Divider/>
                    <Box p={2} display='flex' justifyContent='space-between'>
                        <Link to='/app/settings'>
                            <Button>Cancel</Button>
                        </Link>
                        <Link to='/app/settings/emails/view'>
                            <Button>View emails</Button>
                        </Link>
                    </Box>
                </Paper>
            </Box>
        </div>
    );
}

const mapStateToProps = state => ({
    emails: state.user.emails,
    emailGen: state.user.emailGen,
});

export default connect(mapStateToProps, {getEmails, setEmail})(EmailsSet);
