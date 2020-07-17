import React, {useEffect, useState} from 'react';

import {connect} from 'react-redux';
import {getTask} from '../../actions/taskActions';

import useDocumentTitle from '../hooks/useDocumentTitle';
import {Link, useParams, withRouter} from 'react-router-dom';
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
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
    }
}));


function TaskView(props) {
    
    let {id} = useParams();
    id = parseInt(id);
    
    const {currentTask, setStage, getTask, stage} = props;
    
    useDocumentTitle(`Task "${(currentTask.name) ? currentTask.name : ''}"`);
    
    useEffect(() => {
        // setStage(`Task "${(currentTask.name) ? currentTask.name : ''}"`);
        setStage('Task');
    }, [currentTask, setStage]);
    
    useEffect(() => {
        getTask({id: id});
    }, [id, getTask]);
    
    const classes = useStyles();
    
    const [dialogOpen, setDialogOpen] = useState(false);
    
    const onTag = (tag) => {
        console.log(tag);
        props.history.push(`/app/tag/${tag.toLowerCase()}`);
    };
    
    return (
        <div>
            <Box my={3}>
                <Paper>
                    <Box p={2} pb={0}>
                        <Typography variant='h5'>
                            {currentTask.name}
                        </Typography>
                    </Box>
                    <Box mt={1} mx={1}>
                        {(currentTask.tags) ? currentTask.tags.map((tag, index) => (
                            <Chip
                                key={index}
                                label={tag}
                                clickable
                                className={classes.tag}
                                onClick={() => onTag(tag)}
                            />
                        )) : <></>}
                    </Box>
                    <Box p={2} pt={0}>
                        <Box>
                            <Typography variant='subtitle1' color='textSecondary' className={classes.subtitle}>
                                Created
                            </Typography>
                            <Typography variant='body1' component='span'>
                                {moment(currentTask.date).format('YYYY-MM-DD HH:mm')}
                            </Typography>
                        </Box>
                        {(currentTask.stage === 'calendar')? (
                            <Box>
                                <Typography variant='subtitle1' color='textSecondary' className={classes.subtitle}>
                                    Date
                                </Typography>
                                <Typography variant='body1' component='span'>
                                    {currentTask.calDate?
                                        moment(currentTask.calDate).format('YYYY-MM-DD') : 'Not set'}
                                </Typography>
                            </Box>
                        ) : (<></>) }
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
                        <Box>
                            <Typography variant='subtitle1' color='textSecondary' className={classes.subtitle}>
                                Description
                            </Typography>
                            <Typography variant='body1' style={{whiteSpace: 'break-spaces', wordBreak: 'break-all'}}>
                                {currentTask.description}
                            </Typography>
                        </Box>
                        {(currentTask.message) ? <><Box>
                            <Typography variant='subtitle1' color='textSecondary' className={classes.subtitle}>
                                Email
                            </Typography>
                            <Button onClick={() => {
                                setDialogOpen(true)
                            }}>View email</Button>
                            <TaskViewEmail open={dialogOpen} handleClose={setDialogOpen.bind(this, false)}
                                           message={props.currentTask.message}/>
                        </Box></> : <></>}
                    </Box>
                    <Divider/>
                    <Box p={2} display='flex' justifyContent='space-between'>
                        <Link to={`/app/${stage ? stage : 'inbox'}`}>
                            <Button>Go back</Button>
                        </Link>
                        <Link to={`/app/task/edit/${currentTask.id}`}>
                            <Button>Edit</Button>
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

export default connect(mapStateToProps, {getTask})(withRouter(TaskView));
