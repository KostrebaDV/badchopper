import {useState, useEffect} from 'react';

export const useNormalizeImageItems = (
    {
        itemsFromProps,
        showOnInit
    }
) => {
    const [items, setItems] = useState<{ isLast?: boolean; }[]>([]);
    const [show, setShow] = useState(showOnInit);

    useEffect(() => {
        const mutateImageItems = [...itemsFromProps];

        mutateImageItems.splice(show, itemsFromProps.length);

        if (show < itemsFromProps.length) {
            mutateImageItems.push({ isLast: true });
        }

        setItems(mutateImageItems);
    }, [itemsFromProps, showOnInit, show]);

    return {
        items,
        showMore: setShow,
        showCount: show
    };
};
