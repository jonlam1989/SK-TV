//Types
export type MovieType = {
	adult: boolean;
	backdrop_path: string;
	genrer_ids: [];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type TvSeriesType = {
	backdrop_path: string;
	first_air_date: string;
	genre_ids: [];
	id: number;
	name: string;
	origin_country: [];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	vote_average: number;
	vote_count: number;
};

export type SpecificMovieType = {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: {};
	budget: number;
	genres: [];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: [];
	production_countries: [];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: [];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type SpecificTvSeriesType = {
	backdrop_path: string;
	first_air_date: string;
	genre_ids: [];
	id: number;
	name: string;
	origin_country: [];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	vote_average: number;
	vote_count: number;
};
