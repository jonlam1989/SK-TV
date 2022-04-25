//Components
import { HeroImage, Spinner } from '../../components';
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
		</main>
	);
};

export default TopTenTvSeries;
