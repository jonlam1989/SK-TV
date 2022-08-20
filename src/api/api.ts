import axios from 'axios';
import {
	KOREAN_MOVIES,
	KOREAN_TV_SERIES,
	KOREAN_TOP_TEN_MOVIES,
	KOREAN_TOP_TEN_SERIES,
	SPECIFIC_SELECTION
} from './api_urls';

const fetchMovies = async ({ pageParam = 1 }) => {
	const response = await axios.get(`${KOREAN_MOVIES}&page=${pageParam}`);
	return response.data;
};
const fetchTopTenMovies = async (id: string) => {
	const url = KOREAN_TOP_TEN_MOVIES.replace('{id}', id);
	const response = await axios.get(url);
	return response.data;
};
const fetchTvSeries = async ({ pageParam = 1 }) => {
	const response = await axios.get(`${KOREAN_TV_SERIES}&page=${pageParam}`);
	return response.data;
};
const fetchTopTenSeries = async (id: string) => {
	const url = KOREAN_TOP_TEN_SERIES.replace('{id}', id);
	const response = await axios.get(url);
	return response.data.tv_results[0];
};
const fetchSpecificSelection = async (type: string, id: string) => {
	const url = SPECIFIC_SELECTION.replace('{type}', type).replace('{id}', id);
	const response = await axios.get(url);
	return response.data;
};
const fetchPosts = async () => {
	const response = await axios.get('https://sk-tv.herokuapp.com/posts');
	return response.data;
};

export { fetchMovies, fetchTopTenMovies, fetchTvSeries, fetchTopTenSeries, fetchSpecificSelection, fetchPosts };
