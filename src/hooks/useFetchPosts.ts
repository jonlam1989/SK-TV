import { useState, useEffect } from 'react';
import axios from 'axios';

//Types
type PostObj = {
	author: string;
	createdAt: string;
	title: string;
	text: string;
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
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(false);

	const getData = async () => {
		setIsLoading(true);
		setError(false);

		try {
			const response = await axios.get('https://sk-tv.herokuapp.com/posts');
			const data = response.data;
			setState(data);
			setIsLoading(false);
		} catch (error) {
			setError(true);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return { state, isLoading, error };
};

export default useFetchPosts;
