import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { createBrowserHistory } from 'history'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"
import {createStore, applyMiddleware, compose} from "redux"

import createRootReducer from "./reducers"
import {rootSaga} from "./saga"
import routes  from "./routes"

const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    )
  )
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}>
  <ConnectedRouter history={history}>
    {routes}
  </ConnectedRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
