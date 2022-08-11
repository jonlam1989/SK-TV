import { useState, useEffect } from 'react';
import axios from 'axios';

//Types
type PostObj = {
	author: string;
	createdAt: string;
	title: string;
	updatedAt: string;
	__v: number;
	_id: string;
};
type DataObj = {
	count: number;
	posts: PostObj[];
};

const useFetchPosts = () => {
	const [ state, setState ] = useState<DataObj>();
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);

	const getData = async () => {
		setLoading(true);
		setError(false);

		try {
			const response = await axios.get('https://sk-tv.herokuapp.com/posts');
			const data = response.data;
			setState(data);

			console.log('this is all the posts:');
			console.log(data);
		} catch (error) {
			setError(true);
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return { state, loading, error };
};

export default useFetchPosts;
