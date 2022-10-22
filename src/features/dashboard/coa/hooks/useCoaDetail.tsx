import useFetchHook from 'src/shared/api/useFetchHook';
import { paramsToString } from 'src/shared/helpers/utils';
import { fetchCoaDetail } from 'src/shared/api/fetch/coa/coa';
import { QueryClient } from 'react-query';
import { NextRouter, useRouter } from 'next/router';

/**
 *
 * @param queryClient
 * @param offset
 */

export const prefetchCoaQuery = async (queryClient: QueryClient, id: any) => {
	const fetchDataCoaDetail = fetchCoaDetail(id);
	await queryClient.prefetchQuery(
		fetchDataCoaDetail.key,
		fetchDataCoaDetail.api,
	);
};

/**
 * the optional initial data used for SSR
 * @param initialData
 */

const useGetCoaDetail = (initialData?: any) => {
	const router: NextRouter = useRouter();
	// const { query } = router;
	const id: string = '';

	/**
	 * use query
	 * with key of array combine based on params
	 */
	const handleOpenDetail = async (id: string) => {
		id = id;
	};
	const fetchDataCoaDetail = fetchCoaDetail(id);
	const fetchQuery: any = useFetchHook({
		keys: fetchDataCoaDetail.key,
		api: fetchDataCoaDetail.api,
		initialData,
		option: {
			onError: (error: any) => {
				console.log('error', error.toString());
			},
			enabled: !!id,
		},
	});

	return {
		fetchQuery,
		handleOpenDetail,
	};
};

export default useGetCoaDetail;
