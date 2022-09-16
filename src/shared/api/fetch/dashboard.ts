import { FETCH_DATA, FETCH_DETAIL } from 'src/shared/constants/endpoint';
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

const fetchDashboard = (params: string): Props => {
	return {
		key: ['DASHBOARD_LIST', 'QUERY', params],
		api: async () => {
			const res = await AxiosInstance.get(FETCH_DATA(params));
			if (!res) {
				throw new Error('Something wrong');
			}

			return res?.data;
		},
	};
};

const fetchDetail = (id: string): Props => {
	if (id) {
		return {
			key: ['DASHBOARD_DETAIL', 'QUERY', id],
			api: async () => {
				const res = await AxiosInstance.get(FETCH_DETAIL(id));
				if (!res) {
					throw new Error('Something wrong');
				}

				return res?.data;
			},
		};
	}

	return {
		key: [''],
		api: async () => {
			return false;
		},
	};
};
export { fetchDashboard, fetchDetail };
