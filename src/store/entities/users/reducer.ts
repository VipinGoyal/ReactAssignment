import { USERS_REQUEST_SUCCESS, USERS_REQUEST_FAILURE } from './actions';
import { getNormalizedData } from '../../../common/utils';

const initialUsersState = {
	byId: {},
	allIds: []
};

const users = (state = initialUsersState, action: any) => {
	switch (action.type) {
		case USERS_REQUEST_SUCCESS:
			return {
				...state,
				...getNormalizedData(action.data)
			};
		case USERS_REQUEST_FAILURE:
			return {
				...state,
				error: action.error
			};
		default:
			return state;
	}
};

export default users;
