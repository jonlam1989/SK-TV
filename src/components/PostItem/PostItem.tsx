//Styles
import styles from './PostItem.module.scss';

//Types
type Props = {
	id: string;
	createdAt: string;
	title: string;
	text: string;
};

const PostItem: React.FC<Props> = ({ id, createdAt, title, text }) => {
	return <div className={styles.postItemContainer}>PostItem</div>;
};

export default PostItem;
