import { Todos } from '../../../common/types';

export const TODOS_REQUEST = 'TODOS_REQUEST';
export const TODOS_REQUEST_SUCCESS = 'TODOS_REQUEST_SUCCESS';
export const TODOS_REQUEST_FAILURE = 'TODOS_REQUEST_FAILURE';

export const todosActions = {
	request: () => ({
		type: TODOS_REQUEST
	}),
	success: (result: [Todos]) => ({
		type: TODOS_REQUEST_SUCCESS,
		result
	}),
	failure: (error: string) => ({
		type: TODOS_REQUEST_FAILURE,
		error
	})
};
