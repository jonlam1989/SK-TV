import { useEffect } from 'react';
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
	const { data, error, isLoading } = useFetchSpecificSelection(type, id);
	console.log(data);

	//when page loads, have page automatically scroll to the top
	useEffect(()=>{
		window.scrollTo(0, 0)
	}, [])

	if (error) return <div>Something went wrong...</div>;

	return (
		<main>
			{isLoading && <Spinner />}
			{data && (
				<>
					<Breadcrumb name={type === 'movie' ? data.title : data.name} />
					<Details
						poster_path={data.poster_path}
						overview={data.overview}
						genres={data.genres}
						score={data.vote_average}
						name={type === 'movie' ? data.title : data.name}
						date={type === 'movie' ? data.release_date : data.last_air_date}
						runtime={type === 'movie' ? data.runtime : undefined}
						status={type === 'tv' ? data.status : undefined}
					/>
				</>
			)}
		</main>
	);
};

export default Info;
