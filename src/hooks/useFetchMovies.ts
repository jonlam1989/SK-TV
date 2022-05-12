//Query
import { useInfiniteQuery } from 'react-query';
//API
import { fetchMovies } from '../api/api';

const useFetchMovies = () => {
	return useInfiniteQuery('movies', fetchMovies, {
		getNextPageParam: (lastPage, pages) => lastPage.page + 1
	});
};

export default useFetchMovies;
