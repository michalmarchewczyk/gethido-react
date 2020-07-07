import React from 'react';
import {Box, Paper, Typography} from '@material-ui/core';


function SettingsDelete(props) {
    return (
        <div>
            <Box my={3}>
                <Paper>
                    <Box p={1}>
                        <Typography variant='h6'>Delete account:</Typography>
                    </Box>
                </Paper>
            </Box>
        </div>
    );
}

export default SettingsDelete;
