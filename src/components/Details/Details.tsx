//Styles
import styles from './Details.module.scss';
//PNGs
import default_poster from '../../assests/images/default_poster.png';
//API
import { IMAGE_BASE_URL } from '../../api/api_urls';
//helpers
import convertTime from '../../helpers/helpers';

//Types
type Props = {
	poster_path: string;
	overview: string;
	genres: [];
	score: number;
	name: string;
	date: string;
	runtime?: number; //optional
	status?: string; //optional
};

const Details: React.FC<Props> = ({ poster_path, overview, genres, score, name, date, runtime, status }) => {
	//uses a default poster, if no original poster is found
	const imgOnErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		e.currentTarget.src = default_poster;
	};
	
	return (
		<div className={styles.detailsContainer}>
			<div className={styles.detailsImg}>
				<img src={poster_path ? `${IMAGE_BASE_URL}${poster_path}` : ''} alt='poster' onError={imgOnErrorHandler}/>
			</div>
			<div className={styles.detailsText}>
				<div>
					<h2>{name}</h2>
					<p>{date}</p>
				</div>
				<div>
					<h3>Overview</h3>
					<p>{overview}</p>
				</div>
				<div>
					<h3>Score</h3>
					<p>{score}</p>
				</div>
				<div>
					<h3>Genres</h3>
					<ul>
						{genres?.map(({ name: genre }, idx) => <li key={idx}>{genre}</li>)}
					</ul>
				</div>
				{runtime && (
					<div>
						<h3>Runtime</h3>
						<p>{convertTime(runtime)}</p>
					</div>
				)}
				{status && (
					<div>
						<h3>Status</h3>
						{status && <p>{status}</p>}
					</div>
				)}
			</div>
		</div>
	);
};

export default Details;
