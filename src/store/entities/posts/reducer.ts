import {
	POSTS_REQUEST_SUCCESS,
	POSTS_REQUEST_FAILURE,
	ADD_POST_SUCCESS,
	ADD_POST_FAILURE
} from './actions';
import { getNormalizedData } from '../../../common/utils';

const initialPostsState = {
	byId: {},
	allIds: []
};

const addPostToState = (currentState: any, action: any) => {
	const state = { ...currentState };
	const { data } = action;
	const { byId, allIds } = state;
	// As AddPost ApI return always 101, not unique number, so to avoid duplicate post issue
	const fakeId = allIds.length + 1;
	return {
		...state,
		byId: { ...byId, ...{ [fakeId]: { ...data, id: fakeId } } },
		allIds: [...allIds, fakeId]
	};
};

const posts = (state = initialPostsState, action: any) => {
	switch (action.type) {
		case POSTS_REQUEST_SUCCESS:
			return {
				...state,
				...getNormalizedData(action.data)
			};
		case POSTS_REQUEST_FAILURE:
			return {
				...state,
				error: action.error
			};
		case ADD_POST_SUCCESS:
			return addPostToState(state, action);
		case ADD_POST_FAILURE:
			return {
				...state,
				error: action.error
			};
		default:
			return state;
	}
};

export default posts;
