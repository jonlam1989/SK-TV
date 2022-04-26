//Styles
import styles from './Grid.module.scss';

//Types
type Props = {
	page: string;
	children: React.ReactNode;
};

const Grid: React.FC<Props> = ({ page, children }) => {
	return (
		<div className={styles.gridContainer}>
			<p>{page}</p>
			<div className={styles.gridContent}>{children}</div>
		</div>
	);
};

export default Grid;
