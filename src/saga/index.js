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
    {
        title: "näyte4",
        description: "Tiramisu sugar plum liquorice icing apple pie. Cheesecake chocolate gummies. Lemon drops gummies lollipop cake sesame snaps cupcake tootsie roll brownie soufflé. Sweet sweet halvah ice cream chocolate bar bonbon. Oat cake carrot cake powder sweet roll cake. Gummies jelly-o marzipan. Liquorice dragée marzipan. Wafer jujubes cake cupcake. Pie cake muffin. Cake donut cotton candy cookie. Icing brownie donut gummies tart macaroon donut danish. Toffee gummies jujubes tiramisu candy canes. Tootsie roll topping tiramisu chocolate cake soufflé."
    },
]

function* fake(action) {
    console.log("HERE data is fetched from DB", { action })
    const introduction = { title: "About Me", text: "Hello, my name is Mason Fox and I am a Front end web developer. I have been working in web for 2 years and have a focus in Front End Development: HTML, CSS, and Javascript. I currently work at Service Spring Corp as a Front End Developer and am the founder and lead developer of Squarecard.io." }
    const contact = { title: 'My castle', email: 'kirsi.kuikka@feikki.kirsi', text: 'Send me mail, but nothing kinky.' }
    const footer = { facebook: "https://www.facebook.com", instagram: "https://www.instagram.com", linkedin: "https://www.linkedin.com", twitter: "https://www.twitter.com" }
    yield put({ type: "FAKE_NAME", name: 'Kirsi Kuikka' })
    yield put({ type: "FAKE_INTRO", introduction })
    yield put({ type: "FAKE_PROJECTS", projects })
    yield put({ type: "FAKE_CONTACT", contact })
    yield put({ type: "FAKE_FOOTER", footer })
}

export function* rootSaga() {
    yield takeEvery("GET_FAKE_DATA", fake);
}
