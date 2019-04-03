const footer = (state = {}, action) => {
    switch (action.type) {
        // SINGLE TASK POSTjj
        case "FAKE_FOOTER":
            console.log('save fake data')
            return action.footer
        default:
            return state
    }
}
export default footer
