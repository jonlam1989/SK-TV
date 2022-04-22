import { useState, useEffect, useRef } from 'react';
//Routing
import { NavLink } from 'react-router-dom';
//Styles
import styles from './Navbar.module.scss';
//Icons
import tv_icon from '../../assests/images/tv_icon.svg';
import { BiMenuAltRight } from 'react-icons/bi';
import { RiCloseLine } from 'react-icons/ri';

const Navbar: React.FC = () => {
	const [ showLinks, setShowLinks ] = useState(false);

	const menuContainerRef = useRef<HTMLDivElement>(null);
	const menuContentRef = useRef<HTMLUListElement>(null);

	//for menu animation
	useEffect(
		() => {
			const menuHeight : number | undefined = menuContentRef.current?.getBoundingClientRect().height;
			
			if (menuContainerRef.current) {
				showLinks
					? (menuContainerRef.current.style.height = `${menuHeight}px`)
					: (menuContainerRef.current.style.height = `0px`);
			}
		},
		[ showLinks ]
	);

	const menu: JSX.Element = (
		<ul className={styles.navMenuContent} ref={menuContentRef}>
			<li>
				<NavLink to='/'>Movies</NavLink>
			</li>
			<li>
				<NavLink to='/top-ten-movies'>Top 10 Movies</NavLink>
			</li>
			<li>
				<NavLink to='/tv-series'>TV Series</NavLink>
			</li>
			<li>
				<NavLink to='/top-ten-tv-series'>Top 10 TV Series</NavLink>
			</li>
		</ul>
	);

	return (
		<nav>
			<div className={styles.navBrand}>
				<h2>SK-TV</h2>
				<img src={tv_icon} alt='brand-logo' />
			</div>

			<div className={styles.navLinks}>{menu}</div>

			<div className={styles.navToggleMenu}>
				{showLinks ? (
					<RiCloseLine onClick={() => setShowLinks(false)} />
				) : (
					<BiMenuAltRight onClick={() => setShowLinks(true)} />
				)}
				
				<div className={styles.navMenuContainer} ref={menuContainerRef}>
					{menu}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
