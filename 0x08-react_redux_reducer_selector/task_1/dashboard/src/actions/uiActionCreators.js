import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import { bindActionCreators } from 'redux';

export function login(email, password) {
    return {
        type: LOGIN,
        user: { email, password }
    };
}

export function logout() {
    return {
        type: LOGOUT
    };
}

export function displayNotificationDrawer() {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER
    };
}

export function hideNotificationDrawer() {
    return {
        type: HIDE_NOTIFICATION_DRAWER
    };
}

export function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    };
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE
    };
}

export const loginRequest = (email, password) => async (dispatch) => {
    dispatch({ type: 'LOGIN' }); // Dispatch login action

    try {
        const response = await fetch('/login-success.json');
        if (response.ok) {
            dispatch(loginSuccess());
        } else {
            dispatch(loginFailure());
        }
    } catch (error) {
        console.error('Error:', error);
        dispatch(loginFailure());
    }
}

export const boundLogin = (dispatch) => bindActionCreators(login, dispatch);
export const boundLogout = (dispatch) => bindActionCreators(logout, dispatch);
export const boundDisplayNotificationDrawer = (dispatch) => bindActionCreators(displayNotificationDrawer, dispatch);
export const boundHideNotificationDrawer = (dispatch) => bindActionCreators(hideNotificationDrawer, dispatch);