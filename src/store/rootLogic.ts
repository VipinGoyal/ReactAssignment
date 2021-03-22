import albumsLogics from './entities/albums/logic';
import postsLogics from './entities/posts/logic';
import todosLogics from './entities/todos/logic';
import usersLogics from './entities/users/logic';

export default [
	...albumsLogics,
	...postsLogics,
	...todosLogics,
	...usersLogics
];
