//Queries
import { useQuery } from 'react-query';
//API
import { fetchPosts } from '../api/api';

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
	return useQuery<DataObj>([ 'Posts' ], () => fetchPosts());
};

export default useFetchPosts;
