//custom hook
import useFetchTopTenSeries from '../../hooks/useFetchTopTenSeries';

const TopTenTvSeries = () => {
	const { state, loading, error } = useFetchTopTenSeries();
	console.log(state);

	return <div>Top Ten Tv Series</div>;
};

export default TopTenTvSeries;
