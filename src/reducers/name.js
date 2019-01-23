const name = (state= "no name", action) => {
    switch (action.type) {
        // SINGLE TASK POSTjj
        case "FAKE_NAME":
            console.log('save fake data')
            return action.name
        default:
            return state
    }
}
export default name
