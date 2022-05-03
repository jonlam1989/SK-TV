//Routing
import { useParams } from 'react-router-dom';
//Components
import { Breadcrumb, Details, Spinner } from '../components';
//API
import { MyParams } from '../api/api_types';
//custom hook
import useFetchSpecificSelection from '../hooks/useFetchSpecificSelection';

const Info: React.FC = () => {
	//used MyParams to prevent returning 'string | undefined'
	const { type, id } = useParams() as MyParams;
	const { state, loading, error } = useFetchSpecificSelection(type, id);
	console.log(state);

	if (error) return <div>Something went wrong...</div>;

	return (
		<main>
			{loading && <Spinner />}
			{state && (
				<>
					<Breadcrumb name={type === 'movie' ? state.title : state.name} />
					<Details
						poster_path={state.poster_path}
						overview={state.overview}
						genres={state.genres}
						score={state.vote_average}
						name={type === 'movie' ? state.title : state.name}
						date={type === 'movie' ? state.release_date : state.last_air_date}
						runtime={type === 'movie' ? state.runtime : undefined}
						status={type === 'tv' ? state.status : undefined}
					/>
				</>
			)}
		</main>
	);
};

export default Info;
