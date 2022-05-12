//Components
import { Button, Grid, GridItem, HeroImage, Spinner } from '../components';
//API
import { MovieType } from '../api/api_types';
//custom hook
import useFetchMovies from '../hooks/useFetchMovies';

const Movies: React.FC = () => {
	const { data, error, isLoading, isFetching, hasNextPage, fetchNextPage } = useFetchMovies();
	console.log(data);

	if (error) return <div>Something went wrong...</div>;

	return (
		<main>
			{isLoading && <Spinner />}
			{data?.pages[0].results[0] && (
				<>
					<HeroImage
						backdrop_path={data.pages[0].results[0].backdrop_path}
						title={data.pages[0].results[0].title}
						overview={data.pages[0].results[0].overview}
					/>
					<Grid currPage='Movies'>
						{data.pages.map((page) => (
							page.results.map((movie: MovieType) =>
								<GridItem 
									key={movie.id} 
									id={movie.id} 
									poster_path={movie.poster_path} 
									type='movie'
								/>
							)
						))}
					</Grid>
					{hasNextPage && (
						isFetching 
							? <Spinner replaceButton={true}/>
							: <Button callback={fetchNextPage}/>
						)
					}
				</>
			)}
		</main>
	);
};

export default Movies;
