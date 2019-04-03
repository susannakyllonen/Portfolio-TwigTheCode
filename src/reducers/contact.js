const contact = (state = {}, action) => {
    switch (action.type) {
        // SINGLE TASK POSTjj
        case "FAKE_CONTACT":
            console.log('save fake data')
            return action.contact
        default:
            return state
    }
}
export default contact
