import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemText, ListItemIcon, makeStyles, Box} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {
    Inbox as InboxIcon,
    Forward as ForwardIcon,
    Schedule as ScheduleIcon,
    Event as EventIcon,
    AccountTree as AccountTreeIcon,
    Delete as DeleteIcon,
    Bookmark as BookmarkIcon,
    Folder as FolderIcon,
    Done as DoneIcon
} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    list: {
        width: 60,
        overflowX: 'hidden',
        transition: 'width 150ms cubic-bezier(0.4,0,0.6,1)',
    },
    listOpen: {
        width: 220,
        transition: 'width 250ms cubic-bezier(0,0,0.2,1)',
    },
    drawer: {
        zIndex: `${theme.zIndex.drawer} !important`,
        overflowX: 'hidden',
    },
}));


function LeftMenu(props) {
    
    const classes = useStyles();
    
    return (
        <Drawer
            variant='persistent'
            anchor='left'
            open={true}
            className={classes.drawer}
        >
            <Box mt={8}>
                <List className={[classes.list, (props.drawer ? classes.listOpen : '')].join(' ')}>
                    <Link to='/app/inbox'>
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Inbox'/>
                        </ListItem>
                    </Link>
                </List>
                <Divider/>
                <List className={[classes.list, (props.drawer ? classes.listOpen : '')].join(' ')}>
                    <Link to='/app/next'>
                        <ListItem button>
                            <ListItemIcon>
                                <ForwardIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Next'/>
                        </ListItem>
                    </Link>
                    <Link to='/app/waiting'>
                        <ListItem button>
                            <ListItemIcon>
                                <ScheduleIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Waiting'/>
                        </ListItem>
                    </Link>
                    <Link to='/app/calendar'>
                        <ListItem button>
                            <ListItemIcon>
                                <EventIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Calendar'/>
                        </ListItem>
                    </Link>
                    <Link to='/app/projects'>
                        <ListItem button>
                            <ListItemIcon>
                                <AccountTreeIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Projects'/>
                        </ListItem>
                    </Link>
                </List>
                <Divider/>
                <List className={[classes.list, (props.drawer ? classes.listOpen : '')].join(' ')}>
                    <Link to='/app/trash'>
                        <ListItem button>
                            <ListItemIcon>
                                <DeleteIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Trash'/>
                        </ListItem>
                    </Link>
                    <Link to='/app/someday'>
                        <ListItem button>
                            <ListItemIcon>
                                <BookmarkIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Someday'/>
                        </ListItem>
                    </Link>
                    <Link to='/app/reference'>
                        <ListItem button>
                            <ListItemIcon>
                                <FolderIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Reference'/>
                        </ListItem>
                    </Link>
                </List>
                <Divider/>
                <List className={[classes.list, (props.drawer ? classes.listOpen : '')].join(' ')}>
                    <Link to='/app/completed'>
                        <ListItem button>
                            <ListItemIcon>
                                <DoneIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Completed'/>
                        </ListItem>
                    </Link>
                </List>
            </Box>
        </Drawer>
    );
}

export default LeftMenu;
