//Routing
import { Link } from 'react-router-dom';
//Styles
import styles from './Grid.module.scss';

//Types
type Props = {
	currPage: string;
	children: React.ReactNode;
};

const Grid: React.FC<Props> = ({ currPage, children }) => {
	return (
		<div className={styles.gridContainer}>
			<div className={styles.gridHeader}>
				<div className={styles.gridInfo}>
					<p>{currPage}</p>
					<small>(from South Korea)</small>
				</div>
				<div>
					<Link to={'/sk-tv/community'}>COMMUNITY</Link>
				</div>
			</div>
			<div className={styles.gridContent}>{children}</div>
		</div>
	);
};

export default Grid;
