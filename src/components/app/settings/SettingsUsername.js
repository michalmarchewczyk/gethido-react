import React from 'react';
import {Box, Paper, Typography} from '@material-ui/core';


function SettingsUsername(props) {
    return (
        <div>
            <Box my={3}>
                <Paper>
                    <Box p={1}>
                        <Typography variant='h6'>Change username:</Typography>
                    </Box>
                </Paper>
            </Box>
        </div>
    );
}

export default SettingsUsername;
