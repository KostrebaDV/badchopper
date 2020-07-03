import storeOutline from '@iconify/icons-mdi/store-outline';
import accountGroupOutline from '@iconify/icons-mdi/account-group-outline';
import shoppingOutline from '@iconify/icons-mdi/shopping-outline';
import chatOutline from '@iconify/icons-mdi/chat-outline';
import fileImageOutline from '@iconify/icons-mdi/file-image-outline';
import imageMultipleOutline from '@iconify/icons-mdi/image-multiple-outline';

export const getNavigationItemIcon = (iconName: string) => {
    const icons = {
        department: storeOutline,
        employee: accountGroupOutline,
        assistance: shoppingOutline,
        feedbacks: chatOutline,
        fileImageOutline: fileImageOutline,
        gallery: imageMultipleOutline,
    };

    return icons[iconName];
};
