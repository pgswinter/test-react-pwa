import {
    put,
    call,
    takeLatest,
    all,
    fork,
} from "redux-saga/effects";

import {
    REQUEST_DATA,
} from '../actions/dataActionTypes';
import {
    reqDataSuccess,
    reqDataFail
} from '../actions/dataActions';

import api from '../services/api';
// *********************************************************
// REQUEST DATA
// *********************************************************

function setStateData(data) {
    this.setState({data})
}

function* reqData() {
    try {
        const { data } = yield call(() => api.TestImpl.get());
        yield put(reqDataSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(reqDataFail(error))
    }
}
function* watchReqData() {
    yield takeLatest(REQUEST_DATA, reqData);
}

export default function* () {
    yield all([
        fork(watchReqData)
    ])
}
