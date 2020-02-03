/* eslint-disable no-case-declarations */
import {
    REQUEST_DATA,
    REQUEST_DATA_SUCCESS,
    REQUEST_DATA_FAIL
} from '../actions/dataActionTypes';

const initialState = {
    loading: false,
    error: '',
    data: [],
    isLoaded: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                ...state,
                loading: true,
                isLoaded: false
            }
        case REQUEST_DATA_SUCCESS:
            const {data} = action.payload; 
            return {
                ...state,
                loading: false,
                data,
                isLoaded: true
            }
        case REQUEST_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action,
                isLoaded: true
            }
        default:
            return state;
    }
}