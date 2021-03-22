export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_REQUEST_SUCCESS = 'USERS_REQUEST_SUCCESS';
export const USERS_REQUEST_FAILURE = 'USERS_REQUEST_FAILURE';

export const usersActions = {
	request: () => ({
		type: USERS_REQUEST
	}),
	success: (result) => ({
		type: USERS_REQUEST_SUCCESS,
		result
	}),
	failure: (error) => ({
		type: USERS_REQUEST_FAILURE,
		error
	})
};
