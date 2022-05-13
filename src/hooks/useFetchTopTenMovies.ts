//Queries
import { useQueries } from 'react-query';
//API
import { fetchTopTenMovies } from '../api/api';
//data
import { imdbMovieIds } from '../data/topTenMoviesList';

const useFetchTopTenMovies = () => {
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
