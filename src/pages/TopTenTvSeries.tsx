//Components
import { Grid, GridItem, HeroImage, Spinner } from '../components';
//custom hook
import useFetchTopTenSeries from '../hooks/useFetchTopTenSeries';

const TopTenTvSeries: React.FC = () => {
	const { state, loading, error } = useFetchTopTenSeries();
	console.log(state);

	if (error) return <div>Something went wrong...</div>;

	return (
		<main>
			{loading && <Spinner />}
			{state[0] && (
				<>
					<HeroImage backdrop_path={state[0].backdrop_path} title={state[0].name} overview={state[0].overview} />
					<Grid page='Top 10 TV Series'>
						{state.map((tv) => 
							<GridItem 
								key={tv.id} 
								id={tv.id} 
								poster_path={tv.poster_path} 
								type='tv'
							/>
						)}
					</Grid>
				</>
			)}
		</main>
	);
};

export default TopTenTvSeries;
