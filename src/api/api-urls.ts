const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;

//URLs for korean movies
const KOREAN_MOVIES = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=ko`;
const KOREAN_TOP_TEN_MOVIES = `${API_BASE_URL}/movie/{id}?api_key=${API_KEY}`;
// const KOREAN_TOP_TEN_MOVIES = `${API_BASE_URL}/movie/tt17491040?api_key=${API_KEY}`;

//URLs for korean tv series
const KOREAN_TV_SERIES = `${API_BASE_URL}/discover/tv?api_key=${API_KEY}&with_original_language=ko`;
const KOREAN_TOP_TEN_SERIES = `${API_BASE_URL}/find/{id}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`;
// const KOREAN_TOP_TEN_SERIES = `${API_BASE_URL}/find/tt14169960?api_key=${API_KEY}&language=en-US&external_source=imdb_id`;

export { KOREAN_MOVIES, KOREAN_TV_SERIES, KOREAN_TOP_TEN_MOVIES, KOREAN_TOP_TEN_SERIES };
