//Components
import { HeroImage } from '../../components';
//custom hook
import useFetchTvSeries from '../../hooks/useFetchTvSeries';

const TvSeries: React.FC = () => {
	const { state, loading, error } = useFetchTvSeries();
	console.log(state);

	if (error) return <div>Something went wrong...</div>;

	return (
		<main>
			{state.results[0] && (
				<HeroImage
					backdrop_path={state.results[0].backdrop_path}
					title={state.results[0].name}
					overview={state.results[0].overview}
				/>
			)}
		</main>
	);
};

export default TvSeries;
