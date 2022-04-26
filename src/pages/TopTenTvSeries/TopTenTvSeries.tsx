//Components
import { Grid, GridItem, HeroImage, Spinner } from '../../components';
//custom hook
import useFetchTopTenSeries from '../../hooks/useFetchTopTenSeries';

const TopTenTvSeries: React.FC = () => {
	const { state, loading, error } = useFetchTopTenSeries();
	console.log(state);

	if (error) return <div>Something went wrong...</div>;

	return (
		<main>
			{loading && <Spinner />}
			{state[0] && (
				<HeroImage backdrop_path={state[0].backdrop_path} title={state[0].name} overview={state[0].overview} />
			)}
			<Grid page='Top 10 TV Series'>
				{state.map((movie) => <GridItem key={movie.id} poster_path={movie.poster_path} />)}
			</Grid>
		</main>
	);
};

export default TopTenTvSeries;
