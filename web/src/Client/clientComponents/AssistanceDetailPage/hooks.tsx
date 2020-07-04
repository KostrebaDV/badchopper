import {useEffect, useContext} from 'react';
import {getAllAssistance} from '../../App/api';
import {AppContext} from '../../App/store';

export const useGetAssistanceData = () => {
    const {assistance, setAssistance} = useContext(AppContext);

    useEffect(() => {
        if (assistance.length === 0) {
            getAllAssistance()
                .then(({data}) => setAssistance(data));
        }
    }, [setAssistance, assistance]);

    return assistance;
};
