import axios from 'axios';
//Routing
import { useNavigate } from 'react-router-dom';
//Context
import { useAuthContext } from '../context/authContext';

const useSignup = () => {
	const navigate = useNavigate();
	const { login } = useAuthContext();

	const signup = async (name: string, email: string, password: string) => {
		try {
			const response = await axios.post('https://sk-tv.herokuapp.com/auth/register', {
				name,
				email,
				password
			});
			console.log(response);

			const { token, user } = response.data;
			if (user) {
				localStorage.setItem('user', JSON.stringify({ user, token }));
				login(user);
				navigate('/sk-tv/community', { replace: true });
			}
		} catch (error) {
			console.log(error);
		}
	};

	return { signup };
};

export default useSignup;
