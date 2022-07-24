//Components
import { Dashboard, Join } from '../components';

const Community = () => {
	const user_name = localStorage.getItem('user_name');

	return (
		<div>
			{user_name && <Dashboard />}
			{!user_name && <Join />}
		</div>
	);
};

export default Community;
