import { useEffect } from 'react';
//Components
import { Join, Dashboard, Posts, PostItem, Spinner } from '../components';
//Context
import { useAuthContext } from '../context/authContext';
//Hooks
import useFetchPosts from '../hooks/useFetchPosts';

const Community = () => {
	const { user } = useAuthContext();
	const { data, error, isLoading } = useFetchPosts();
	console.log(data);

	useEffect(()=>{
		window.scrollTo(0,0)
	}, [])

	if (error) return <div>Something went wrong...</div>;

	return (
		<main>
			{!user && <Join />}
			{user && <Dashboard />}

			{isLoading && <Spinner/>}
			{!isLoading && data?.posts && (
				<Posts>
					{data.posts.map((post) => (
						<PostItem
							key={post._id}
							id={post._id}
							createdAt={post.createdAt}
							title={post.title}
							text={post.text}
						/>
					))}
				</Posts>
			)}
		</main>
	);
};

export default Community;
