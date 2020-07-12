import React, {useEffect, useState} from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {
    Box,
    Paper
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import {connect} from 'react-redux';
import {getTasks} from '../../actions/taskActions';

import useWindowSize from '../hooks/useWindowSize';
import TaskItemMenu from './TaskItemMenu';
import TaskAdd from './TaskAdd';
import TasksList from './TasksList';


const useStyles = makeStyles((theme) => ({
    paper: {
        overflow: 'hidden',
    },
    subheader: {
        background: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
    }
}));


function Tasks(props) {
    let {stage, setStage, getTasks} = props;
    
    useDocumentTitle(stage.charAt(0).toUpperCase() + stage.slice(1));
    
    useEffect(() => {
        setStage(stage);
    }, [stage, setStage]);
    
    useEffect(() => {
        getTasks({stage: stage});
    }, [stage, getTasks]);
    
    const classes = useStyles();
    
    let size = useWindowSize();
    
    let [listHeight, setListHeight] = useState(0);
    
    useEffect(() => {
        setListHeight(size.height - 114);
    }, [size]);
    
    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const [task, setTask] = useState(null);
    
    if (stage !== props.tasksStage) return (<Box my={3}><Paper style={{height: listHeight}}/></Box>);
    
    return (
        <div>
            <Box my={3}>
                <Paper className={classes.paper}>
                    <Box>
                        <TasksList handleClickOpen={handleClickOpen} setTask={setTask} listHeight={listHeight}/>
                        <TaskItemMenu open={open} onClose={handleClose} task={task}/>
                    </Box>
                </Paper>
            </Box>
            {stage === 'inbox' ? (
                <TaskAdd/>
            ) : (<></>)}
        </div>
    );
}


const mapStateToProps = state => ({
    tasksStage: state.task.stage,
});

export default connect(mapStateToProps, {getTasks})(Tasks);
