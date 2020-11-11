import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className={styles.container}>
			<p>
				&copy; 2020 Trevan Hetzel&nbsp;&nbsp;|&nbsp;&nbsp;Built with WordPress & Frontity on <Link href="#"><a>Flywheel</a></Link>&nbsp;&nbsp;|&nbsp;&nbsp;<Link href="#"><a>Source code</a></Link>
			</p>
		</div>
	);
};

export default Footer;
