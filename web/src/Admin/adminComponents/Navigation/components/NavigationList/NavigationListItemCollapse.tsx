import React, {useState} from 'react';

import {NavigationListItemWithItems} from './NavigationListItemWithItems';
import {NavigationListCollapseSection} from './NavigationListCollapseSection';

const NavigationListItemCollapse = (
    {
        item
    }
) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <NavigationListItemWithItems
                item={item}
                open={open}
                setOpen={setOpen}
            />
            {
                open && (
                    <NavigationListCollapseSection
                        items={item.items}
                    />
                )
            }
        </>

    );
};

export {NavigationListItemCollapse};
