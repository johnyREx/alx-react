import { Map } from 'immutable';

export const filterTypeSelected = state => state.get('filter');

export const getNotifications = state => {
  const notificationsObj = state.get('entities').get('notifications');
  let notificationsMap = Map();
  Object.entries(notificationsObj).forEach(([key, notification]) => {
    notificationsMap = notificationsMap.set(key, Map(notification));
  });
  return notificationsMap;
};

export const getUnreadNotifications = state => {
  const notifications = getNotifications(state);
  const unreadNotifications = notifications.filter(notification => !notification.get('isRead'));
  return unreadNotifications;
};