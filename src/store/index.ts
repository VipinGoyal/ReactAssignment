import { applyMiddleware, compose, createStore } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { routerMiddleware } from 'connected-react-router';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
import logic from './rootLogic';

// eslint-disable-next-line global-require
const createHistory = require('history').createBrowserHistory;

export const history: any = createHistory();

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION__: any;
	}
}

const enhancers: any[] = [];
const deps = {
	// injected dependencies for logic
	httpClient: axios
};

// To enable redux dev tools
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
	? window.__REDUX_DEVTOOLS_EXTENSION__
	: null;
const logger = createLogger({
	collapsed: true
});
if (typeof devToolsExtension === 'function') {
	enhancers.push(devToolsExtension());
} else {
	enhancers.push(applyMiddleware(logger));
}

// used to create store for SSR and browser runtime
export const _createStore = () => {
	const logicMiddleware = createLogicMiddleware(logic, deps);

	const middleware = [logicMiddleware, routerMiddleware(history)];

	const composedEnhancers = compose(
		applyMiddleware(...middleware),
		...enhancers
	);

	return createStore(rootReducer(history), composedEnhancers);
};

// create an instance of the store for browser runtime
const store = _createStore();

// Allow the passed state to be garbage-collected

export default store;
