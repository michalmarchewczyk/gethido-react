import React from 'react';
import {Divider, Drawer, List, makeStyles, Box} from '@material-ui/core';
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
import LeftMenuLink from './LeftMenuLink';


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
            variant='permanent'
            anchor='left'
            open={true}
            className={classes.drawer}
        >
            <Box mt={8}>
                <List className={[classes.list, (props.drawer ? classes.listOpen : '')].join(' ')}>
                    <LeftMenuLink to='/app/inbox' text='Inbox' icon={<InboxIcon/>}/>
                </List>
                <Divider/>
                <List className={[classes.list, (props.drawer ? classes.listOpen : '')].join(' ')}>
                    <LeftMenuLink to='/app/next' text='Next' icon={<ForwardIcon/>}/>
                    <LeftMenuLink to='/app/waiting' text='Waiting' icon={<ScheduleIcon/>}/>
                    <LeftMenuLink to='/app/calendar' text='Calendar' icon={<EventIcon/>}/>
                    <LeftMenuLink to='/app/projects' text='Projects' icon={<AccountTreeIcon/>}/>
                </List>
                <Divider/>
                <List className={[classes.list, (props.drawer ? classes.listOpen : '')].join(' ')}>
                    <LeftMenuLink to='/app/trash' text='Trash' icon={<DeleteIcon/>}/>
                    <LeftMenuLink to='/app/someday' text='Someday' icon={<BookmarkIcon/>}/>
                    <LeftMenuLink to='/app/reference' text='Reference' icon={<FolderIcon/>}/>
                </List>
                <Divider/>
                <List className={[classes.list, (props.drawer ? classes.listOpen : '')].join(' ')}>
                    <LeftMenuLink to='/app/completed' text='Completed' icon={<DoneIcon/>}/>
                </List>
            </Box>
        </Drawer>
    );
}

export default LeftMenu;
