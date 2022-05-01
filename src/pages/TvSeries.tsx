//Components
import { Button, Grid, GridItem, HeroImage, Spinner } from '../components';
//custom hook
import useFetchTvSeries from '../hooks/useFetchTvSeries';

const TvSeries: React.FC = () => {
	const { state, loading, error, setLoadMore } = useFetchTvSeries();
	console.log(state);

	if (error) return <div>Something went wrong...</div>;

	return (
		<main>
			{loading && <Spinner />}
			{state.results[0] && (
				<>
					<HeroImage
						backdrop_path={state.results[0].backdrop_path}
						title={state.results[0].name}
						overview={state.results[0].overview}
					/>
					<Grid page='TV Series'>
						{state.results.map((tv) => 
							<GridItem 
								key={tv.id} 
								id={tv.id} 
								poster_path={tv.poster_path} 
								type='tv'
							/>
						)}
					</Grid>
					{state.page < state.total_pages && (
						loading 
							? <Spinner replaceButton={true}/>
							: <Button callback={()=>setLoadMore(true)}/>
						)
					}
				</>
			)}
		</main>
	);
};

export default TvSeries;
