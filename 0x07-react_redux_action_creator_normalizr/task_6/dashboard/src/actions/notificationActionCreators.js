import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import { bindActionCreators } from 'redux';

export function markAsAread(index) {
    return {
        type: MARK_AS_READ,
        index
    }
}

export function setNoificationFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        filter
    }
}

export const boundMarkAsRead = (dispatch) => bindActionCreators(markAsAread, dispatch);
export const boundsetNotificationFilter = (dispatch) => bindActionCreators(setNoificationFilter, dispatch);