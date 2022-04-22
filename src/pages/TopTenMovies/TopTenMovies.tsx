//custom hook
import useFetchTopTenMovies from '../../hooks/useFetchTopTenMovies';

const TopTenMovies = () => {
	const { state, loading, error } = useFetchTopTenMovies();
	console.log(state);

	return <div>Top Ten Movies</div>;
};

export default TopTenMovies;
