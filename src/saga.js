import {
    all,
    fork
} from 'redux-saga/effects';

import data from './sagas/data';

export default function* () {
    yield all([
        fork(data)
    ])
}