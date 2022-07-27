import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

//Types
type IMDBObject = {
	[key: string]: string;
};
type IMDBContextValue = {
	imdbMovieIds: IMDBObject;
	imdbSeriesIds: IMDBObject;
};

const TopTenContext = createContext<IMDBContextValue>({
	imdbMovieIds: {},
	imdbSeriesIds: {}
});
const TopTenContextProvider = ({ children }: any) => {
	const [ imdbMovieIds, setImdbMovieIds ] = useState<IMDBObject>({});
	const [ imdbSeriesIds, setImdbSeriesIds ] = useState<IMDBObject>({});

	useEffect(() => {
		const getImdbMovieIds = async () => {
			try {
				const response = await axios.get('https://sk-tv.herokuapp.com/api/topmovies');
				const { data } = response;

				setImdbMovieIds({ ...data });
			} catch (error) {
				console.log(error);
			}
		};

		const getImdbSeriesIds = async () => {
			try {
				const response = await axios.get('https://sk-tv.herokuapp.com/api/toptvseries');
				const { data } = response;

				setImdbSeriesIds({ ...data });
			} catch (error) {
				console.log(error);
			}
		};

		getImdbMovieIds();
		getImdbSeriesIds();
	}, []);

	return <TopTenContext.Provider value={{ imdbMovieIds, imdbSeriesIds }}>{children}</TopTenContext.Provider>;
};

//custom hook
const useTopTenContext = () => useContext(TopTenContext);

export { TopTenContextProvider, useTopTenContext };
