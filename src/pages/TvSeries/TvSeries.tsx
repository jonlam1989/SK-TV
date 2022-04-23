//custom hook
import useFetchTvSeries from '../../hooks/useFetchTvSeries';

const TvSeries = () => {
	const { state, loading, error } = useFetchTvSeries();
	console.log(state);

	return <div>Tv Series</div>;
};

export default TvSeries;
