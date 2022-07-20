//Routing
import { Link } from 'react-router-dom';
//Styles
import styles from './Signup.module.scss';

const Signup = () => {
	const handleSubmit = (e: any) => {
		e.preventDefault();
	};

	return (
		<form className={styles.formContainer} onSubmit={handleSubmit}>
			<h2>Sign Up!</h2>

			<div>
				<label>Email</label>
				<input type='email' name='email' />
			</div>

			<div>
				<label>Password</label>
				<input type='password' name='password' />
			</div>

			<div>
				<button type='submit'>Submit</button>
				<Link to={-1 as any}>Go back</Link>
			</div>
		</form>
	);
};

export default Signup;
