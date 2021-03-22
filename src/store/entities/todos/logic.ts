import { createLogic } from 'redux-logic';
import axios from 'axios';
import {
	TODOS_REQUEST,
	TODOS_REQUEST_FAILURE,
	TODOS_REQUEST_SUCCESS
} from './actions';
import { ApiLink } from '../../../common/utils';

const getTodosLogic = createLogic({
	type: TODOS_REQUEST,
	latest: true,
	process({ action }, dispatch, done) {
		axios
			.get(`${ApiLink}/todos`)
			.then((resp: any) => resp.data)
			.then((data) => dispatch({ type: TODOS_REQUEST_SUCCESS, data }))
			.catch((err) => {
				console.error(err); // log since could be render err
				dispatch({ type: TODOS_REQUEST_FAILURE, error: err });
			})
			.then(() => done()); // call done when finished dispatching
	}
});

export default [getTodosLogic];
