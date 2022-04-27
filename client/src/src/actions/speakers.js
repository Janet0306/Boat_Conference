import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_SPEAKERS,
    SPEAKER_ERROR
} from './types';

//GET all speakers

export const getSpeakers = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: GET_SPEAKERS,
            payload: res.data
        });
        
    } catch (err) {
        dispatch({
            type: SPEAKER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};