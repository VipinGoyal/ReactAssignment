export type Nullable<T> = T | null;

export interface Albums {
	userId: number;
	id: number;
	title: string;
}

export interface Posts {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface Todos {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

interface Location {
	lat: string;
	lng: string;
}

interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Location;
}

export interface Users {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}

export interface AlbumsState {
	byId: { [key: number]: Albums };
	allIds: number[];
}

export interface PostsState {
	byId: { [key: number]: Posts };
	allIds: number[];
}

export interface TodosState {
	byId: { [key: number]: Todos };
	allIds: number[];
}

export interface UsersState {
	byId: { [key: number]: Users };
	allIds: number[];
}

export interface ApplicationState {
	router: {
		action: string;
		location: {
			pathname: string;
			search: string;
			hash: string;
		};
	};
	entities: {
		albums: AlbumsState;
		posts: PostsState;
		todos: TodosState;
		users: UsersState;
	};
}
