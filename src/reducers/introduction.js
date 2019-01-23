const introduction = (state = {}, action) => {
    switch (action.type) {
        // SINGLE TASK POSTjj
        case "FAKE_INTRO":
            console.log('save fake data')
            return action.introduction
        default:
            return state
    }
}
export default introduction
