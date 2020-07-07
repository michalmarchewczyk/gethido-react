import React from 'react';
import {Box, Paper, Typography} from '@material-ui/core';


function EmailsDelete(props) {
    return (
        <div>
            <Box my={3}>
                <Paper>
                    <Box p={1}>
                        <Typography variant='h6'>Delete existing inbox email address:</Typography>
                    </Box>
                </Paper>
            </Box>
        </div>
    );
}

export default EmailsDelete;
