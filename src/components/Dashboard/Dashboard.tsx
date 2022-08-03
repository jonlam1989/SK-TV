//Styles
import styles from './Dashboard.module.scss';
//Context
import { useAuthContext } from '../../context/authContext';

const Dashboard = () => {
	const { user, logout } = useAuthContext();

	const logoutUser = () => {
		localStorage.removeItem('user')
		logout()
	};

	return (
		<div className={styles.dashboardContainer}>
			<div className={styles.dashboardText}>
				<h1>WELCOME,</h1>
				<h1>{user?.name}</h1>
				<p>
					Share and recommend your favorite movies/tv-series with others. Discuss the story plot, characters,
					and much more with your fellow members. Everyone is welcome here!
				</p>
			</div>
			<div className={styles.dashboardLogout}>
				<button onClick={logoutUser}>Log out</button>
			</div>
			<hr />
		</div>
	);
};

export default Dashboard;
