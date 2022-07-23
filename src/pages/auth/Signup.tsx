import { useState } from 'react';
import axios from 'axios';
//Routing
import { Link, useNavigate } from 'react-router-dom';
//Styles
import styles from './auth.module.scss';

const Signup = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			const response = await axios.post('https://sk-tv.herokuapp.com/auth/register', {
				name,
				email,
				password
			});
			console.log(response);

			navigate('/sk-tv/community', { replace: true });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form className={styles.signupFormContainer} onSubmit={handleSubmit}>
			<h2>Sign Up!</h2>

			<div>
				<label>Name</label>
				<input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
			</div>

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

export default Signup;
