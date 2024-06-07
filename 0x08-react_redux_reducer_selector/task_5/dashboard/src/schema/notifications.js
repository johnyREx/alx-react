// notifications.js

import notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr'

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
    author: user,
    context: message,
});

// Normalize data
export const normalizedData = normalize(notificationsData, [notification]);


export function getAllNotificationsByUser(userId) {
    console.log(typeof (notificationsData));

    const notifications = normalizedData.result

    const userNotifications = notifications
        .filter(notificationId => normalizedData.entities.notifications[notificationId].author === userId)
        .map(notificationId => normalizedData.entities.notifications[notificationId].context);
    return userNotifications;
}