import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Users } from '../../../common/types';
import allActions from '../../../store/rootActions';
import { CountContext } from '../../../common/CountContext';
import { Table } from 'react-bootstrap';

const UsersPage = () => {
	const [users, setUsers] = useState<Users[]>([]);
	const [countData, setCountData] = useContext(CountContext);
	const { allIds, byId } = useSelector((state) => state.entities.users);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!allIds.length) {
			dispatch(allActions.usersActions.request());
		} else {
			const usersMap = allIds.map((user: number) => byId[user]);
			setUsers(usersMap);
			setCountData({ ...countData, usersCount: allIds.length });
		}
	}, [allIds]);

	return (
		<div className="spacing">
			<div>{countData?.postsCount || ''}</div>
			<div>{countData?.albumsCount || ''}</div>
			{users.length ? (
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>UserName</th>
							<th>Email</th>
							<th>Phone</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={index}>
								<td>{user.id}</td>
								<td>{user.name}</td>
								<td>{user.username}</td>
								<td>{user.email}</td>
								<td>{user.phone}</td>
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

export default UsersPage;
