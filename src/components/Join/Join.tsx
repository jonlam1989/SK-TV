//Routing
import { Link } from 'react-router-dom';
//Styles
import styles from './Join.module.scss';

const Join = () => {
	return (
		<div className={styles.joinContainer}>
			<div className={styles.joinText}>
				<h1>JOIN THE</h1>
				<h1>COMMUNITY</h1>
				<p>
					Share and recommend your favorite movies/tv-series with others. Discuss the story plot, characters,
					and much more with your fellow members. Everyone is welcome here!
				</p>
			</div>
			<div className={styles.joinButtons}>
				<Link to={'/sk-tv/login'}>Login</Link>
				<Link to={'/sk-tv/signup'}>Sign Up</Link>
			</div>
			<hr />
		</div>
	);
};

export default Join;
