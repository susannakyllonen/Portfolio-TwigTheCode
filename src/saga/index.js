import { call, put, take, takeLatest, takeEvery, select } from 'redux-saga/effects';

function* fake(action){
    console.log("HERE data is fetched from DB", {action})
    yield put({type: "FAKE_DATA", name: 'Aki Salmi'})
}

export function* rootSaga() {
    yield takeEvery("GET_FAKE_DATA", fake);
}
