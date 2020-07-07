import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import SettingsList from './SettingsList';
import useDocumentTitle from '../hooks/useDocumentTitle';
import EmailsView from './settings/EmailsView';
import EmailsSet from './settings/EmailsSet';
import EmailsDelete from './settings/EmailsDelete';
import SettingsUsername from './settings/SettingsUsername';
import SettingsEmail from './settings/SettingsEmail';
import SettingsPassword from './settings/SettingsPassword';
import SettingsDelete from './settings/SettingsDelete';


function Settings(props) {
    useDocumentTitle('Settings');
    
    useEffect(() => {
        props.setStage('Settings');
    });
    
    return (
        <div>
            <Switch>
                <Route path='/app/settings/emails/view'>
                    <EmailsView/>
                </Route>
                <Route path='/app/settings/emails/set'>
                    <EmailsSet/>
                </Route>
                <Route path='/app/settings/emails/delete'>
                    <EmailsDelete/>
                </Route>
                <Route path='/app/settings/username'>
                    <SettingsUsername/>
                </Route>
                <Route path='/app/settings/email'>
                    <SettingsEmail/>
                </Route>
                <Route path='/app/settings/password'>
                    <SettingsPassword/>
                </Route>
                <Route path='/app/settings/delete'>
                    <SettingsDelete/>
                </Route>
                <Route path='/app/settings'>
                    <SettingsList/>
                </Route>
            </Switch>
        </div>
    );
}

export default Settings;
