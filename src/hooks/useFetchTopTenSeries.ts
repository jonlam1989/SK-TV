//Query
import { useQueries } from 'react-query';
//API
import { fetchTopTenSeries } from '../api/api';
//data
import { imdbSeriesIds } from '../data/topTenSeriesList';

const useFetchTopTenSeries = () => {
	return useQueries(
		Object.values(imdbSeriesIds).map((id) => {
			return {
				queryKey: [ 'top-ten-series', id ],
				queryFn: () => fetchTopTenSeries(id)
			};
		})
	);
};

export default useFetchTopTenSeries;
