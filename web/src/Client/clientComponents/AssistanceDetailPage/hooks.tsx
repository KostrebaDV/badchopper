import {useEffect, useContext, useRef} from 'react';
import {getAllAssistance} from '../../App/api';
import {AppContext} from '../../App/store';

export const useGetAssistanceData = () => {
    const {assistance, setAssistance} = useContext(AppContext);
    const assistanceDataRef = useRef(true);

    useEffect(() => {
        if (assistance.length === 0 && assistanceDataRef.current) {
            getAllAssistance()
                .then(({data}) => {
                    setAssistance(data);
                    assistanceDataRef.current = data.length !== 0;
                });
        }
    }, [setAssistance, assistance]);

    return assistance;
};
