import { FETCH_COA, FETCH_COA_DETAIL } from 'src/shared/constants/endpoint';
import AxiosInstance from '../../axiosInstance';

import cookie from 'js-cookie';

const token = cookie.get('token');

type apiFn = () => Promise<any>;

type Props = {
	key: string[];
	api: apiFn;
};

/**
 *
 * @param params
 * @returns key for react query
 * @returns api function for the api
 */

const fetchCoa = (params: string): Props => {
	const header = { headers: { Authorization: `Bearer ${token}` } };
	return {
		key: ['COA', 'QUERY', params],
		api: async () => {
			const res = await AxiosInstance.get(FETCH_COA(params), header);
			if (!res) {
				throw new Error('Something wrong');
			}

			return res?.data;
		},
	};
};

const fetchCoaDetail = (id: string): Props => {
	const header = { headers: { Authorization: `Bearer ${token}` } };
	return {
		key: ['COA_DETAIL', 'QUERY', id],
		api: async () => {
			const res = await AxiosInstance.get(FETCH_COA_DETAIL(id), header);
			if (!res) {
				throw new Error('Something wrong');
			}

			return res?.data;
		},
	};
};

export { fetchCoa, fetchCoaDetail };
