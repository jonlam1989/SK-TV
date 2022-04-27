//Styles
import styles from './Button.module.scss';

//Types
type Props = {
	callback: () => void;
};

const Button: React.FC<Props> = ({ callback }) => {
	return (
		<div className={styles.button} onClick={callback}>
			Load More
		</div>
	);
};

export default Button;
