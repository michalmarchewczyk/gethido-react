import React from 'react';
import {Link} from 'react-router-dom';
import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';


function LeftMenuLink(props) {
    return (
        <Link to={props.to}>
            <ListItem button>
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText primary={props.text}/>
            </ListItem>
        </Link>
    );
}

export default LeftMenuLink;
