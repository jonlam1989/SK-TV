//Components
import { Dashboard, Join } from '../components';
//Context
import { useAuthContext } from '../context/authContext';

const Community = () => {
	const { user } = useAuthContext();
	console.log(user);

	return (
		<div>
			{!user && <Join />}
			{user && <Dashboard />}
		</div>
	);
};

export default Community;
