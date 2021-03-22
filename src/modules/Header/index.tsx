import { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CountContext } from '../../common/CountContext';

export const Header = () => {
	const [countData] = useContext(CountContext);
	const { albumsCount = '', postsCount = '' } = countData || {};

	// Same can be achieved as well with redux useSelector Hook
	// const { albums, posts, users } = useSelector(
	// 	(state) => state.entities
	// );
	// const albumsCount = albums.allIds.length || '';
	// const postsCount = posts.allIds.length || '';

	return (
		<>
			<Navbar bg="dark" variant="dark" expand="lg" className="bg-body">
				<Container>
					<Navbar.Brand href="#home" className="text-monospace">
						React Task
					</Navbar.Brand>
				</Container>
			</Navbar>
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
				<Navbar.Brand as={NavLink} to="">
					HUBILO
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link as={NavLink} to="posts">
							POSTS {postsCount}
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to="albums"
							className={!postsCount ? 'disabled-link' : ''}
						>
							ALBUMS {albumsCount}
						</Nav.Link>
						<NavDropdown
							title="Dropdown"
							id="collasible-nav-dropdown"
							className={!albumsCount ? 'disabled-link' : ''}
						>
							<NavDropdown.Item as={NavLink} to="users">
								Users
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={NavLink} to="todos">
								ToDos
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};
