import useFetchHook from 'src/shared/api/useFetchHook';
import { paramsToString } from 'src/shared/helpers/utils';
import { fetchCoa } from 'src/shared/api/fetch/coa/coa';
import { QueryClient } from 'react-query';
import { NextRouter, useRouter } from 'next/router';
import { useState } from 'react';
import { fetchCoaGroup } from 'src/shared/api/fetch/coa/coaGroup';

/**
 *
 * @param queryClient
 * @param offset
 */

export const prefetchCoaQuery = async (
	queryClient: QueryClient,
	params: any,
) => {
	const fetchDataCoa = fetchCoa(paramsToString(params));
	await queryClient.prefetchQuery(fetchDataCoa.key, fetchDataCoa.api);
};

/**
 * the optional initial data used for SSR
 * @param initialData
 */

export const useGetCoa = (initialData?: any) => {
	const [searchVal, setSearchVal] = useState<string>('');
	const [coaGroupFilter, setCoaGroupFilter] = useState<string[]>([]);
	const router: NextRouter = useRouter();
	const { query } = router;
	const page = query.page || 1;
	const offset = (+page - 1) * 10;
	const name: any = '';

	// const onSearch = (value: string) => {
	// 	console.log(value);
	// 	setSearchVal(value);
	// };

	const params = {
		...query,
		offset,
		page_size: 50,
		name: searchVal,
		coaGroupId: coaGroupFilter.length > 0 && coaGroupFilter[0],
	};

	/**
	 * use query
	 * with key of array combine based on params
	 */

	const fetchDataCoa = fetchCoa(paramsToString(params));

	const fetchQuery: any = useFetchHook({
		keys: fetchDataCoa.key,
		api: fetchDataCoa.api,
		initialData,
		option: {
			onError: (error: any) => {
				console.log('error', error.toString());
			},
		},
	});

	return {
		fetchQuery,
		setSearchVal,
		setCoaGroupFilter,
	};
};

// coa-group

/**
 *
 * @param queryClient
 * @param offset
 */

export const prefetchCoaGroupQuery = async (
	queryClient: QueryClient,
	params: any,
) => {
	const fetchDataCoaGroup = fetchCoaGroup(paramsToString(params));
	await queryClient.prefetchQuery(fetchDataCoaGroup.key, fetchDataCoaGroup.api);
};

/**
 * the optional initial data used for SSR
 * @param initialData
 */

export const useGetCoaGroup = (initialData?: any) => {
	const router: NextRouter = useRouter();
	const { query } = router;
	const page = query.page || 1;
	const offset = (+page - 1) * 10;

	// const onSearch = (value: string) => {
	// 	console.log(value);
	// 	setSearchVal(value);
	// };

	const params = {
		...query,
	};

	/**
	 * use query
	 * with key of array combine based on params
	 */

	const fetchDataCoaGroup = fetchCoaGroup(paramsToString(params));

	const fetchQueryCoaGroup: any = useFetchHook({
		keys: fetchDataCoaGroup.key,
		api: fetchDataCoaGroup.api,
		initialData,
		option: {
			onError: (error: any) => {
				console.log('error', error.toString());
			},
		},
	});

	return {
		fetchQueryCoaGroup,
	};
};
