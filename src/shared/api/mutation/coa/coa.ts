import { COA_EDIT } from 'src/shared/constants/endpoint';
import AxiosInstance from '../../axiosInstance';
import cookie from 'js-cookie';

const token = cookie.get('token');

interface Coa {
	coa_group_id: number;
	code: string;
	name: string;
}

const coaEdit = async (data: {
	coa_group_id: number;
	code: string;
	name: string;
	id: any;
}) => {
	// const header = { headers: { Authorization: `Bearer ${token}` } };
	const body: Coa = {
		coa_group_id: data.coa_group_id,
		code: data.code,
		name: data.name,
	};
	const res = await AxiosInstance.patch(COA_EDIT(data.id), body, {
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});
	return res?.data;
};

export { coaEdit };
