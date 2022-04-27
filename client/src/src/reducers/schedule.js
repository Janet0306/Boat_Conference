import { 
    GET_SCHEDULE,
    ERROR_SCHEDULE,
} from '../actions/types'

const initialState = {
    schedule: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_SCHEDULE:
            return {
                ...state,
                schedule: payload,
                loading: false
            }
        case ERROR_SCHEDULE:
            return {
                ...state,
                error: payload,
                loading: false
            };  
        default: 
            return state;
    }
}