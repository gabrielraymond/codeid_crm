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
	let _email = '';
	const router = useRouter();

	const mutationQuery = useMutationHook({
		api: logIn,
		options: {
			onError: (error: any) => {
				console.log('error', error.toString());
				console.log('error from gabriel');
			},
			onSuccess: () => {
				console.log('success nih');
				Cookies.set('user', _email);
				router.replace(DASHBOARD_HOME);
			},
			throwOnError: () => {
				console.log('throw error');
			},
		},
	});

	const handleOnSubmit = async (email: string, password: string) => {
		_email = email;
		mutationQuery.mutate({
			email,
			password,
		});
	};

	return {
		mutationQuery,
		handleOnSubmit,
	};
};

export default useLoginForm;
