import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

const initialState = {
    filter: 'DEFAULT',
    notifications: []
};

export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const updatedNotifications = action.data.map(notification => ({
                ...notification,
                isRead: false
            }));
            return {
                ...state,
                notifications: updatedNotifications
            };
        case MARK_AS_READ:
            const indexToMark = action.index;
            const markedNotifications = state.notifications.map((notification, index) => {
                if (index === indexToMark) {
                    return {
                        ...notification,
                        isRead: true
                    };
                }
                return notification;
            });
            return {
                ...state,
                notifications: markedNotifications
            };
        case SET_TYPE_FILTER:
            return {
                ...state,
                filter: action.filter
            };
        default:
            return state;
    }
}