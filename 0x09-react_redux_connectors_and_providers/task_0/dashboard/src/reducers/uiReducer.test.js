import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT,
} from '../actions/uiActionTypes'
import uiReducer from './uiReducer';

describe('uiReducer', () => {
    // Test initial state
    test('returns initial state when no action is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        };
        const newState = uiReducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    // Test action DISPLAY_NOTIFICATION_DRAWER
    test('changes isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        };
        const action = { type: DISPLAY_NOTIFICATION_DRAWER };
        const newState = uiReducer(initialState, action);
        expect(newState.isNotificationDrawerVisible).toEqual(true);
    });

    // Test action HIDE_NOTIFICATION_DRAWER
    test('changes isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: true,
            isUserLoggedIn: false,
            user: {}
        };
        const action = { type: HIDE_NOTIFICATION_DRAWER };
        const newState = uiReducer(initialState, action);
        expect(newState.isNotificationDrawerVisible).toEqual(false);
    });

    // Test action LOGIN_SUCCESS
    test('changes isUserLoggedIn to true when LOGIN_SUCCESS is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        };
        const action = { type: LOGIN_SUCCESS };
        const newState = uiReducer(initialState, action);
        expect(newState.isUserLoggedIn).toEqual(true);
    });

    // Test action LOGIN_FAILURE
    test('changes isUserLoggedIn to false when LOGIN_FAILURE is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: {}
        };
        const action = { type: LOGIN_FAILURE };
        const newState = uiReducer(initialState, action);
        expect(newState.isUserLoggedIn).toEqual(false);
    });
});