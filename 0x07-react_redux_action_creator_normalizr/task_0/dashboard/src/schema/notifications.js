// notifications.js

import notificationsData from '../../notifications.json';

export function getAllNotificationsByUser(userId) {
    console.log(typeof (notificationsData));

    return notificationsData.filter(notification => notification.author.id === userId)
        .map(notification => notification.context);
}
