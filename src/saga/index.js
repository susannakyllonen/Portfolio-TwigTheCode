import { call, put, take, takeLatest, takeEvery, select } from 'redux-saga/effects';

const projects = [
    {
        title: "näyte1",
        description: "Projektin täydellinen kuvaus, tänne tulee hirveeeeesti kamaa",
    },
    {
        title: "näyte2",
    },
    {
        title: "näyte3",
    },
]

function* fake(action){
    console.log("HERE data is fetched from DB", {action})
    const introduction = {text: "Minä olen norsunkesyttäjä", image: "kesyttaja.jpg"}
    yield put({type: "FAKE_NAME", name: 'Kirsi Kuikka'})
    yield put({type: "FAKE_INTRO", introduction})
    yield put({type: "FAKE_PROJECTS", projects})
}

export function* rootSaga() {
    yield takeEvery("GET_FAKE_DATA", fake);
}
