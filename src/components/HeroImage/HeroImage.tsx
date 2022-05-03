import { useEffect, useRef } from 'react';
//Styles
import styles from './HeroImage.module.scss';
//API
import { IMAGE_BASE_URL } from '../../api/api_urls';

//Types
type Props = {
	backdrop_path: string;
	title: string;
	overview: string;
};

const HeroImage: React.FC<Props> = ({ backdrop_path, title, overview }) => {
	const containerRef = useRef<HTMLDivElement>(null);

	//set background to be an image
	useEffect(
		() => {
			if (containerRef.current) {
				containerRef.current.style.background = `url(${IMAGE_BASE_URL}${backdrop_path})`;
				containerRef.current.style.backgroundPosition = `center`;
				containerRef.current.style.backgroundSize = `cover`;
				containerRef.current.style.filter = 'brightness(0.9)';
			}
		},
		[ backdrop_path ]
	);

	return (
		<div className={styles.heroImageContainer} ref={containerRef}>
			<div className={styles.heroImageContent}>
				<h2>{title}</h2>
				<p>{overview}</p>
			</div>
		</div>
	);
};

export default HeroImage;
