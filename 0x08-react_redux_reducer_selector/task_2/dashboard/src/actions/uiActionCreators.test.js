import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest action creator', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('dispatches LOGIN and LOGIN_SUCCESS when API call succeeds', () => {
        fetchMock.getOnce('/login-success.json', {
            status: 200,
            body: {}
        });

        const expectedActions = [
            { type: 'LOGIN' },
            { type: LOGIN_SUCCESS }
        ];

        const store = mockStore({});

        return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('dispatches LOGIN and LOGIN_FAILURE when API call fails', () => {
        fetchMock.getOnce('/login-success.json', {
            status: 404
        });

        const expectedActions = [
            { type: 'LOGIN' },
            { type: LOGIN_FAILURE }
        ];

        const store = mockStore({});

        return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

test('login action creator', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const expectedAction = {
        type: LOGIN,
        user: { email, password }
    };
    expect(login(email, password)).toEqual(expectedAction);
});

test('logout action creator', () => {
    const expectedAction = {
        type: LOGOUT
    };
    expect(logout()).toEqual(expectedAction);
});

test('displayNotificationDrawer action creator', () => {
    const expectedAction = {
        type: DISPLAY_NOTIFICATION_DRAWER
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
});

test('hideNotificationDrawer action creator', () => {
    const expectedAction = {
        type: HIDE_NOTIFICATION_DRAWER
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
});