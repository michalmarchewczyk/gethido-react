import React from 'react';
import {FixedSizeList} from 'react-window';
import TaskItem from './TaskItem';

import {connect} from 'react-redux';


const TasksList = React.memo((props) => {
    
    const renderRow = ({index, style}) => {
        return (
            <TaskItem id={index} key={index} style={style} handleMenu={props.handleClickOpen} setTask={props.setTask}/>
        );
    };
    
    return (
        <div>
            <FixedSizeList height={props.listHeight} itemCount={props.tasksLength} itemSize={64}>
                {renderRow}
            </FixedSizeList>
        </div>
    );
}, (prevProps, nextProps) => {
    return prevProps.tasksLength === nextProps.tasksLength && prevProps.tasksStage === nextProps.tasksStage;
});


const mapStateToProps = state => ({
    tasksLength: state.task.tasks.length,
    tasksStage: state.task.stage,
});

export default connect(mapStateToProps, {})(TasksList);
