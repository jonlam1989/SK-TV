//Components
import { Button, Grid, GridItem, HeroImage, Spinner } from '../components';
//API
import { TvSeriesType } from '../api/api_types';
//custom hook
import useFetchTvSeries from '../hooks/useFetchTvSeries';

const TvSeries: React.FC = () => {
	const { data, error, isLoading, isFetching, hasNextPage, fetchNextPage } = useFetchTvSeries();
	console.log(data);

	if (error) return <div>Something went wrong...</div>;

	return (
		<main>
			{isLoading && <Spinner />}
			{data?.pages[0].results[0] && (
				<>
					<HeroImage
						backdrop_path={data.pages[0].results[0].backdrop_path}
						title={data.pages[0].results[0].name}
						overview={data.pages[0].results[0].overview}
					/>
					<Grid currPage='TV Series'>
						{data.pages.map((page) => (
							page.results.map((tv: TvSeriesType) => 
							<GridItem 
								key={tv.id} 
								id={tv.id} 
								poster_path={tv.poster_path} 
								type='tv'
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

export default TvSeries;
