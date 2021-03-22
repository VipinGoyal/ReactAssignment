import { createLogic } from 'redux-logic';
import axios from 'axios';
import {
	USERS_REQUEST,
	USERS_REQUEST_FAILURE,
	USERS_REQUEST_SUCCESS
} from './actions';
import { ApiLink } from '../../../common/utils';

const getUsersLogic = createLogic({
	type: USERS_REQUEST,
	latest: true,
	process({ action }, dispatch, done) {
		axios
			.get(`${ApiLink}/users`)
			.then((resp: any) => resp.data)
			.then((data) => dispatch({ type: USERS_REQUEST_SUCCESS, data }))
			.catch((err) => {
				console.error(err); // log since could be render err
				dispatch({ type: USERS_REQUEST_FAILURE, error: err });
			})
			.then(() => done()); // call done when finished dispatching
	}
});

export default [getUsersLogic];
