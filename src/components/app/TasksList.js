import React from 'react';
import {FixedSizeList} from 'react-window';
import TaskItem from './TaskItem';

import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    item: {
        // marginTop: theme.spacing(3),
    }
}));


const TasksList = React.memo((props) => {
// const TasksList = (props) => {
    
    const classes = useStyles();
    
    const renderRow = ({index, style}) => {
        return (
            <TaskItem id={index} key={index} style={style} handleMenu={props.handleClickOpen} setTask={props.setTask} className={classes.item}/>
        );
    };
    
    return (
        <div>
            {/*<FixedSizeList height={props.listHeight} itemCount={props.tasksLength} itemSize={64} innerRef={props.innerRef} outerRef={props.outerRef}>*/}
            <FixedSizeList height={props.listHeight} itemCount={props.tasksLength} itemSize={64} innerElementType={props.innerRef} outerElementType={props.outerRef}>
            {/*<FixedSizeList height={props.listHeight} itemCount={props.tasksLength} itemSize={64} innerElementType={props.innerRef} outerRef={props.outerRef.ref}>*/}
                {renderRow}
            </FixedSizeList>
        </div>
    );
}, (prevProps, nextProps) => {
    return prevProps.tasksLength === nextProps.tasksLength
        && prevProps.tasksStage === nextProps.tasksStage
        && prevProps.listHeight === nextProps.listHeight
        && prevProps.stage === nextProps.stage
        && prevProps.innerRef === nextProps.innerRef;
});


const mapStateToProps = state => ({
    tasksLength: state.task.tasks.length,
    tasksStage: state.task.stage,
});

export default connect(mapStateToProps, {})(TasksList);
