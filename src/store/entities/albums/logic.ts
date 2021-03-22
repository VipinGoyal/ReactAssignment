import { createLogic } from 'redux-logic';
import axios from 'axios';
import {
	ALBUMS_REQUEST,
	ALBUMS_REQUEST_FAILURE,
	ALBUMS_REQUEST_SUCCESS
} from './actions';
import { ApiLink } from '../../../common/utils';

const getAlbumsLogic = createLogic({
	type: ALBUMS_REQUEST,
	latest: true,
	process({ action }, dispatch, done) {
		axios
			.get(`${ApiLink}/albums`)
			.then((resp: any) => resp.data)
			.then((data) => dispatch({ type: ALBUMS_REQUEST_SUCCESS, data }))
			.catch((err) => {
				console.error(err); // log since could be render err
				dispatch({ type: ALBUMS_REQUEST_FAILURE, error: err });
			})
			.then(() => done()); // call done when finished dispatching
	}
});

export default [getAlbumsLogic];
