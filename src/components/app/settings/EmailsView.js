import React from 'react';
import {Paper, Typography, Box} from '@material-ui/core';

function EmailsView(props) {
    return (
        <div>
            <Box my={3}>
                <Paper>
                    <Box p={1}>
                        <Typography variant='h6'>Current inbox email addresses:</Typography>
                    </Box>
                </Paper>
            </Box>
        </div>
    );
}

export default EmailsView;
