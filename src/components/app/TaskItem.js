import React from 'react';
import {Link} from 'react-router-dom';
import {
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemSecondaryAction,
    Checkbox,
    Typography,
    // Box,
    IconButton,
    // Menu,
    // MenuItem,
    // Divider,
    // Toolbar,
    useTheme, useMediaQuery
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
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
    Launch as LaunchIcon, MoreVert as MoreVertIcon
} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    container: {
        '&:hover $action': {
            // visibility: 'inherit',
            opacity: 1,
        },
        '@media (min-width: 960px)': {
            '&:hover $name': {
                maxWidth: 'calc(100% - 400px)',
            },
            '&:hover $desc': {
                maxWidth: 'calc(100% - 400px)',
            }
        }
    },
    item: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
    },
    name: {
        width: 300,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    desc: {
        width: 350,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    action: {
        // visibility: 'hidden',
        opacity: 0,
        transition: 'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
            // visibility: 'inherit',
            opacity: 1,
        }
    }
}));


function TaskItem(props) {
    const {task} = props;

    const classes = useStyles();
    
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));
    
    const handleChange = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    
    return (
        <div style={props.style} className={classes.container}>
        <ListItem button dense className={classes.item} ContainerComponent='div'>
            <ListItemIcon>
                <Checkbox
                    // edge='start'
                    checked={task.completed}
                    color='secondary'
                    disableRipple
                    onChange={handleChange}
                />
            </ListItemIcon>
            <ListItemText
                primary={
                    <Typography className={classes.name} variant='body1'>
                        {task.name}
                    </Typography>
                }
                secondary={
                    <Typography className={classes.desc} color='textSecondary' variant='body2'>
                        {task.description}
                    </Typography>
                }
            />
            <ListItemSecondaryAction className={classes.action}>
                {small ? (
                    <IconButton onClick={() => {
                        props.setTask(task);
                        props.handleMenu();
                    }}>
                        <MoreVertIcon/>
                    </IconButton>
                    // <></>
                ) : (<>
                    <IconButton>
                        <ForwardIcon/>
                    </IconButton>
                    <IconButton>
                        <ScheduleIcon/>
                    </IconButton>
                    <IconButton>
                        <EventIcon/>
                    </IconButton>
                    <IconButton>
                        <AccountTreeIcon/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton>
                        <BookmarkIcon/>
                    </IconButton>
                    <IconButton>
                        <FolderIcon/>
                    </IconButton>
                </>)}
                <Link to={`/app/task/${task.id}`}>
                    <IconButton>
                        <LaunchIcon/>
                    </IconButton>
                </Link>
            </ListItemSecondaryAction>
        </ListItem>
        </div>
    );
}

export default TaskItem;
