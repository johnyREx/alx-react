// notifications.js

import notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notofications', {
    author: user,
    context: message,
});

// Normalize data
const normalizedData = normalize(notificationsData, [notification]);

export default normalizedData;