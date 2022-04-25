//Styles
import styles from './Grid.module.scss';

//Types
type Props = {
	page: string;
};

const Grid: React.FC<Props> = ({ page }) => {
	return (
		<div className={styles.gridContainer}>
			<p>{page}</p>
		</div>
	);
};

export default Grid;
