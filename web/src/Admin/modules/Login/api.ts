import {POST} from '../../../utils/api';
import {ENDPOINTS} from './const';

export const login = data => POST(ENDPOINTS.LOGIN, data);
