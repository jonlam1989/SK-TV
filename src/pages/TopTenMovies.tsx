//Components
import { Grid, GridItem, HeroImage, Spinner } from '../components';
//API
import { SpecificMovieType } from '../api/api_types';
//custom hook
import useFetchTopTenMovies from '../hooks/useFetchTopTenMovies';

const TopTenMovies: React.FC = () => {
	const data = useFetchTopTenMovies();
	console.log(data);
	//check if the first query has finished loading successfully
	//the HeroImage will take about 3s to animate
	//which should give the rest of the queries some time to complete behind the scenes
	const { error, isLoading } = data[0];
	//check if all the queries have finished loading successfully
	const allSuccessful = data.every((query) => query.status === 'success');

	if (error) return <div>Something went wrong...</div>;

	return (
		<main>
			{isLoading && <Spinner />}
			{!isLoading && (
				<HeroImage
					backdrop_path={data[0].data.backdrop_path}
					title={data[0].data.title}
					overview={data[0].data.overview}
				/>
			)}
			{allSuccessful && (
				<Grid currPage='Top 10 Movies'>
					{data.map((query) => {
						const movie: SpecificMovieType = query.data;

						return <GridItem key={movie.id} id={movie.id} poster_path={movie.poster_path} type='movie' />;
					})}
				</Grid>
			)}
		</main>
	);
};

export default TopTenMovies;
