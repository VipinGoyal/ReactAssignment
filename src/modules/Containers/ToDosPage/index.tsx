import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todos } from '../../../common/types';
import allActions from '../../../store/rootActions';
import { CountContext } from '../../../common/CountContext';
import { Table } from 'react-bootstrap';

const TodosPage = () => {
	const [todos, setTodos] = useState<Todos[]>([]);
	const [countData] = useContext(CountContext);
	const { allIds, byId } = useSelector((state) => state.entities.todos);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!allIds.length) {
			dispatch(allActions.todosActions.request());
		} else {
			const todosMap = allIds.map((todo: number) => byId[todo]);
			setTodos(todosMap);
		}
	}, [allIds]);

	return (
		<div className="spacing">
			<div>{countData?.usersCount || ''}</div>
			{todos.length ? (
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>UserId</th>
							<th>Title</th>
							<th>Completed</th>
						</tr>
					</thead>
					<tbody>
						{todos.map((todo, index) => (
							<tr key={index}>
								<td>{todo.id}</td>
								<td>{todo.userId}</td>
								<td>{todo.title}</td>
								<td>{JSON.stringify(todo.completed)}</td>
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

export default TodosPage;
