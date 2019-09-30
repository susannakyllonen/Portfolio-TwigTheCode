import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import name from './name'
import introduction from './introduction'
import projects from './projects'
import contact from './contact'
import footer from './footer'

// import card from './card';
const twiggers = (state=[],action) => {
    switch(action.type){
        case "FAKE_TWIGGERS":
            return action.twiggers
        default:
            return state
    }
}

export default history => combineReducers({
    router: connectRouter(history),
    name,
    introduction,
    projects,
    contact,
    footer,
    twiggers,
})
