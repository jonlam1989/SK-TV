import { KOREAN_MOVIES, KOREAN_TV_SERIES, KOREAN_TOP_TEN_MOVIES, KOREAN_TOP_TEN_SERIES } from './api_urls';

const fetchMovies = async () => {
	const response = await fetch(KOREAN_MOVIES);
	const data = await response.json();
	return data;
};
const fetchTopTenMovies = async (id: string) => {
	const url = KOREAN_TOP_TEN_MOVIES.replace('{id}', id);
	const response = await fetch(url);
	const data = await response.json();
	return data;
};
const fetchTvSeries = async () => {
	const response = await fetch(KOREAN_TV_SERIES);
	const data = await response.json();
	return data;
};
const fetchTopTenSeries = async (id: string) => {
	const url = KOREAN_TOP_TEN_SERIES.replace('{id}', id);
	const response = await fetch(url);
	const data = await response.json();
	const results = data.tv_results[0];
	return results;
};

export { fetchMovies, fetchTopTenMovies, fetchTvSeries, fetchTopTenSeries };
