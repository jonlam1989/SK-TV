import { useState, useEffect } from 'react';
//API
import { fetchTvSeries } from '../api/api';

//set initialState to have the same properties as the returned object from the fetchMovies api
const initialState = {
	page: 0,
	results: [],
	total_pages: 0,
	total_results: 0
};

const useFetchTvSeries = () => {
	const [ state, setState ] = useState(initialState);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);

	//either store data from api in state or throw an error
	const getData = async () => {
		try {
			setLoading(true);
			setError(false);

			const data = await fetchTvSeries();
			setState({ ...data });

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

	return { state, loading, error };
};

export default useFetchTvSeries;
