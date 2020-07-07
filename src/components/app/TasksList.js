import React, {useEffect} from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';


function TasksList(props) {
    useDocumentTitle(props.stage.charAt(0).toUpperCase() + props.stage.slice(1));
    
    useEffect(() => {
        props.setStage(props.stage);
    });
    
    return (
        <div>
            <h1>{props.stage}</h1>
        </div>
    );
}

export default TasksList;
