import React from "react";
import Link from 'next/link';
import styles from './Header.module.scss'
import Logo from "./svg/Logo";
import TwitterIcon from "./svg/Twitter";
import DribbbleIcon from "./svg/Dribbble";
import EmailIcon from "./svg/Email";
import SearchIcon from "./svg/Search";

const Header = (props: any)=> {
	return (
		<div className={`${styles.container} ${props.secondary ? styles.orange : '' }`}>
			<Link href="/">
				<a><Logo white={props.secondary}/></a>
			</Link>

			<nav className={styles.nav}>
				<ul className={styles.nav__list}>
					<li className={styles.nav__item}>
						<Link href="/">
							<a>Articles</a>
						</Link>
					</li>

					<li className={styles.nav__item}>
						<Link href="/about">
							<a>About</a>
						</Link>
					</li>

					<li className={styles.nav__item}>
						<Link href="/">
							<a>Consulting</a>
						</Link>
					</li>
				</ul>
			</nav>

			<ul className={`${styles.icons} ${props.secondary ? styles.white : '' }`}>
				<li className={styles.icon}>
					<Link href="https://twitter.com/trevanhetzel">
						<a target="_blank"><TwitterIcon /></a>
					</Link>
				</li>

				<li className={styles.icon}>
					<Link href="https://dribbble.com/TrevanHetzel">
						<a target="_blank"><DribbbleIcon /></a>
					</Link>
				</li>

				<li className={styles.icon}>
					<Link href="mailto:trevan@hetzelcreative.com">
						<a target="_blank"><EmailIcon /></a>
					</Link>
				</li>

				{/* <li className={styles.icon}>
					<SearchIcon />
				</li> */}
			</ul>
		</div>
	);
};

export default Header;
