import React, {useEffect, useState} from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {
    Box,
    // List,
    // ListSubheader,
    // ListItem,
    // ListItemText,
    Paper
} from '@material-ui/core';
import {FixedSizeList} from 'react-window';
import {makeStyles} from '@material-ui/core/styles';

import {connect} from 'react-redux';
import {getTasks} from '../../actions/taskActions';
import TaskItem from './TaskItem';
import useWindowSize from '../hooks/useWindowSize';
import TaskItemMenu from './TaskItemMenu';
import TaskAdd from './TaskAdd';


const useStyles = makeStyles((theme) => ({
    paper: {
        overflow: 'hidden',
    },
    subheader: {
        background: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
    }
}));


function TasksList(props) {
    let {stage, setStage, getTasks} = props;
    
    useDocumentTitle(stage.charAt(0).toUpperCase() + stage.slice(1));
    
    useEffect(() => {
        setStage(stage);
    }, [stage, setStage]);
    
    useEffect(() => {
        getTasks({stage: stage});
    }, [stage, getTasks]);
    
    const classes = useStyles();
    
    const renderRow = ({index, style}) => {
        return (
            <TaskItem task={props.tasks[index]} key={index} style={style} handleMenu={handleClickOpen}
                      setTask={setTask}/>
        );
    };
    
    let size = useWindowSize();
    
    let [listHeight, setListHeight] = useState(0);
    
    useEffect(() => {
        setListHeight(size.height - 114);
    }, [size]);
    
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = (value) => {
        setOpen(false);
    };
    
    const [task, setTask] = useState(null);
    
    return (
        <div>
            <Box my={3}>
                <Paper className={classes.paper}>
                    <Box>
                        {/*<List subheader={<ListSubheader className={classes.subheader}>{stage} tasks ({props.tasks.length})</ListSubheader>}>*/}
                        {/*    {props.tasks.map(task => (*/}
                        {/*        <TaskItem key={task.id} task={task}/>*/}
                        {/*    ))}*/}
                        {/*</List>*/}
                        {/*<ListSubheader className={classes.subheader}>{stage} tasks ({props.tasks.length})</ListSubheader>*/}
                        <FixedSizeList height={listHeight} itemCount={props.tasks.length} itemSize={64}>
                            {renderRow}
                        </FixedSizeList>
                        <TaskItemMenu open={open} onClose={handleClose} task={task}/>
                    </Box>
                </Paper>
            </Box>
            {stage === 'inbox' ? (
                <TaskAdd/>
            ) : (<></>)
            }
        </div>
    );
}


const mapStateToProps = state => ({
    tasks: state.task.tasks,
});

export default connect(mapStateToProps, {getTasks})(TasksList);
