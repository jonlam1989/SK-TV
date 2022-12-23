import { useState } from 'react';
import axios, { AxiosError } from 'axios';
//Routing
import { useNavigate } from 'react-router-dom';
//Context
import { useAuthContext } from '../context/authContext';

//Types
type ErrorObject = {
	status: string;
	error_message: string;
};

const useSignup = () => {
	const navigate = useNavigate();
	const { login } = useAuthContext();
	const [ error, setError ] = useState<ErrorObject>();

	const signupUser = async (name: string, email: string, password: string) => {
		try {
			const response = await axios.post('https://sk-tv-rest-api.vercel.app/auth/register', {
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
			//resource:
			//https://hashnode.com/post/how-to-use-axios-with-typescript-ckqi62md803s28us1baqyaj4u
			if (axios.isAxiosError(error)) {
				const serverError = error as AxiosError;
				let msg: any;
				if (serverError && serverError.response) {
					msg = serverError.response.data;
				}
				setError(msg);
			}
		}
	};

	return { signupUser, error };
};

export default useSignup;
