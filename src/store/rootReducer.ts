import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import posts from './entities/posts/reducer';
import albums from './entities/albums/reducer';
import users from './entities/users/reducer';
import todos from './entities/todos/reducer';

const reducers = (history: History<any>) =>
	combineReducers({
		router: connectRouter(history),
		entities: combineReducers({
			posts,
			albums,
			users,
			todos
		})
	});

export default reducers;
