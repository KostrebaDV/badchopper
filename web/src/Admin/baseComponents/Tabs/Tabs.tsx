import React, {FC, ReactNode, useContext, useEffect} from 'react';
import {TabsContextProvider} from './store/TabsContextProvider';
import {TabsItemList} from './TabsItemList';
import {TabsItem} from './TabsItem';
import {TabsContext} from './store/const';
import {getUniqueKey} from '../../../utils';

type TabsWithContextType = {
    children?: ReactNode;
    tabs: {
        tabName:string;
        label:string;
    }[]
    render: (object) => {}
    activeTabName: string
}

const Tabs = (
    {
        tabs,
        render,
        activeTabName: activeTabNameFromProps
    }
) => {
    const {activeTabName, setActiveTab} = useContext(TabsContext);

    useEffect(() => {
        setActiveTab(activeTabNameFromProps);
        // eslint-disable-next-line
    }, [])

    return (
        <TabsContextProvider>
            <TabsItemList>
                {
                    tabs.map(tab => {
                        return (
                            <TabsItem
                                label={tab.label}
                                key={getUniqueKey()}
                                tabName={tab.tabName}
                                activeTabName={activeTabName}
                            />
                        );
                    })
                }
            </TabsItemList>
            {render({activeTabName})}
        </TabsContextProvider>
    );
};

const TabsWithContext:FC<TabsWithContextType> = (
    {
        tabs,
        render,
        activeTabName
    }
) => {
    return (
        <TabsContextProvider>
            <Tabs
                tabs={tabs}
                render={render}
                activeTabName={activeTabName}
            />
        </TabsContextProvider>
    );
};

export {TabsWithContext};
