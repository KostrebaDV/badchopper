import React, {useState} from 'react';
import {AssistanceListItem} from './AssistanceListItem';
import {getUniqueKey} from '../../../../../utils';
import classes from './styles/index.module.scss';
import {isMobile} from "react-device-detect";
import {AssistanceListItemMobilePreview} from './AssistanceListItemMobilePreview';

const AssistanceList = (
    {
        assistance
    }
) => {
    const [selectedItem, setSelectedItem] = useState({})
    const [openModal, setOpenModal] = useState(false)

    const onItemClick = id => {
        const currentItem = assistance.find(item => item._id === id);

        setSelectedItem(currentItem);
        setOpenModal(true);
    }

    const closeItemModal = () => {
        setOpenModal(false);
        setSelectedItem({});
    }

    return (
        <>
            <div className={classes.assistanceList}>
                {
                    assistance.map((item, index) => {
                        return (
                            <AssistanceListItem
                                key={getUniqueKey()}
                                item={item}
                                index={index + 1}
                                onItemClick={id => onItemClick(id)}
                            />
                        );
                    })
                }
            </div>
            {
                isMobile && (
                    <AssistanceListItemMobilePreview
                        item={selectedItem}
                        open={openModal}
                        closeItemModal={closeItemModal}
                    />
                )
            }
        </>
    );
};

export {AssistanceList};
