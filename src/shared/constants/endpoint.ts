const FETCH_DATA = (params: string) => `/pokemon${params}`;
const FETCH_DETAIL = (id: string) => `/pokemon/${id}`;
const LOGIN = 'http://localhost:3002/api/login';
const FETCH_USERS = () => `https://jsonplaceholder.typicode.com/users`;

type API_PROPS = {
	[key: string]: string;
};

const API_URL: API_PROPS = {
	LOCAL: 'https://pokeapi.co/api/v2',
	DEV: 'https://pokeapi.co/api/v2',
	PROD: 'https://pokeapi.co/api/v2',
};

export { FETCH_DATA, LOGIN, FETCH_DETAIL, API_URL, FETCH_USERS };
