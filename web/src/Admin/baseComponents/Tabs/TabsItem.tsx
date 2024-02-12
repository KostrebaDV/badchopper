import React, {useContext, useMemo, useCallback} from 'react';
import {TabsContext} from './store/const';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';

const TabsItem = (
    {
        label,
        tabName,
        activeTabName: activeTabNameFromProps
    }
) => {
    const {activeTabName, setActiveTab} = useContext(TabsContext);

    const allowChange = useMemo(() => {
        return activeTabName.length !== 0 ? tabName !== activeTabName : tabName !== activeTabNameFromProps;
    }, [activeTabName, activeTabNameFromProps, tabName]);

    const handleTabClick = useCallback(() => {
        if (allowChange) {
            setActiveTab(tabName);
        }
    }, [setActiveTab, tabName, allowChange]);

    const isActiveTab = activeTabName.length !== 0 ? tabName === activeTabName : tabName === activeTabNameFromProps;

    const componentClassName = ClassNames(
        {
            [classes.tabsItem__active]: isActiveTab
        },
        classes.tabsItem
    );

    return (
        <div
            className={componentClassName}
            onClick={handleTabClick}
        >
            {label}
        </div>
    );
};

export {TabsItem};
