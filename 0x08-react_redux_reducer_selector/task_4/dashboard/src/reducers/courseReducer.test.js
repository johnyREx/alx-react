import courseReducer from './courseReducer';
import * as types from '../actions/courseActionTypes';

describe('courseReducer', () => {
    it('should return the initial state', () => {
        expect(courseReducer(undefined, {})).toEqual([]);
    });

    it('should handle FETCH_COURSE_SUCCESS', () => {
        const coursesData = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 }
        ];
        const action = {
            type: types.FETCH_COURSE_SUCCESS,
            data: coursesData
        };
        expect(courseReducer([], action)).toEqual([
            { id: 1, name: 'ES6', credit: 60, isSelected: false },
            { id: 2, name: 'Webpack', credit: 20, isSelected: false },
            { id: 3, name: 'React', credit: 40, isSelected: false }
        ]);
    });

    it('should handle SELECT_COURSE', () => {
        const initialState = [
            { id: 1, name: 'ES6', credit: 60, isSelected: false },
            { id: 2, name: 'Webpack', credit: 20, isSelected: false },
            { id: 3, name: 'React', credit: 40, isSelected: false }
        ];
        const action = {
            type: types.SELECT_COURSE,
            index: 2
        };
        expect(courseReducer(initialState, action)).toEqual([
            { id: 1, name: 'ES6', credit: 60, isSelected: false },
            { id: 2, name: 'Webpack', credit: 20, isSelected: true },
            { id: 3, name: 'React', credit: 40, isSelected: false }
        ]);
    });

    it('should handle UNSELECT_COURSE', () => {
        const initialState = [
            { id: 1, name: 'ES6', credit: 60, isSelected: false },
            { id: 2, name: 'Webpack', credit: 20, isSelected: true },
            { id: 3, name: 'React', credit: 40, isSelected: false }
        ];
        const action = {
            type: types.UNSELECT_COURSE,
            index: 2
        };
        expect(courseReducer(initialState, action)).toEqual([
            { id: 1, name: 'ES6', credit: 60, isSelected: false },
            { id: 2, name: 'Webpack', credit: 20, isSelected: false },
            { id: 3, name: 'React', credit: 40, isSelected: false }
        ]);
    });
});