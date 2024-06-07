import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { Map, setIn } from "immutable";
import { coursesNormalizer } from "../schema/courses";

const initialState = Map({
    course: Map()
});

export default function courseReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const normalizedData = courseReducer(action.data)
            return state.mergeIn(['courses'], normalizedData.entities.courses)

        case SELECT_COURSE:
            return state.setIn(['courses', action.index, 'isSlected'], true)

        case UNSELECT_COURSE:
            return state.setIn(['courses', action.index, 'isSlected'], false)
        default:
            return state;
    }
}