import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT,
} from '../actions/uiActionTypes'
import uiReducer from './uiReducer';
import { Map } from "immutable";

describe('uiReducer', () => {
    // Test initial state
    test('returns initial state when no action is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map({})
        });
        const newState = uiReducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    // Test action DISPLAY_NOTIFICATION_DRAWER
    test('changes isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map({})
        });
        const action = { type: DISPLAY_NOTIFICATION_DRAWER };
        const newState = Map({
            isNotificationDrawerVisible: true,
            isUserLoggedIn: false,
            user: Map({}),
        });
        expect(uiReducer(initialState, action)).toEqual(newState);
    });

    // Test action HIDE_NOTIFICATION_DRAWER
    test('changes isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map({})
        });
        const action = { type: HIDE_NOTIFICATION_DRAWER };
        const newState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map({}),
        });
        expect(uiReducer(initialState, action)).toEqual(newState);
    });

    // Test action LOGIN_SUCCESS
    test('changes isUserLoggedIn to true when LOGIN_SUCCESS is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map({})
        });
        const action = { type: LOGIN_SUCCESS };
        const newState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: Map({}),
        });
        expect(uiReducer(initialState, action)).toEqual(newState);
    });

    // Test action LOGIN_FAILURE
    test('changes isUserLoggedIn to false when LOGIN_FAILURE is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: Map({})
        });
        const action = { type: LOGIN_FAILURE };
        const newState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map({}),
        });
        expect(uiReducer(initialState, action)).toEqual(newState);
    });
});