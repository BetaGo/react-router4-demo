import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

export const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const allReducers = combineReducers({
	...reducers,
	router: routerReducer,
});

// Redux Dev Tool:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const store = createStore(allReducers, composeEnhancers(
	applyMiddleware(
		middleware,
		thunk,
	),
));

export default store;
