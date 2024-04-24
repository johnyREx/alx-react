// import { fromJS } from 'immutable';
import { fromJS } from '.node_modules/immutable/dist/immutable';

const getImmutableObject = (Object) => fromJS(Object);

export default getImmutableObject;
