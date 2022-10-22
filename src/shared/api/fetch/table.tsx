import { FETCH_USERS } from 'src/shared/constants/endpoint';
import AxiosInstance from '../axiosInstance';

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

const fetchUsers = (): Props => {
	return {
		key: ['USER_LIST', 'QUERY'],
		api: async () => {
			const res = await AxiosInstance.get(FETCH_USERS());
			if (!res) {
				throw new Error('Something wrong');
			}

			return res?.data;
		},
	};
};

export { fetchUsers };
