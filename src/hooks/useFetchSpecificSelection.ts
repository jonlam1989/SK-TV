//Query
import { useQuery } from 'react-query';
//API
import { fetchSpecificSelection } from '../api/api';

const useFetchSpecificSelection = (type: string, id: string) => {
	return useQuery([ 'specific-selection', type, id ], () => fetchSpecificSelection(type, id));
};

export default useFetchSpecificSelection;
