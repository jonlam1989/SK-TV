//Routing
import { Link } from 'react-router-dom';
//Styles
import styles from './Breadcrumb.module.scss';

//Types
type Props = {
	name: string;
};

const Breadcrumb: React.FC<Props> = ({ name }) => {
	return (
		<div className={styles.breadcrumbContainer}>
			<Link to={-1 as any}>
				<span>Home</span>
			</Link>
			<span> | </span>
			<span>{name}</span>
		</div>
	);
};

export default Breadcrumb;
