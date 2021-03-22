import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Albums } from '../../../common/types';
import allActions from '../../../store/rootActions';
import { CountContext } from '../../../common/CountContext';
import { Table } from 'react-bootstrap';

const AlbumsPage = () => {
	const [albums, setAlbums] = useState<Albums[]>([]);
	const { allIds, byId } = useSelector((state) => state.entities.albums);
	const dispatch = useDispatch();

	/** Count Conttxt to hold count data`*/
	const [countData, setCountData] = useContext(CountContext);

	useEffect(() => {
		if (!allIds.length) {
			dispatch(allActions.albumsActions.request());
		} else {
			const albumsMap = allIds.map((album: number) => byId[album]);
			setAlbums(albumsMap);
			setCountData({ ...countData, albumsCount: allIds.length });
		}
	}, [allIds]);

	return (
		<div className="spacing">
			{albums.length ? (
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>UserId</th>
							<th>Title</th>
						</tr>
					</thead>
					<tbody>
						{albums.map((album, index) => (
							<tr key={index}>
								<td>{album.id}</td>
								<td>{album.userId}</td>
								<td>{album.title}</td>
							</tr>
						))}
					</tbody>
				</Table>
			) : (
				<span>Loading ....</span>
			)}
		</div>
	);
};

export default AlbumsPage;
