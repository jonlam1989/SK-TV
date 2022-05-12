//Components
import { Grid, GridItem, HeroImage, Spinner } from '../components';
//custom hook
import useFetchTopTenMovies from '../hooks/useFetchTopTenMovies';

const TopTenMovies: React.FC = () => {
	const { state, loading, error } = useFetchTopTenMovies();
	console.log(state);

	if (error) return <div>Something went wrong...</div>;

	return (
		<main>
			{loading && <Spinner />}
			{state[0] && (
				<>
					<HeroImage 
						backdrop_path={state[0].backdrop_path} 
						title={state[0].title} 
						overview={state[0].overview} 
					/>
					<Grid currPage='Top 10 Movies'>
						{state.map((movie) => 
							<GridItem 
								key={movie.id} 
								id={movie.id} 
								poster_path={movie.poster_path} 
								type='movie'
							/>
						)}
					</Grid>
				</>
			)}
		</main>
	);
};

export default TopTenMovies;
