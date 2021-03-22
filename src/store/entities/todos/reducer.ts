import { TODOS_REQUEST_SUCCESS, TODOS_REQUEST_FAILURE } from './actions';
import { getNormalizedData } from '../../../common/utils';

const initialTodosState = {
	byId: {},
	allIds: []
};

const todos = (state = initialTodosState, action: any) => {
	switch (action.type) {
		case TODOS_REQUEST_SUCCESS:
			return {
				...state,
				...getNormalizedData(action.data)
			};
		case TODOS_REQUEST_FAILURE:
			return {
				...state,
				error: action.error
			};
		default:
			return state;
	}
};

export default todos;
