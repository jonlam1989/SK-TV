//Styles
import styles from './GridItem.module.scss';
//API
import { IMAGE_BASE_URL } from '../../api/api_urls';
//PNGs
import default_poster from '../../assests/images/default_poster.png';

//Types
type Props = {
	poster_path: string;
};

const GridItem: React.FC<Props> = ({ poster_path }) => {
	//uses a default poster, if no original poster is found
	const imgOnErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		e.currentTarget.src = default_poster;
	};

	return (
		<img
			className={styles.gridItemImage}
			src={`${IMAGE_BASE_URL}/${poster_path}`}
			alt='poster'
			onError={imgOnErrorHandler}
		/>
	);
};

export default GridItem;
