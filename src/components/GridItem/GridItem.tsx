//Styles
import styles from './GridItem.module.scss';
//API
import { IMAGE_BASE_URL } from '../../api/api_urls';

//Types
type Props = {
	poster_path: string;
};

const GridItem: React.FC<Props> = ({ poster_path }) => {
	return <img className={styles.gridItemImage} src={`${IMAGE_BASE_URL}/${poster_path}`} alt='poster' />;
};

export default GridItem;
