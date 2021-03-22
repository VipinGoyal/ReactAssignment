import { Albums } from '../../../common/types';

export const ALBUMS_REQUEST = 'ALBUMS_REQUEST';
export const ALBUMS_REQUEST_SUCCESS = 'ALBUMS_REQUEST_SUCCESS';
export const ALBUMS_REQUEST_FAILURE = 'ALBUMS_REQUEST_FAILURE';

export const albumsActions = {
	request: () => ({
		type: ALBUMS_REQUEST
	}),
	success: (result: [Albums]) => ({
		type: ALBUMS_REQUEST_SUCCESS,
		result
	}),
	failure: (error: string) => ({
		type: ALBUMS_REQUEST_FAILURE,
		error
	})
};
