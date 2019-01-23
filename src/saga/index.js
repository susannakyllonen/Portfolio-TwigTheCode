import { call, put, take, takeLatest, takeEvery, select } from 'redux-saga/effects';

function* fake(action){
    console.log("HERE data is fetched from DB", {action})
    const introduction = {text: "Minä olen norsunkesyttäjä", image: "kesyttaja.jpg"}
    yield put({type: "FAKE_NAME", name: 'Kirsi Kuikka'})
    yield put({type: "FAKE_INTRO", introduction})
}

export function* rootSaga() {
    yield takeEvery("GET_FAKE_DATA", fake);
}
