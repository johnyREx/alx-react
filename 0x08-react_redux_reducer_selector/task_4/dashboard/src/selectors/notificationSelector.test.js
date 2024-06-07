import { notificationReducer, initialState } from '../reducers/notificationReducer';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

describe('notificationSelector', () => {
  let state;

  beforeAll(() => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        { id: 3, type: 'default', value: 'New data available', isRead: false }
      ]
    };
    state = notificationReducer(initialState, action);
  });

  it('filterTypeSelected should return the value of the filter', () => {
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  it('getNotifications should returns the list of notifications', () => {
    const notifications = getNotifications(state);
    expect(notifications.size).toEqual(3);
    expect(notifications.get('1').get('value')).toEqual('New course available');
    expect(notifications.get('2').get('value')).toEqual('New resume available');
    expect(notifications.get('3').get('value')).toEqual('New data available');
  });

  it('getUnreadNotifications should return the list of unread notifications in a Map format', () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications.size).toEqual(3);
    expect(unreadNotifications.get('1').get('isRead')).toEqual(false);
    expect(unreadNotifications.get('3').get('isRead')).toEqual(false);
  });
});