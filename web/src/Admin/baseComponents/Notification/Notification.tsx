import React from 'react';
import { createPortal } from 'react-dom';

import NotificationContentWrapper from './NotificationContentWrapper';
import { NOTIFICATION_PORTAL_CLASS } from './consts';

const notificationPortalNode = document.getElementsByClassName(NOTIFICATION_PORTAL_CLASS)[0];

const Notification = () => {
	return createPortal(
		<NotificationContentWrapper />,
		notificationPortalNode
	);
};

export { Notification };
