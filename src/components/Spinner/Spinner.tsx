//Styles
import styles from './Spinner.module.scss';

//Types
type Props = {
	replaceButton?: boolean; //optional
};

const Spinner: React.FC<Props> = ({ replaceButton }) => {
	//using two versions:
	//one for the page to load & one for loading more movies/tv-series
	return <div className={replaceButton ? `${styles.spinner} ${styles.replaceButton}` : styles.spinner} />;
};

export default Spinner;
