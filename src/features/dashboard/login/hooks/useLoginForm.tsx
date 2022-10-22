import { useRouter } from 'next/router';
import useMutationHook from 'src/shared/api/useMutationHook';

import { logIn } from 'src/shared/api/mutation/login';
import { DASHBOARD_HOME } from 'src/shared/constants/path';
import Cookies from 'js-cookie';

/**
 * hook for login form
 * @returns {Object}
 */
const useLoginForm = () => {
	// let _email = '';
	const router = useRouter();

	const mutationQuery = useMutationHook({
		api: logIn,
		options: {
			onError: (error: any) => {
				console.log('error', error.toString());
				console.log('error from gabriel');
			},
			onSuccess: (data: any) => {
				console.log('success nih');
				Cookies.set('token', `${data.data.token}`);
				// console.log(data.data.token)
				router.replace(DASHBOARD_HOME);
			},
			throwOnError: () => {
				console.log('throw error');
			},
		},
	});

	// const token = Cookies.get('token');
	// token && router.replace(DASHBOARD_HOME)

	const handleOnSubmit = async (username: string, password: string) => {
		// _email = username;
		mutationQuery.mutate({
			username,
			password,
		});
	};

	return {
		mutationQuery,
		handleOnSubmit,
	};
};

export default useLoginForm;
