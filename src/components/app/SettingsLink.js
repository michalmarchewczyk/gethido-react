import React from 'react';
import {Link} from 'react-router-dom';
import {ListItem, ListItemText} from '@material-ui/core';
import {ChevronRight as ChevronRightIcon} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    red: {
        color: theme.palette.error.main,
    },
    subheader: {
        background: theme.palette.background.paper,
    }
}));


function SettingsLink(props) {
    
    const classes = useStyles();
    
    return (
        <Link to={props.to}>
            <ListItem button>
                <ListItemText primary={props.text} className={props.red ? classes.red : ''}/>
                <ChevronRightIcon/>
            </ListItem>
        </Link>
    );
}

export default SettingsLink;
