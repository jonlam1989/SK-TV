//Queries
import { useQueries } from 'react-query';
//API
import { fetchTopTenMovies } from '../api/api';
//custom hook
import { useTopTenContext } from '../context/topTenContext';

const useFetchTopTenMovies = () => {
	const { imdbMovieIds } = useTopTenContext();

	return useQueries(
		Object.values(imdbMovieIds).map((id) => {
			return {
				queryKey: [ 'top-ten-movies', id ],
				queryFn: () => fetchTopTenMovies(id)
			};
		})
	);
};

export default useFetchTopTenMovies;
