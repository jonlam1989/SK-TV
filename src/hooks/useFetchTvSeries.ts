//Query
import { useInfiniteQuery } from 'react-query';
//API
import { fetchTvSeries } from '../api/api';

const useFetchTvSeries = () => {
	return useInfiniteQuery('tv-series', fetchTvSeries, {
		getNextPageParam: (lastPage, pages) => lastPage.page + 1
	});
};

export default useFetchTvSeries;
