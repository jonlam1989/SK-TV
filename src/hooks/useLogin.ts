import axios from 'axios';
//Routing
import { useNavigate } from 'react-router-dom';
//Context
import { useAuthContext } from '../context/authContext';

const useLogin = () => {
	const { login } = useAuthContext();
	const navigate = useNavigate();

	const loginUser = async (email: string, password: string) => {
		try {
			const response = await axios.post('https://sk-tv.herokuapp.com/auth/login', {
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

	return { loginUser };
};

export default useLogin;
