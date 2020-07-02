import {useEffect, useState} from 'react';
import {getAllAssistance} from '../../App/api';

export const useGetAssistanceData = () => {
    const [assistanceData, setAssistanceData] = useState([]);

    useEffect(() => {
        getAllAssistance()
            .then(({data}) => setAssistanceData(data));
        // eslint-disable-next-line
    }, []);

    return assistanceData;
};
