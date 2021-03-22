import './styles.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { CountProvider } from './common/CountContext';
import { Header } from './modules/Header';
import PostsPage from './modules/Containers/PostsPage';
import AlbumsPage from './modules/Containers/AlbumsPage';
import UsersPage from './modules/Containers/UsersPage';
import TodosPage from './modules/Containers/ToDosPage';

import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => (
	<CountProvider>
		<Router>
			<Header />
			<Container>
				<Switch>
					<Route path="/posts" component={PostsPage} />
					<Route path="/albums" component={AlbumsPage} />
					<Route path="/users" component={UsersPage} />
					<Route path="/todos" component={TodosPage} />
				</Switch>
			</Container>
		</Router>
	</CountProvider>
);
