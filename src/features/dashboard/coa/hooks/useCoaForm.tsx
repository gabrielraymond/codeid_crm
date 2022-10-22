import { useRouter } from 'next/router';
import useMutationHook from 'src/shared/api/useMutationHook';

import { coaEdit } from 'src/shared/api/mutation/coa/coa';
import { DASHBOARD_HOME } from 'src/shared/constants/path';
import Cookies from 'js-cookie';

/**
 * hook for login form
 * @returns {Object}
 */
export const useCoaEdit = () => {
    
	const mutationQuery = useMutationHook({
		api: coaEdit,
		options: {
			onError: (error: any) => {
				console.log('error', error.toString());
				console.log('error from gabriel');
			},
			onSuccess: (data: any) => {
				console.log('success nih');
				console.log(data.data);
			},
			throwOnError: () => {
				console.log('throw error');
			},
		},
	});

	// const token = Cookies.get('token');
	// token && router.replace(DASHBOARD_HOME)

	const handleOnSubmit = async (
		coa_group_id: any,
		code: string | undefined,
		name: string | undefined,
		id: any,
	) => {
		// _email = username;
		mutationQuery.mutate({
			coa_group_id,
			code,
			name,
			id,
		});
	};

	return {
		mutationQuery,
		handleOnSubmit,
	};
};
