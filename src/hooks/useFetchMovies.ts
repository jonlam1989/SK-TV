import { useState, useEffect } from 'react';
//API
import { fetchMovies } from '../api/api';
import { MovieType } from '../api/api_types';

//set initialState to have the same properties as the returned object from the fetchMovies api
const initialState = {
	page: 0,
	results: [] as MovieType[],
	total_pages: 0,
	total_results: 0
};

const useFetchMovies = () => {
	const [ state, setState ] = useState(initialState);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);
	const [ loadMore, setLoadMore ] = useState(false);

	//either store data from api in state or throw an error
	const getData = async (page: number = 1) => {
		try {
			setLoading(true);
			setError(false);

			const data = await fetchMovies(page);
			setState((prev) => ({ ...data, results: [ ...prev.results, ...data.results ] }));

			setLoading(false);
		} catch (error) {
			setError(true);
			setLoading(false);
		}
	};

	//get data once the movie page loads
	useEffect(() => {
		getData();
	}, []);

	//get data when page changes
	useEffect(
		() => {
			if (loadMore) {
				getData(state.page + 1);
				setLoadMore(false);
			}
		},
		[ loadMore, state.page ]
	);

	return { state, loading, error, setLoadMore };
};

export default useFetchMovies;
