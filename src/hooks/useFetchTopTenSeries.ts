import { useState, useEffect } from 'react';
//API
import { fetchTopTenSeries } from '../api/api';
import { SpecificTvSeriesType } from '../api/api_types';
//data
import { imdbSeriesIds } from '../data/topTenSeriesList';

const initialState = [] as SpecificTvSeriesType[];

const useFetchTopTenSeries = () => {
	const [ state, setState ] = useState(initialState);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);

	//either store data from api in state or throw an error
	const getData = async () => {
		try {
			setLoading(true);
			setError(false);

			//use a temporary-data array to prevent multiple re-renders
			//if had used setState((prev)=>[...prev, specificMovie]):
			//    -there would have been a re-render for each iteration in the for-loop
			let tempData = [];
			for (let imdbID of Object.values(imdbSeriesIds)) {
				const specificMovie = await fetchTopTenSeries(imdbID);
				tempData.push(specificMovie);
			}
			setState([ ...tempData ]);

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

export default useFetchTopTenSeries;
