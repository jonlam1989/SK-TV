//Components
import { HeroImage, Spinner } from '../../components';
//custom hook
import useFetchTopTenMovies from '../../hooks/useFetchTopTenMovies';

const TopTenMovies: React.FC = () => {
	const { state, loading, error } = useFetchTopTenMovies();
	console.log(state);

	if (error) return <div>Something went wrong...</div>;

	return (
		<main>
			{loading && <Spinner />}
			{state[0] && (
				<HeroImage backdrop_path={state[0].backdrop_path} title={state[0].title} overview={state[0].overview} />
			)}
		</main>
	);
};

export default TopTenMovies;
