import { FETCH_COA_GROUP } from 'src/shared/constants/endpoint';
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

const fetchCoaGroup = (params: string): Props => {
	const header = { headers: { Authorization: `Bearer ${token}` } };
	return {
		key: ['COA-GROUP', 'QUERY', params],
		api: async () => {
			const res = await AxiosInstance.get(FETCH_COA_GROUP(params), header);
			if (!res) {
				throw new Error('Something wrong');
			}

			return res?.data;
		},
	};
};

export { fetchCoaGroup };
