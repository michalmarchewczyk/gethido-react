import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemSecondaryAction,
    Checkbox,
    Typography,
    IconButton,
    useTheme, useMediaQuery
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
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
    Launch as LaunchIcon,
    MoreVert as MoreVertIcon
} from '@material-ui/icons';

import {connect} from 'react-redux';
import {updateTask, moveTask, deleteTask} from '../../actions/taskActions';
import moment from 'moment';


const useStyles = makeStyles((theme) => ({
    container: {
        '&:hover $action': {
            // visibility: 'inherit',
            opacity: 1,
        },
        '@media (min-width: 960px)': {
            '&:hover $name': {
                maxWidth: 'calc(100% - 500px)',
            },
            '&:hover $desc': {
                maxWidth: 'calc(100% - 500px)',
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
    
    const [completed, setCompleted] = useState(false);
    
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));
    
    const handleChange = (e) => {
        e.preventDefault();
        e.stopPropagation();
        props.updateTask({id: task.id, completed: !task.completed});
        if (props.autoCompleted && completed === false) {
            props.moveTask({id: task.id, stage: 'completed'});
        }
        setCompleted(!completed);
        
    };
    
    useEffect(() => {
        // console.log(task.completed, task.stage);
        setCompleted(task.completed);
    }, [task.completed]);
    
    const handleMove = (stage) => {
        props.moveTask({id: task.id, stage: stage})
    };
    
    const handleDelete = () => {
        props.deleteTask({id: task.id});
    };
    
    return (
        <div style={props.style} className={`${classes.container} ${props.className}`}>
            <ListItem button dense className={classes.item} ContainerComponent='div' onClick={handleChange}>
                <ListItemIcon>
                    <Checkbox
                        checked={completed}
                        color='secondary'
                        disableRipple
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
                            {(task.stage === 'calendar') ? (task.calDate ? moment(task.calDate).format('YYYY-MM-DD HH:mm - ') : 'Not set - ') : ''}{task.description}
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
                    ) : (<>
                        {(task.stage === 'inbox' || props.allOptions === true) ? (<>
                            {props.allOptions === true ? (<>
                                <IconButton onClick={() => handleMove('inbox')}>
                                    <InboxIcon/>
                                </IconButton>
                                <IconButton onClick={() => handleMove('completed')}>
                                    <DoneIcon/>
                                </IconButton>
                            </>) : (<></>)}
                            <IconButton onClick={() => handleMove('next')}>
                                <ForwardIcon/>
                            </IconButton>
                            <IconButton onClick={() => handleMove('waiting')}>
                                <ScheduleIcon/>
                            </IconButton>
                            <IconButton onClick={() => handleMove('calendar')}>
                                <EventIcon/>
                            </IconButton>
                            <IconButton onClick={() => handleMove('projects')}>
                                <AccountTreeIcon/>
                            </IconButton>
                            {(task.stage === 'trash') ? (<>
                                <IconButton onClick={() => handleDelete()}>
                                    <DeleteForeverIcon/>
                                </IconButton>
                            </>) : (<>
                                <IconButton onClick={() => handleMove('trash')}>
                                    <DeleteIcon/>
                                </IconButton>
                            </>)}
                            <IconButton onClick={() => handleMove('someday')}>
                                <BookmarkIcon/>
                            </IconButton>
                            <IconButton onClick={() => handleMove('reference')}>
                                <FolderIcon/>
                            </IconButton>
                        </>) : (<>
                            <IconButton onClick={() => handleMove('inbox')}>
                                <InboxIcon/>
                            </IconButton>
                            {(task.stage !== 'completed') ? (<>
                                <IconButton onClick={() => handleMove('completed')}>
                                    <DoneIcon/>
                                </IconButton>
                            </>) : (<></>)}
                            {(task.stage === 'trash') ? (<>
                                <IconButton onClick={() => handleDelete()}>
                                    <DeleteForeverIcon/>
                                </IconButton>
                            </>) : (<>
                                <IconButton onClick={() => handleMove('trash')}>
                                    <DeleteIcon/>
                                </IconButton>
                            </>)}
                        </>)}
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

const mapStateToProps = (state, ownProps) => ({
    // tasks: state.task.tasks,
    task: state.task.tasks[ownProps.id],
    allOptions: state.user.user.settings.allOptions,
    autoCompleted: state.user.user.settings.autoCompleted,
});

export default connect(mapStateToProps, {updateTask, moveTask, deleteTask})(TaskItem);
