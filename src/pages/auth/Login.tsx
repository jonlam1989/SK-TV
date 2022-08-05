import { useState } from 'react';
//Routing
import { Link } from 'react-router-dom';
//Styles
import styles from './auth.module.scss';
//Hooks
import useLogin from '../../hooks/useLogin';

const Login = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const { loginUser } = useLogin();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		loginUser(email, password);
	};

	return (
		<form className={styles.loginFormContainer} onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div>
				<label>Email</label>
				<input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
			</div>

			<div>
				<label>Password</label>
				<input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
			</div>

			<div>
				<button type='submit'>Submit</button>
				<Link to={-1 as any}>Go back</Link>
			</div>
		</form>
	);
};

export default Login;
