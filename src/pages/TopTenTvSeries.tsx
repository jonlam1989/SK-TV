//Components
import { Grid, GridItem, HeroImage, Spinner } from '../components';
//API
import { SpecificTvSeriesType } from '../api/api_types';
//custom hook
import useFetchTopTenSeries from '../hooks/useFetchTopTenSeries';

const TopTenTvSeries: React.FC = () => {
	const data = useFetchTopTenSeries();
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
					title={data[0].data.name}
					overview={data[0].data.overview}
				/>
			)}
			{allSuccessful && (
				<Grid currPage='Top 10 TV Series'>
					{data.map((query) => {
						const tv: SpecificTvSeriesType = query.data;

						return <GridItem key={tv.id} id={tv.id} poster_path={tv.poster_path} type='tv' />;
					})}
				</Grid>
			)}
		</main>
	);
};

export default TopTenTvSeries;
