import React from 'react';
import {
    Paper,
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
import {Brightness4 as Brightness4Icon, FormatSize as FormatSizeIcon} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';
import SettingsLink from './SettingsLink';

import {connect} from 'react-redux';
import {changeSettings} from '../../actions/userActions';


const useStyles = makeStyles((theme) => ({
    subheader: {
        background: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
    }
}));


function SettingsList(props) {
    
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
                                    <Switch edge='end' checked={!!(props.settings && props.settings.darkTheme)}
                                            onChange={() => {
                                                props.changeSettings({darkTheme: !(props.settings && props.settings.darkTheme)})
                                            }}/>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FormatSizeIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Bigger font size'/>
                                <ListItemSecondaryAction>
                                    <Switch edge='end' checked={!!(props.settings && props.settings.largeFont)}
                                            onChange={() => {
                                                props.changeSettings({largeFont: !(props.settings && props.settings.largeFont)})
                                            }}/>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </Box>
                    <Divider/>
                    <Box my={1}>
                        <List subheader={<ListSubheader className={classes.subheader}>Emails</ListSubheader>}>
                            <SettingsLink to='/app/settings/emails/view' text='View current inbox email addresses'/>
                            <SettingsLink to='/app/settings/emails/set' text='Generate new inbox email address'/>
                            <SettingsLink to='/app/settings/emails/delete' text='Delete existing inbox email address'/>
                        </List>
                    </Box>
                    <Divider/>
                    <Box my={1}>
                        <List subheader={<ListSubheader className={classes.subheader}>User</ListSubheader>}>
                            <SettingsLink to='/app/settings/username' text='Change username'/>
                            <SettingsLink to='/app/settings/email' text='Change email address'/>
                            <SettingsLink to='/app/settings/password' text='Change password'/>
                            <SettingsLink to='/app/settings/delete' text='Delete account' red={true}/>
                        </List>
                    </Box>
                </Paper>
            </Box>
        </div>
    );
}

const mapStateToProps = state => ({
    settings: state.user.user.settings
});

export default connect(mapStateToProps, {changeSettings})(SettingsList);
