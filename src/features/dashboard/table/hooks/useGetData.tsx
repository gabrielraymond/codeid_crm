import { NextRouter, useRouter } from 'next/router';
import { QueryClient } from 'react-query';
import { fetchUsers } from 'src/shared/api/fetch/table';
import useFetchHook from 'src/shared/api/useFetchHook';

/**
 * @param QueryClient
 * @param offset
 */

export const prefetchListQuery = async (
	queryClient: QueryClient,
	params: any,
) => {
	const fetchDataUsers = fetchUsers();
	await queryClient.prefetchQuery(fetchDataUsers.key, fetchDataUsers.api);
};

/**
 * the optional inital data used for SSR
 */

const useGetData = (initialData?: any) => {
	const router: NextRouter = useRouter();
	const { query } = router;
	const page = query.page || 1;
	const offset = (+page - 1) * 10;

	const params = {
		...query,
		offset,
		limit: 10,
	};

	const fetchDataUsers = fetchUsers();
	const fetchQuery = useFetchHook({
		keys: fetchDataUsers.key,
		api: fetchDataUsers.api,
		initialData,
		option: {
			onError: (error: any) => {
				console.log('error', error.toString());
			},
			staleTime: 3000,
		},
	});

	// const getDefaultValueFilter = () => {
	// 	return {
	// 		filter: query?.filter,
	// 		search: query?.search,
	// 	};
	// };

	return {
		fetchQuery,
		// getDefaultValueFilter,
	};
};

export default useGetData;
