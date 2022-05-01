//Routing
import { Link } from 'react-router-dom';
//Styles
import styles from './GridItem.module.scss';
//PNGs
import default_poster from '../../assests/images/default_poster.png';
//API
import { IMAGE_BASE_URL } from '../../api/api_urls';

//Types
type Props = {
	id: number;
	poster_path: string;
	type: string;
};

const GridItem: React.FC<Props> = ({ id, poster_path, type }) => {
	//uses a default poster, if no original poster is found
	const imgOnErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		e.currentTarget.src = default_poster;
	};

	return (
		<Link to={`/${type}/${id}`}>
			<img
				className={styles.gridItemImage}
				src={`${IMAGE_BASE_URL}/${poster_path}`}
				alt='poster'
				onError={imgOnErrorHandler}
			/>
		</Link>
	);
};

export default GridItem;
