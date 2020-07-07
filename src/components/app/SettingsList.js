import React, {useEffect} from 'react';
import {
    Paper,
    Typography,
    List,
    ListSubheader,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction,
    Switch,
    Box,
    Divider,
} from '@material-ui/core';
import {ChevronRight as ChevronRightIcon, Brightness4 as Brightness4Icon} from '@material-ui/icons';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    red: {
        color: theme.palette.error.main,
    },
    subheader: {
        background: theme.palette.background.paper,
    }
}));

function SettingsList() {
    
    const classes = useStyles();
    
    return (
        <div>
            <Box my={3}>
                <Paper>
                    <Box my={1}>
                        <List subheader={<ListSubheader className={classes.subheader}>Appearance</ListSubheader>}>
                            <ListItem>
                                <ListItemIcon>
                                    <Brightness4Icon/>
                                </ListItemIcon>
                                <ListItemText primary='Dark mode'/>
                                <ListItemSecondaryAction>
                                    <Switch edge='end'/>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </Box>
                    <Divider/>
                    <Box my={1}>
                        <List subheader={<ListSubheader className={classes.subheader}>Emails</ListSubheader>}>
                            <Link to='/app/settings/emails/view'>
                                <ListItem button>
                                    <ListItemText primary='View current inbox email addresses' />
                                    <ChevronRightIcon/>
                                </ListItem>
                            </Link>
                            <Link to='/app/settings/emails/set'>
                                <ListItem button>
                                    <ListItemText primary='Generate new inbox email address' />
                                    <ChevronRightIcon/>
                                </ListItem>
                            </Link>
                            <Link to='/app/settings/emails/delete'>
                                <ListItem button>
                                    <ListItemText primary='Delete existing inbox email address' />
                                    <ChevronRightIcon/>
                                </ListItem>
                            </Link>
                        </List>
                    </Box>
                    <Divider/>
                    <Box my={1}>
                        <List subheader={<ListSubheader className={classes.subheader}>User</ListSubheader>}>
                            <Link to='/app/settings/username'>
                                <ListItem button>
                                    <ListItemText primary='Change username' />
                                    <ChevronRightIcon/>
                                </ListItem>
                            </Link>
                            <Link to='/app/settings/email'>
                                <ListItem button>
                                    <ListItemText primary='Change email address' />
                                    <ChevronRightIcon/>
                                </ListItem>
                            </Link>
                            <Link to='/app/settings/password'>
                                <ListItem button>
                                    <ListItemText primary='Change password' />
                                    <ChevronRightIcon/>
                                </ListItem>
                            </Link>
                            <Link to='/app/settings/delete'>
                                <ListItem button>
                                    <ListItemText primary='Delete account'  className={classes.red}/>
                                    <ChevronRightIcon/>
                                </ListItem>
                            </Link>
                        </List>
                    </Box>
                </Paper>
            </Box>
        </div>
    );
}

export default SettingsList;
