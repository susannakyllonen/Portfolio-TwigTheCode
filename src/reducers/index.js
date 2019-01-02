import { combineReducers} from 'redux'
import { connectRouter } from 'connected-react-router'

// import card from './card';

export default history => combineReducers({
  router: connectRouter(history)
})