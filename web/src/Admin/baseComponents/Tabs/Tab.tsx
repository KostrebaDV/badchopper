import React, {useContext} from 'react';
import {TabsContext} from './store/const';

const Tab = (
    {
        children,
        tabName,
        useUnmount,
        //need on first init
        activeTabName: activeTabNameFromProps
    }
) => {
    const {activeTabName} = useContext(TabsContext)

    const showTab = activeTabName.length !== 0 ? tabName === activeTabName : tabName === activeTabNameFromProps

    const componentStyles = showTab ? { display: 'block' } : { display: 'none' }

    return (
        <>
            {
                (useUnmount && showTab) && (
                    React.cloneElement(children)
                )
            }
            {
                <div style={componentStyles}>
                    {
                        !useUnmount && (
                            React.cloneElement(children)
                        )
                    }
                </div>

            }
        </>
    );
};

Tab.defaultProps = {
    useUnmount: true
}

export {Tab};
