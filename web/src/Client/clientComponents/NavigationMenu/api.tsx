import {POST} from '../../../utils/api';
import {ADD_FEEDBACK_URL} from './const';

export const addFeedback = (data) => {
    return POST(ADD_FEEDBACK_URL, data);
};
