import { createLogic } from 'redux-logic';
import axios from 'axios';
import {
	POSTS_REQUEST,
	POSTS_REQUEST_FAILURE,
	POSTS_REQUEST_SUCCESS,
	ADD_POST_REQUEST,
	ADD_POST_SUCCESS,
	ADD_POST_FAILURE
} from './actions';
import { ApiLink } from '../../../common/utils';

const getPostsLogic = createLogic({
	type: POSTS_REQUEST,
	latest: true,
	process({ action }, dispatch, done) {
		axios
			.get(`${ApiLink}/posts`)
			.then((resp: any) => resp.data)
			.then((data) => dispatch({ type: POSTS_REQUEST_SUCCESS, data }))
			.catch((err) => {
				console.error(err); // log since could be render err
				dispatch({ type: POSTS_REQUEST_FAILURE, error: err });
			})
			.then(() => done()); // call done when finished dispatching
	}
});

const addPostLogic = createLogic({
	type: ADD_POST_REQUEST,
	latest: true,
	process({ action }, dispatch, done) {
		const options = {
			headers: {
				'Content-Type': 'application/json; charset=UTF-8'
			}
		};
		const { data } = action;
		axios
			.post(`${ApiLink}/posts`, data, options)
			.then((resp: any) => resp.data)
			.then((data) => dispatch({ type: ADD_POST_SUCCESS, data }))
			.catch((err) => {
				console.error(err); // log since could be render err
				dispatch({ type: ADD_POST_FAILURE, error: err });
			})
			.then(() => done()); // call done when finished dispatching
	}
});

export default [getPostsLogic, addPostLogic];
