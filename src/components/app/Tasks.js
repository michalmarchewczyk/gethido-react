import React, {forwardRef, useEffect, useState} from 'react';
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
    },
    outer: {
        width: `calc(100% + ${theme.spacing(3) * 2}px)`,
        marginLeft: -1 * theme.spacing(3),
        paddingLeft: theme.spacing(3),
    },
    // outerClosed: {
    //     '@media (min-width: 1340px)': {
    //         width: `calc(100vw - 60px)`,
    //     },
    //     '@media (min-width: 1400px)': {
    //         width: `calc(50vw + 640px)`,
    //     },
    // },
    // outerOpen: {
    //     '@media (min-width: 1500px)': {
    //         width: 'calc(100vw - 220px)',
    //     },
    //     '@media (min-width: 1720px)':{
    //         width: 'calc(50vw + 640px)',
    //     }
    // },
    inner: {
        position: 'absolute',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        // marginLeft: theme.spacing(3),
        width: `calc(100% - ${theme.spacing(3) * 2}px) !important`,
        maxWidth: '1232px !important',
        overflow: 'hidden',
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
        setListHeight(size.height - 64);
    }, [size]);
    
    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const [task, setTask] = useState(null);
    
    const innerRef = forwardRef((props, ref) => (
        <Paper ref={ref} id='inner' {...props} className={classes.inner}/>
    ));
    
    const outerRef = forwardRef((props, ref) => (
        // <Box ref={ref} id='outer' {...props} className={[classes.outer, ((drawer)? classes.outerOpen : classes.outerClosed)].join(' ')}/>
        <Box ref={ref} id='outer' {...props} className={[classes.outer].join(' ')}/>
    ));
    
    if (stage !== props.tasksStage) return (<Box my={3}><Paper style={{height: listHeight}}/></Box>);
    
    return (
        <div>
            <TasksList handleClickOpen={handleClickOpen} setTask={setTask} listHeight={listHeight} stage={stage}
                       innerRef={innerRef} outerRef={outerRef}/>
            <TaskItemMenu open={open} onClose={handleClose} task={task}/>
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
