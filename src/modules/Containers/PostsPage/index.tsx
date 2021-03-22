import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Posts } from '../../../common/types';
import allActions from '../../../store/rootActions';
import { CountContext } from '../../../common/CountContext';
import { Form, Button, Table, Col } from 'react-bootstrap';

const PostsPage = () => {
	const [validated, setValidated] = useState(false);
	const formRef = useRef(null);
	const [posts, setPosts] = useState<Posts[]>([]);
	const [countData, setCountData] = useContext(CountContext);
	const { allIds, byId } = useSelector((state) => state.entities.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!allIds.length) {
			dispatch(allActions.postsActions.request());
		} else {
			const postsMap = allIds.map((post: number) => byId[post]);
			setPosts(postsMap);
			setCountData({ ...countData, postsCount: allIds.length });
		}
	}, [allIds]);

	const handleFormReset = () => {
		formRef!.current!.reset();
		setValidated(false);
	};

	const addPost = (e) => {
		e.preventDefault();
		const formElem = e.target.elements;
		const userId = formElem.formUserId.value;
		const title = formElem.formTitle.value;
		const body = formElem.formBody.value;
		dispatch(allActions.postsActions.addPostRequest({ title, userId, body }));
		setValidated(true);
		handleFormReset();
	};

	return (
		<div className="spacing">
			{posts.length ? (
				<>
					<Form ref={formRef} validated={validated} onSubmit={addPost}>
						<Form.Row>
							<Form.Group as={Col} controlId="formUserId">
								<Form.Label>UserId</Form.Label>
								<Form.Control
									required
									type="number"
									placeholder="Enter UserId"
									min="1"
									max="10"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formTitle">
								<Form.Label>Title</Form.Label>
								<Form.Control required type="text" placeholder="Enter Title" />
							</Form.Group>
						</Form.Row>

						<Form.Group controlId="formBody">
							<Form.Label>Body</Form.Label>
							<Form.Control
								required
								as="textarea"
								rows={3}
								placeholder="Sample Text"
							/>
						</Form.Group>

						<Button variant="primary" type="submit">
							Add Post
						</Button>
					</Form>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>#</th>
								<th>UserId</th>
								<th>Title</th>
								<th>Body</th>
							</tr>
						</thead>
						<tbody>
							{posts.map((post, index) => (
								<tr key={index}>
									<td>{post.id}</td>
									<td>{post.userId}</td>
									<td>{post.title}</td>
									<td>{post.body}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</>
			) : (
				<span>Loading ....</span>
			)}
		</div>
	);
};

export default PostsPage;
