//Styles
import styles from './Dashboard.module.scss';

const Dashboard = () => {
	const user_name = localStorage.getItem('user_name');

	return (
		<div className={styles.dashboardContainer}>
			<div className={styles.dashboardText}>
				<h1>WELCOME,</h1>
				<h1>{user_name}</h1>
				<p>
					Share and recommend your favorite movies/tv-series with others. Discuss the story plot, characters,
					and much more with your fellow members. Everyone is welcome here!
				</p>
			</div>
			<div />
			<hr />
		</div>
	);
};

export default Dashboard;
