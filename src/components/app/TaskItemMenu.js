import React from 'react';
import {
    Dialog,
    DialogTitle,
    List,
    DialogActions,
    ListItem,
    ListItemText,
    Button,
    ListItemIcon,
} from '@material-ui/core';
import {
    Inbox as InboxIcon,
    Forward as ForwardIcon,
    Schedule as ScheduleIcon,
    Event as EventIcon,
    AccountTree as AccountTreeIcon,
    Delete as DeleteIcon,
    Bookmark as BookmarkIcon,
    Folder as FolderIcon,
    Done as DoneIcon,
    DeleteForever as DeleteForeverIcon,
} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

import {connect} from 'react-redux';
import {moveTask, deleteTask} from '../../actions/taskActions';


const useStyles = makeStyles((theme) => ({
    name: {
        display: 'inline-block',
        maxWidth: 200,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontStyle: 'italic',
        float: 'left',
    },
}));


function TaskItemMenu(props) {
    const {onClose, open, task} = props;
    
    const handleClose = () => {
        onClose();
    };
    
    const handleListItemClick = (value) => {
        onClose();
        props.moveTask({id: task.id, stage: value})
    };
    
    const handleDelete = () => {
        props.deleteTask({id: task.id});
    };
    
    const classes = useStyles();
    
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle><span style={{float: 'left'}}>Move task&nbsp;</span> <span
                className={classes.name}>{(task) ? task.name : ''}</span>&nbsp;to</DialogTitle>
            <List dense>
                {(task) ? (<>
                    {(task.stage === 'inbox' || props.allOptions === true) ? (<>
                        {props.allOptions === true ? (<>
                            <ListItem button onClick={() => handleListItemClick('inbox')}>
                                <ListItemIcon>
                                    <InboxIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Inbox'/>
                            </ListItem>
                            <ListItem button onClick={() => handleListItemClick('completed')}>
                                <ListItemIcon>
                                    <DoneIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Completed'/>
                            </ListItem>
                        </>) : (<></>)}
                        <ListItem button onClick={() => handleListItemClick('next')}>
                            <ListItemIcon>
                                <ForwardIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Next'/>
                        </ListItem>
                        <ListItem button onClick={() => handleListItemClick('waiting')}>
                            <ListItemIcon>
                                <ScheduleIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Waiting'/>
                        </ListItem>
                        <ListItem button onClick={() => handleListItemClick('calendar')}>
                            <ListItemIcon>
                                <EventIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Calendar'/>
                        </ListItem>
                        <ListItem button onClick={() => handleListItemClick('projects')}>
                            <ListItemIcon>
                                <AccountTreeIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Projects'/>
                        </ListItem>
                        {(task.stage === 'trash') ? (<>
                            <ListItem button onClick={() => handleDelete()}>
                                <ListItemIcon>
                                    <DeleteForeverIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Delete forever'/>
                            </ListItem>
                        </>) : (<>
                            <ListItem button onClick={() => handleListItemClick('trash')}>
                                <ListItemIcon>
                                    <DeleteIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Trash'/>
                            </ListItem>
                        </>)}
                        <ListItem button onClick={() => handleListItemClick('someday')}>
                            <ListItemIcon>
                                <BookmarkIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Someday'/>
                        </ListItem>
                        <ListItem button onClick={() => handleListItemClick('reference')}>
                            <ListItemIcon>
                                <FolderIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Reference'/>
                        </ListItem>
                    </>) : (<>
                        <ListItem button onClick={() => handleListItemClick('inbox')}>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Inbox'/>
                        </ListItem>
                        {(task.stage !== 'completed') ? (<>
                            <ListItem button onClick={() => handleListItemClick('completed')}>
                                <ListItemIcon>
                                    <DoneIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Completed'/>
                            </ListItem>
                        </>) : (<></>)}
                        {(task.stage === 'trash') ? (<>
                            <ListItem button onClick={() => handleDelete()}>
                                <ListItemIcon>
                                    <DeleteForeverIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Delete forever'/>
                            </ListItem>
                        </>) : (<>
                            <ListItem button onClick={() => handleListItemClick('trash')}>
                                <ListItemIcon>
                                    <DeleteIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Trash'/>
                            </ListItem>
                        </>)}
                    </>)}
                </>) : (<></>)}
            </List>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}


const mapStateToProps = state => ({
    allOptions: state.user.user.settings.allOptions,
});

export default connect(mapStateToProps, {moveTask, deleteTask})(TaskItemMenu);
