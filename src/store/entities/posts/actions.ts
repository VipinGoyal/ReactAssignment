import { Posts } from '../../../common/types';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_FAILURE = 'POSTS_REQUEST_FAILURE';
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const postsActions = {
	request: () => ({
		type: POSTS_REQUEST
	}),
	success: (result: [Posts]) => ({
		type: POSTS_REQUEST_SUCCESS,
		result
	}),
	failure: (error: string) => ({
		type: POSTS_REQUEST_FAILURE,
		error
	}),
	addPostRequest: (data) => ({
		type: ADD_POST_REQUEST,
		data
	}),
	addPostSuccess: (result: Posts) => ({
		type: ADD_POST_SUCCESS,
		result
	}),
	addPostFailure: (error: string) => ({
		type: ADD_POST_FAILURE,
		error
	})
};
