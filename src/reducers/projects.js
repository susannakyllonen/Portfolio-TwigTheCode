const projects = (state = [], action) => {
    switch (action.type) {
        case "FAKE_PROJECTS":
            return action.projects
        default:
            return state
    }
}
export default projects
