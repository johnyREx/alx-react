import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

test('selectCourse action creator', () => {
    const index = 1;
    const expectedAction = {
        type: SELECT_COURSE,
        payload: index
    };
    expect(selectCourse(index)).toEqual(expectedAction);
});

test('unSelectCourse action creator', () => {
    const index = 1;
    const expectedAction = {
        type: UNSELECT_COURSE,
        payload: index
    };
    expect(unSelectCourse(index)).toEqual(expectedAction);
});