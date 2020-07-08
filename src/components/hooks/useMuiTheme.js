import {createMuiTheme} from '@material-ui/core';
import {useState} from 'react';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';


const themes = {
    light: {
        palette: {
            type: 'light',
            secondary: blue,
            background: {
                default: grey[200]
            },
        },
        zIndex: {
            drawer: 1100,
            appBar: 1200
        }
    },
    dark:{
        palette: {
            type: 'dark',
            secondary: blue,
        },
        zIndex: {
            drawer: 1100,
            appBar: 1200
        },
    }
};


export default function useMuiTheme() {
    const [theme, _setTheme] = useState(createMuiTheme(themes.light));
    
    
    const setTheme = (themeType) => {
        let t;
        switch (themeType) {
            case 'light':
                 t = createMuiTheme(themes.light);
                 break;
            case 'dark':
                t = createMuiTheme(themes.dark);
                break;
            default:
                t = createMuiTheme(themes.light);
        }
        
        _setTheme(t);
    };
    
    return [theme, setTheme];
}
