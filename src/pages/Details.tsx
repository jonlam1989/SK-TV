//Components
import { Breadcrumb } from '../components';
//Routing
import { useParams } from 'react-router-dom';

const Details = () => {
	const { type, id } = useParams();
	console.log(type, id);

	return (
		<div>
			<Breadcrumb />
		</div>
	);
};

export default Details;
