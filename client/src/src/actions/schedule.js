import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_SCHEDULE,
    ERROR_SCHEDULE
} from './types';

//GET Schedules

export const getSchedules = () => async dispatch => {
    try {
        const res = await axios.get('/api/event');

        dispatch({
            type: GET_SCHEDULE,
            payload: res.data
        });
        
    } catch (err) {
        dispatch({
            type: ERROR_SCHEDULE,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};