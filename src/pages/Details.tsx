//Components
import { Breadcrumb } from '../components';
//Routing
import { useParams } from 'react-router-dom';

const Details = () => {
	const { id } = useParams();
	console.log(id);

	return (
		<div>
			<Breadcrumb />
		</div>
	);
};

export default Details;
