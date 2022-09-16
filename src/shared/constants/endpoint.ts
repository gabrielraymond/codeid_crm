const FETCH_DATA = (params: string) => `/pokemon${params}`;
const FETCH_DETAIL = (id: string) => `/pokemon/${id}`;
const LOGIN = 'api/login';
const FETCH_USERS = () => `https://jsonplaceholder.typicode.com/users`;

type API_PROPS = {
	[key: string]: string;
};

const API_URL: API_PROPS = {
	LOCAL: 'http://localhost:3002/',
	DEV: 'http://localhost:3002/',
	PROD: 'https://codeid-crm.vercel.app/',
};

export { FETCH_DATA, LOGIN, FETCH_DETAIL, API_URL, FETCH_USERS };
