import { LOGIN } from 'src/shared/constants/endpoint';
import AxiosInstance from '../axiosInstance';

interface User {
	email: string;
	password: string;
}

const logIn = async (data: { email: string; password: string }) => {
	const body: User = {
		email: data.email,
		password: data.password,
	};
	const res = await AxiosInstance.post(
		LOGIN,
		body,
		{
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		},
	);
	return res?.data;
};

export { logIn };
