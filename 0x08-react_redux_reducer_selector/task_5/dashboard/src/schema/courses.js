import { normalize, schema } from 'normalizr'

const courseSchema = new schema.Entity('courses');

export const courseNormalizer = (data) => {
    const normalizedData = normalize(data, [coursesSchema]);
    return normalizedData;
}