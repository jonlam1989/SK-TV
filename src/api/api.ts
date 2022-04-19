import { KOREAN_MOVIES, KOREAN_TV_SERIES, KOREAN_TOP_TEN_MOVIES, KOREAN_TOP_TEN_SERIES } from './api-urls';

const fetchURL = async () => {
	const response = await fetch(KOREAN_MOVIES);
	const data = await response.json();
	console.log(data);
};

export { fetchURL };
