import useFetchMovies from '../../hooks/useFetchMovies';

const Movies = () => {
	const { state, loading, error } = useFetchMovies();
	console.log(state);

	return <div>Movies</div>;
};

export default Movies;
