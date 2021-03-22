import { albumsActions } from './entities/albums/actions';
import { postsActions } from './entities/posts/actions';
import { todosActions } from './entities/todos/actions';
import { usersActions } from './entities/users/actions';

const allActions = {
	albumsActions,
	postsActions,
	todosActions,
	usersActions
};

export default allActions;
