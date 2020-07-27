import {ADD_FEEDBACK_URL} from './const';
import {POST} from '../../../utils/api';

export const addFeedback = (data) => {
    return POST(ADD_FEEDBACK_URL, data);
};
