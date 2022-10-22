const FETCH_DATA = (params: string) => `/pokemon${params}`;
const FETCH_DETAIL = (id: string) => `/pokemon/${id}`;
const LOGIN = 'auth/login';
const FETCH_COA = (params: string) => `/coa${params}`;
const FETCH_COA_DETAIL = (id: string) => `/coa/${id}`;
const FETCH_COA_GROUP = (params: string) => `/coa-group${params}`;
const COA_EDIT = (id: string) => `/coa/${id}`;
const FETCH_USERS = () => `https://jsonplaceholder.typicode.com/users`;

type API_PROPS = {
	[key: string]: string;
};

const API_URL: API_PROPS = {
	LOCAL: 'https://konsolidasi.codeoffice.net',
	DEV: 'https://konsolidasi.codeoffice.net',
	PROD: 'https://konsolidasi.codeoffice.net',
};

export {
	FETCH_DATA,
	LOGIN,
	FETCH_DETAIL,
	API_URL,
	FETCH_USERS,
	FETCH_COA,
	FETCH_COA_DETAIL,
	FETCH_COA_GROUP,
	COA_EDIT,
};
