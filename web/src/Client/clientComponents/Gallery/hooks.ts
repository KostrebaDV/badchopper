import {useState} from 'react';

export const useSetActiveIndex = (index) => {
    const [activeIndex, setActiveIndex] = useState(index);

    return {setActiveIndex, activeIndex};
};
