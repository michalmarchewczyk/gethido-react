import {useEffect} from 'react';


const AppName = 'GeThiDo';

export default function useDocumentTitle(title) {
    useEffect(() => {
        document.title = `${AppName} - ${title}`;
    })
}
