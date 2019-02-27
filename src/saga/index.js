import { call, put, take, takeLatest, takeEvery, select } from 'redux-saga/effects';

const projects = [
    {
        title: "näyte1",
        description: "Bear claw powder dragée tootsie roll sweet. Fruitcake topping jelly beans topping jelly. Topping candy canes macaroon. Marzipan powder marshmallow jelly gingerbread soufflé candy canes. Jelly-o brownie ice cream cheesecake. Jelly beans caramels croissant biscuit biscuit candy gummies. Lollipop muffin candy canes. Oat cake donut sugar plum caramels cotton candy cookie wafer donut. Lollipop jelly beans biscuit biscuit candy. Brownie sugar plum chocolate bar pastry powder. Powder jujubes biscuit lollipop tootsie roll candy canes. Biscuit macaroon ice cream. Dragée dessert gummi bears. Soufflé topping cake tiramisu cupcake sweet chupa chups."
    },
    {
        title: "näyte2",
        description: "Gummies wafer chocolate dragée candy donut. Cupcake candy tart gingerbread topping sweet roll cookie chupa chups. Biscuit donut lemon drops pudding sesame snaps. Gingerbread pudding cake croissant cheesecake. Lollipop cheesecake donut wafer. Sesame snaps candy canes candy canes pastry powder cheesecake cookie soufflé candy canes. Lemon drops chocolate bar soufflé. Tootsie roll candy biscuit muffin chupa chups. Dessert lollipop cheesecake gummies. Jelly-o sweet roll donut jelly beans topping topping sesame snaps cake pie. Sweet roll sweet tart. Dragée tart cotton candy."
    },
    {
        title: "näyte3",
        description: "Topping apple pie cake carrot cake chocolate cake. Tootsie roll gingerbread gummi bears brownie bear claw jelly beans icing. Wafer marzipan gingerbread toffee icing dessert chocolate cake gummies. Ice cream halvah tootsie roll jelly tart chocolate cake candy canes. Dragée chocolate cake pastry chupa chups chocolate. Candy canes apple pie tiramisu fruitcake wafer. Muffin sweet muffin muffin. Chupa chups bonbon chupa chups cupcake. Topping topping sesame snaps. Cheesecake sweet roll tart biscuit chocolate cake jelly beans soufflé. Chocolate lemon drops marshmallow lollipop halvah sugar plum pudding. Dragée chocolate bar jelly gummi bears sweet candy chupa chups marzipan. Sugar plum marshmallow liquorice chocolate oat cake chocolate bar croissant gingerbread marzipan."
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
