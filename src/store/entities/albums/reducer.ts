import { ALBUMS_REQUEST_SUCCESS, ALBUMS_REQUEST_FAILURE } from './actions';
import { getNormalizedData } from '../../../common/utils';

const initialAlbumsState = {
	byId: {},
	allIds: []
};

const albums = (state = initialAlbumsState, action: any) => {
	switch (action.type) {
		case ALBUMS_REQUEST_SUCCESS:
			return {
				...state,
				...getNormalizedData(action.data)
			};
		case ALBUMS_REQUEST_FAILURE:
			return {
				...state,
				error: action.error
			};
		default:
			return state;
	}
};

export default albums;
