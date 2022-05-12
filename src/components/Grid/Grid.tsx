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
				<p>{currPage}</p>
				<small>(from South Korea)</small>
			</div>
			<div className={styles.gridContent}>{children}</div>
		</div>
	);
};

export default Grid;
