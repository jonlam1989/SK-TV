import { useState } from 'react';
//Routing
import { Link } from 'react-router-dom';
//Styles
import styles from './auth.module.scss';

const Signup = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();

		console.log(name, email, password);
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
