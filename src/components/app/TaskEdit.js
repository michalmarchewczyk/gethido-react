import React, {useEffect, useState} from 'react';

import {connect} from 'react-redux';
import {getTask, updateTask, tagTask} from '../../actions/taskActions';

import useDocumentTitle from '../hooks/useDocumentTitle';
import {Link, Redirect, useParams} from 'react-router-dom';
import {Box, Button, Divider, Paper, Typography, TextField, Chip, Dialog, DialogTitle, DialogContent, DialogActions} from '@material-ui/core';
import {Add as AddIcon} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    tag: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
    }
}));


function TaskView(props) {
    
    let {id} = useParams();
    id = parseInt(id);
    
    const [redirect, setRedirect] = useState(false);
    
    const {currentTask, setStage, getTask} = props;
    
    useDocumentTitle(`Edit task "${(currentTask.name) ? currentTask.name : ''}"`);
    
    useEffect(() => {
        setStage('Edit task');
    }, [currentTask, setStage]);
    
    useEffect(() => {
        getTask({id: id});
    }, [id, getTask]);
    
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    
    const onSubmit = e => {
        e.preventDefault();
        props.updateTask({id: id, name: name, description: desc});
        setRedirect(true);
    };
    
    useEffect(() => {
        if (currentTask.name && currentTask.description) {
            setName(currentTask.name);
            setDesc(currentTask.description);
        }
    }, [currentTask]);
    
    const classes = useStyles();
    
    const [open, setOpen] = useState(false);
    
    const [tag, setTag] = useState('');
    
    const onTag = e => {
        e.preventDefault();
        console.log([...currentTask.tags, tag]);
        props.tagTask({id: id, tags: [...currentTask.tags, tag]});
        setTag('');
        setOpen(false);
    };
    
    const deleteTag = (tag) => {
        props.tagTask({id: id, tags: currentTask.tags.filter(t => t !== tag)});
    };
    
    return (
        <div>
            {redirect ? <Redirect to={`/app/task/${currentTask.id}`}/> : <></>}
            <Box my={3}>
                <Paper>
                    <form onSubmit={onSubmit}>
                        <Box p={2} pb={0}>
                            <Typography variant='h5'>
                                Edit task
                            </Typography>
                        </Box>
                        <Box mt={1} mx={1}>
                            {(currentTask.tags) ? currentTask.tags.map((tag, index) => (
                                <Chip
                                    key={index}
                                    label={tag}
                                    onDelete={() => deleteTag(tag)}
                                    className={classes.tag}
                                />
                            )) : <></>}
                            <Chip
                                label='Add tag'
                                clickable
                                icon={<AddIcon/>}
                                onClick={() => setOpen(true)}
                                className={classes.tag}
                            />
                        </Box>
                        <Box p={2}>
                            <Box>
                                <TextField
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                    label='Name'
                                    fullWidth
                                />
                            </Box>
                            <Box mt={1}>
                                <TextField
                                    value={desc}
                                    onChange={(e) => {
                                        setDesc(e.target.value)
                                    }}
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
                            <Button type='submit' variant='contained' color='primary'>Save</Button>
                        </Box>
                    </form>
                </Paper>
            </Box>
            <Dialog open={open} onClose={() => setOpen(false)} maxWidth='xs' fullWidth>
                <form onSubmit={onTag}>
                    <DialogTitle>Add tag</DialogTitle>
                    <DialogContent>
                        <TextField
                            fullWidth
                            label='Tag'
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button type='submit'>Add</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

const mapStateToProps = state => ({
    stage: state.task.stage,
    currentTask: state.task.currentTask,
});

export default connect(mapStateToProps, {getTask, updateTask, tagTask})(TaskView);
