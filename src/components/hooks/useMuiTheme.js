import {createMuiTheme} from '@material-ui/core';
import {useState, useMemo} from 'react';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';


const themes = {
    default: {
        zIndex: {
            drawer: 1100,
            appBar: 1200
        },
        mixins: {
            toolbar: {
                minHeight: '64px !important',
            }
        }
    },
    light: {
        palette: {
            type: 'light',
            secondary: blue,
            background: {
                default: grey[200]
            },
        },
    },
    dark: {
        palette: {
            type: 'dark',
            secondary: blue,
        },
    },
    normalFont: {
        typography: {
            fontSize: 14
        }
    },
    largeFont: {
        typography: {
            fontSize: 16
        }
    }
};


export default function useMuiTheme() {
    
    const [theme, _setTheme] = useState(createMuiTheme({...themes.default, ...themes.light, ...themes.normalFont}));
    
    const setTheme = useMemo(() => (themeType) => {
        let t;
        switch (themeType) {
            case 'light-normal':
                 t = createMuiTheme({...themes.default, ...themes.light, ...themes.normalFont});
                 break;
            case 'dark-normal':
                t = createMuiTheme({...themes.default, ...themes.dark, ...themes.normalFont});
                break;
            case 'light-large':
                t = createMuiTheme({...themes.default, ...themes.light, ...themes.largeFont});
                break;
            case 'dark-large':
                t = createMuiTheme({...themes.default, ...themes.dark, ...themes.largeFont});
                break;
            default:
                t = createMuiTheme({...themes.light, ...themes.normalFont});
        }
        
        _setTheme(t);
    }, []);
    
    return [theme, setTheme];
}
