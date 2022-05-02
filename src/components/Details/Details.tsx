//Styles
import styles from './Details.module.scss';

//Types
type Props = {
	details: {};
	type: string;
};

const Details: React.FC<Props> = ({ details }) => {
	return <div className={styles.detailsContainer}>Details</div>;
};

export default Details;
