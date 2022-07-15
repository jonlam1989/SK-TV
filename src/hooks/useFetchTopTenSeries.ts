//Query
import { useQueries } from 'react-query';
//API
import { fetchTopTenSeries } from '../api/api';
//custom hook
import { useGlobalContext } from '../context/context';

const useFetchTopTenSeries = () => {
	const { imdbSeriesIds } = useGlobalContext();

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
