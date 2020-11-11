import React from "react";
import Link from 'next/link';
import styles from './Header.module.scss'
import Logo from "./svg/Logo";
import TwitterIcon from "./svg/Twitter";
import DribbbleIcon from "./svg/Dribbble";
import EmailIcon from "./svg/Email";
import SearchIcon from "./svg/Search";

const Header = () => {
	return (
		<div className={styles.container}>
			<Link href="/">
				<a><Logo /></a>
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

			<ul className={styles.icons}>
				<li className={styles.icon}>
					<Link href="https://twitter.com/trevanhetzel" target={ '_blank' }>
						<a><TwitterIcon /></a>
					</Link>
				</li>

				<li className={styles.icon}>
					<Link href="https://dribbble.com/TrevanHetzel" target={ '_blank' }>
						<a><DribbbleIcon /></a>
					</Link>
				</li>

				<li className={styles.icon}>
					<Link href="mailto:trevan@hetzelcreative.com" target={ '_blank' }>
						<a><EmailIcon /></a>
					</Link>
				</li>

				<li className={styles.icon}>
					<SearchIcon />
				</li>
			</ul>
		</div>
	);
};

export default Header;
