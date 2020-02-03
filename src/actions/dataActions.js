import {
  REQUEST_DATA,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_FAIL
} from "./dataActionTypes";

// *********************************************************
// REQUEST DATA
// *********************************************************
export const reqData = () => {
    return {
        type: REQUEST_DATA
    }
}
export const reqDataSuccess = (data) => {
    return {
        type: REQUEST_DATA_SUCCESS,
        payload: data
    }
}
export const reqDataFail = (error) => ({
    type: REQUEST_DATA_FAIL,
    payload: error
})
