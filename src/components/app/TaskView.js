import React, {useEffect, useState} from 'react';

import {connect} from 'react-redux';
import {getTask} from '../../actions/taskActions';

import useDocumentTitle from '../hooks/useDocumentTitle';
import {Link, useParams} from 'react-router-dom';
import {Box, Button, Divider, Paper, Typography, Chip} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import moment from 'moment';
import TaskViewEmail from './TaskViewEmail';

const useStyles = makeStyles((theme) => ({
    subtitle: {
        marginTop: theme.spacing(1),
        display: 'inline-block',
        marginRight: theme.spacing(1),
        '&::after': {
            content: '":"',
        }
    },
    tag: {
        marginLeft: theme.spacing(1),
    }
}));


function TaskView(props) {
    
    let {id} = useParams();
    id = parseInt(id);
    
    const {currentTask, setStage, getTask, stage} = props;
    
    useDocumentTitle(`Task "${(currentTask.name) ? currentTask.name : ''}"`);
    
    useEffect(() => {
        setStage(`Task "${(currentTask.name) ? currentTask.name : ''}"`);
    }, [currentTask, setStage]);
    
    useEffect(() => {
        getTask({id: id});
    }, [id, getTask]);
    
    
    const classes = useStyles();
    
    const [dialogOpen, setDialogOpen] = useState(false);
    
    return (
        <div>
            <Box my={3}>
                <Paper>
                    <Box p={2} pb={0}>
                        <Typography variant='h5'>
                            {currentTask.name}
                        </Typography>
                    </Box>
                    <Box mt={2} mx={1}>
                        {(currentTask.tags)? currentTask.tags.map(tag => (
                            <Chip
                                label={tag}
                                clickable
                                onDelete={() => {}}
                                className={classes.tag}
                            />
                        )) : <></>}
                    </Box>
                    <Box p={2} pt={0}>
                        <Box>
                            <Typography variant='subtitle1' color='textSecondary' className={classes.subtitle}>
                                Created
                            </Typography>
                            <Typography variant='body1' component='span'>
                                {moment(currentTask.date).format('MMMM Do YYYY, h:mm a')}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='subtitle1' color='textSecondary' className={classes.subtitle}>
                                Stage
                            </Typography>
                            <Typography variant='body1' component='span'>
                                {currentTask.stage}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='subtitle1' color='textSecondary' className={classes.subtitle}>
                                Source
                            </Typography>
                            <Typography variant='body1' component='span'>
                                {currentTask.source}
                            </Typography>
                        </Box>
                        {/*<Box>*/}
                        {/*    <Typography variant='subtitle1' color='textSecondary' className={classes.subtitle}>*/}
                        {/*        Tags*/}
                        {/*    </Typography>*/}
                        {/*    <Typography variant='body1' component='span'>*/}
                        {/*        {(currentTask.tags)? currentTask.tags.map(tag => (*/}
                        {/*            <Chip*/}
                        {/*                label={tag}*/}
                        {/*                clickable*/}
                        {/*                onDelete={() => {}}*/}
                        {/*                className={classes.tag}*/}
                        {/*            />*/}
                        {/*        )) : <></>}*/}
                        {/*    </Typography>*/}
                        {/*</Box>*/}
                        <Box>
                            <Typography variant='subtitle1' color='textSecondary' className={classes.subtitle}>
                                Description
                            </Typography>
                            <Typography variant='body1'>
                                {currentTask.description}
                            </Typography>
                        </Box>
                        {(currentTask.message)? <><Box>
                            <Typography variant='subtitle1' color='textSecondary' className={classes.subtitle}>
                                Email
                            </Typography>
                            {/*/!*<Typography variant='body1' component='span'>*!/*/}
                            {/*/!*    {ReactHtmlParser(currentTask.message.html)}*!/*/}
                            {/*    <iframe title='message content' srcDoc={currentTask.message.html}/>*/}
                            {/*/!*</Typography>*!/*/}
                            <Button onClick={() => {setDialogOpen(true)}}>View email</Button>
                            <TaskViewEmail open={dialogOpen} handleClose={setDialogOpen.bind(this, false)} message={props.currentTask.message}/>
                        </Box></> : <></>}
                    </Box>
                    <Divider/>
                    <Box p={2} display='flex' justifyContent='space-between'>
                        <Link to={`/app/${stage ? stage : 'inbox'}`}>
                            <Button>Go back</Button>
                        </Link>
                        <Link to='/app/settings'>
                            <Button onClick={props.logoutUser}>Edit</Button>
                        </Link>
                    </Box>
                </Paper>
            </Box>
        </div>
    );
}

const mapStateToProps = state => ({
    stage: state.task.stage,
    currentTask: state.task.currentTask,
});

export default connect(mapStateToProps, {getTask})(TaskView);