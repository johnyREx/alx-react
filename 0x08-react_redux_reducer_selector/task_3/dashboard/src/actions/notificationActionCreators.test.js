import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsAread, setNoificationFilter } from "./notificationActionCreators";

test('markAsRead action creator', () => {
    const index = 1;
    const expectedAction = {
        type: MARK_AS_READ,
        index
    }

    expectedAction(markAsAread(index).toEqual(expectedAction))
});

test('setNotificationFilter action creator', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
        type: SET_TYPE_FILTER,
        filter
    };
    expect(setNoificationFilter(filter)).toEqual(expectedAction);
})