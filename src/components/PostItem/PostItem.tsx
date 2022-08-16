//Routing
import { Link } from 'react-router-dom';
//Styles
import styles from './PostItem.module.scss';
//Icons
import { BsFillChatRightTextFill } from 'react-icons/bs';
//Date Formatter
import moment from 'moment';

//Types
type Props = {
	id: string;
	createdAt: string;
	title: string;
	text: string;
};

const PostItem: React.FC<Props> = ({ id, createdAt, title, text }) => {
	const formattedDate = moment(createdAt).format('MMMM Do YYYY, h:mm:ss a');

	return (
		<Link to={'#'}>
			<div className={styles.postItemContainer}>
				<div className={styles.postItemIcon}>
					<BsFillChatRightTextFill />
				</div>
				<div className={styles.postItemContent}>
					<h4>{title}</h4>
					<small>({formattedDate})</small>
					<p>{text}</p>
				</div>
			</div>
		</Link>
	);
};

export default PostItem;
