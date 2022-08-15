//Styles
import styles from './Posts.module.scss';

//Types
type Props = {
	children: React.ReactNode;
};

const Posts: React.FC<Props> = ({ children }) => {
	return (
		<div className={styles.postsContainer}>
			<h2>Popular Posts</h2>
			<div className={styles.postsContent}>{children}</div>
		</div>
	);
};

export default Posts;
