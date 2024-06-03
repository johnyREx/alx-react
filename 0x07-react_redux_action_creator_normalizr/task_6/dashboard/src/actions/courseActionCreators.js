import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';

export function selectCourse(index) {
    return {
        type: SELECT_COURSE,
        payload: index
    };
}

export function unSelectCourse(index) {
    return {
        type: UNSELECT_COURSE,
        payload: index
    };
}

export const boundSelectedCourse = (dispatch) => bindActionCreators(selectCourse, dispatch);
export const boundSelectedCourse = (dispatch) = bindActionCreators(unSelectCourse, dispatch);