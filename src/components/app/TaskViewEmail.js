import React from 'react';
import {Dialog, DialogTitle, DialogContent, Box, Typography, Divider, DialogActions, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import moment from 'moment';


const useStyles = makeStyles((theme) => ({
    title: {
        paddingBottom: theme.spacing(1),
    },
    subtitle: {
        marginBottom: theme.spacing(0.5),
        display: 'inline-block',
        '&::after': {
            content: '": "',
            whiteSpace: 'pre'
        }
    },
    iframe: {
        border: 'none',
        display: 'block',
        width: 600,
        maxWidth: 'calc(100vw - 80px)',
        height: 400,
        maxHeight: 'calc(100vh - 320px)',
        background: 'white',
    }
}));

function TaskViewEmail(props) {
    
    const {message} = props;
    
    const classes = useStyles();
    
    return (
        <Dialog onClose={props.handleClose} open={props.open}>
            <DialogTitle className={classes.title}>Email details</DialogTitle>
            <DialogContent>
                <Box>
                    <Typography variant='subtitle1' color='textSecondary' className={classes.subtitle}>
                        Title
                    </Typography>
                    <Typography variant='body1' component='span'>
                        {message.title}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='subtitle1' color='textSecondary' className={classes.subtitle}>
                        From
                    </Typography>
                    <Typography variant='body1' component='span'>
                        {message.from}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='subtitle1' color='textSecondary' className={classes.subtitle}>
                        To
                    </Typography>
                    <Typography variant='body1' component='span'>
                        {message.to}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='subtitle1' color='textSecondary' className={classes.subtitle}>
                        Date
                    </Typography>
                    <Typography variant='body1' component='span'>
                        {moment(message.date).format('YYYY-MM-DD HH:mm')}
                    </Typography>
                </Box>
            </DialogContent>
            <Divider/>
            <Box>
                <iframe title='message content' srcDoc={message.html} className={classes.iframe}/>
            </Box>
            <Divider/>
            <DialogActions>
                <Button onClick={props.handleClose}>Close</Button>
            </DialogActions>
        
        </Dialog>
    );
}

export default TaskViewEmail;
