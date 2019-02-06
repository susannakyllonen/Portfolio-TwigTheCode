import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import name from './name'
import introduction from './introduction'
import projects from './projects'

// import card from './card';

export default history => combineReducers({
    router: connectRouter(history),
    name,
    introduction,
    projects,
})
