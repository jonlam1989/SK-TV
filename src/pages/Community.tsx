//Components
import { Join, Dashboard, Posts } from '../components';
//Context
import { useAuthContext } from '../context/authContext';
//Hooks
import useFetchPosts from '../hooks/useFetchPosts';

const Community = () => {
	const { user } = useAuthContext();
	console.log(user);
	const { state: data } = useFetchPosts();
	console.log(data);

	return (
		<main>
			{!user && <Join />}
			{user && <Dashboard />}
			<Posts />
		</main>
	);
};

export default Community;
