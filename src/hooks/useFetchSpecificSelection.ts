import { useState, useEffect } from 'react';
//API
import { fetchSpecificSelection } from '../api/api';
import { SpecificMovieType, SpecificTvSeriesType2 } from '../api/api_types';

const initialState = {} as SpecificMovieType & SpecificTvSeriesType2;

const useFetchSpecificSelection = (type: string, id: string) => {
	const [ state, setState ] = useState(initialState);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);

	//either store data from api in state or throw an error
	const getData = async () => {
		try {
			setLoading(true);
			setError(false);

			const data = await fetchSpecificSelection(type, id);
			setState({ ...data });

			setLoading(false);
		} catch (error) {
			setError(true);
			setLoading(false);
		}
	};

	//get data once the page loads
	useEffect(() => {
		getData();
	}, []);

	return { state, loading, error };
};

export default useFetchSpecificSelection;
