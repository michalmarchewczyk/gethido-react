import React, {useEffect, useState} from 'react';

import {connect} from 'react-redux';
import {getTask, updateTask} from '../../actions/taskActions';

import useDocumentTitle from '../hooks/useDocumentTitle';
import {Link, Redirect, useParams} from 'react-router-dom';
import {Box, Button, Divider, Paper, Typography, TextField} from '@material-ui/core';



function TaskView(props) {
    
    let {id} = useParams();
    id = parseInt(id);
    
    const [redirect, setRedirect] = useState(false);
    
    const {currentTask, setStage, getTask} = props;
    
    useDocumentTitle(`Edit task "${(currentTask.name) ? currentTask.name : ''}"`);
    
    useEffect(() => {
        // setStage(`Edit task "${(currentTask.name) ? currentTask.name : ''}"`);
        setStage('Edit task');
    }, [currentTask, setStage]);
    
    useEffect(() => {
        getTask({id: id});
    }, [id, getTask]);
    
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    
    const onSubmit = e => {
        e.preventDefault();
        props.updateTask({id: id, name: name, description: desc, completed: currentTask.completed});
        setRedirect(true);
    };
    
    useEffect(() => {
        if(currentTask.name && currentTask.description) {
            setName(currentTask.name);
            setDesc(currentTask.description);
        }
    }, [currentTask]);
    
    return (
        <div>
            {redirect? <Redirect to={`/app/task/${currentTask.id}`}/> : <></>}
            <Box my={3}>
                <Paper>
                    <form onSubmit={onSubmit}>
                        <Box p={2} pb={0}>
                            <Typography variant='h5'>
                                {/*{currentTask.name}*/}
                                Edit task
                            </Typography>
                        </Box>
                        <Box p={2}>
                            <Box>
                                <TextField
                                    value={name}
                                    onChange={(e) => {setName(e.target.value)}}
                                    label='Name'
                                    fullWidth
                                />
                            </Box>
                            <Box mt={1}>
                                <TextField
                                    value={desc}
                                    onChange={(e) => {setDesc(e.target.value)}}
                                    multiline
                                    label='Description'
                                    fullWidth
                                    rows={2}
                                    rowsMax={6}
                                />
                            </Box>
                        </Box>
                        <Divider/>
                        <Box p={2} display='flex' justifyContent='space-between'>
                            <Link to={`/app/task/${currentTask.id}`}>
                                <Button>Go back</Button>
                            </Link>
                            {/*<Link to={`/app/task/${currentTask.id}`}>*/}
                                <Button type='submit'>Save</Button>
                            {/*</Link>*/}
                        </Box>
                    </form>
                </Paper>
            </Box>
        </div>
    );
}

const mapStateToProps = state => ({
    stage: state.task.stage,
    currentTask: state.task.currentTask,
});

export default connect(mapStateToProps, {getTask, updateTask})(TaskView);
