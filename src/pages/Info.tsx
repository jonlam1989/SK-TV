//Routing
import { useParams } from 'react-router-dom';
//Components
import { Breadcrumb, Spinner } from '../components';
//custom hook
import useFetchSpecificSelection from '../hooks/useFetchSpecificSelection';

const Details: React.FC = () => {
	const { type, id } = useParams();
	console.log(type, id);

	const { state, loading, error } = useFetchSpecificSelection(`${type}`, `${id}`);
	console.log(state);

	if (error) return <div>Something went wrong...</div>;

	return (
		<main>
			{loading && <Spinner />}
			<Breadcrumb />
		</main>
	);
};

export default Details;
