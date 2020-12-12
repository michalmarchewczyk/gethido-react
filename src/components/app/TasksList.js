import React from 'react';
import {FixedSizeList} from 'react-window';
import TaskItem from './TaskItem';

import {connect} from 'react-redux';

import {Typography, Paper, Box} from '@material-ui/core';


const TasksList = React.memo((props) => {
// const TasksList = (props) => {
    
    const renderRow = ({index, style}) => {
        return (
            <TaskItem id={index} key={index} style={style} handleMenu={props.handleClickOpen} setTask={props.setTask}/>
        );
    };
    
    return (
        <div className={props.className}>
            {(props.tasksLength >= 1)? (
                <FixedSizeList height={props.listHeight} itemCount={props.tasksLength} itemSize={64} innerElementType={props.innerRef} outerElementType={props.outerRef}>
                    {renderRow}
                </FixedSizeList>
            ) : (
                <Box m={3}>
                    <Paper style={{maxWidth: '1232px', marginLeft: 'auto', marginRight: 'auto'}}>
                        <Box p={4}>
                            <Typography variant='h3' component='p' color='textSecondary' align='center'>
                                No tasks
                            </Typography>
                        </Box>
                    </Paper>
                </Box>
            )}
        </div>
    );
}, (prevProps, nextProps) => {
    return prevProps.tasksLength === nextProps.tasksLength
        && prevProps.tasksStage === nextProps.tasksStage
        && prevProps.listHeight === nextProps.listHeight
        && prevProps.stage === nextProps.stage
        && prevProps.className === nextProps.className
        // && prevProps.innerRef === nextProps.innerRef;
        // && prevProps.outerRef === nextProps.outerRef;
});


const mapStateToProps = state => ({
    tasksLength: state.task.tasks.length,
    tasksStage: state.task.stage,
});

export default connect(mapStateToProps, {})(TasksList);
