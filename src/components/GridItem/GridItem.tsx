//Styles
import styles from './GridItem.module.scss';
//Routing
import { Link } from 'react-router-dom';
//API
import { IMAGE_BASE_URL } from '../../api/api_urls';
//PNGs
import default_poster from '../../assests/images/default_poster.png';

//Types
type Props = {
	id: number;
	poster_path: string;
};

const GridItem: React.FC<Props> = ({ id, poster_path }) => {
	//uses a default poster, if no original poster is found
	const imgOnErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		e.currentTarget.src = default_poster;
	};

	return (
		<Link to={`/${id}`}>
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
