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
    // Inbox as InboxIcon,
    Forward as ForwardIcon,
    Schedule as ScheduleIcon,
    Event as EventIcon,
    AccountTree as AccountTreeIcon,
    Delete as DeleteIcon,
    Bookmark as BookmarkIcon,
    Folder as FolderIcon,
    // Done as DoneIcon,
    // ZoomOutMap as ZoomOutMapIcon,
    // Launch as LaunchIcon, MoreVert as MoreVertIcon
} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';


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
    const { onClose, open, task } = props;
    
    const handleClose = () => {
        onClose();
    };
    
    const handleListItemClick = (value) => {
        onClose();
    };
    
    const classes = useStyles();
    
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle><span style={{float: 'left'}}>Move task&nbsp;</span> <span className={classes.name}>{(task)? task.name : ''}</span>&nbsp;to</DialogTitle>
            <List dense>
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
                <ListItem button onClick={() => handleListItemClick('trash')}>
                    <ListItemIcon>
                        <DeleteIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Trash'/>
                </ListItem>
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
            </List>
            <DialogActions>
                <Button  onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}

export default TaskItemMenu;
