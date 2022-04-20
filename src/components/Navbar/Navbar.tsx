//Styles
import styles from './Navbar.module.scss';
//Icons
import tv_icon from '../../assests/images/tv_icon.svg';
import { BiMenuAltRight } from 'react-icons/bi';
import { RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
	return (
		<nav>
			<div className={styles.navBrand}>
				<h2>SK-TV</h2>
				<img src={tv_icon} alt='brand-logo' />
			</div>
			<div className={styles.navLinks}>
				<ul>
					<li>
						<a href='/'>Movies</a>
					</li>
					<li>
						<a href='/'>Top 10 Movies</a>
					</li>
					<li>
						<a href='/'>TV Shows</a>
					</li>
					<li>
						<a href='/'>Top 10 TV Shows</a>
					</li>
				</ul>
			</div>
			<div className={styles.navToggleMenu}>
				<BiMenuAltRight />
			</div>
		</nav>
	);
};

export default Navbar;
