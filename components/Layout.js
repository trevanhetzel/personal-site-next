import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => (
	<main>
		<Head>
			<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet" />
		</Head>

		<Header secondary={props.secondary} />

		{props.children}

		<Footer />
	</main>
);

export default Layout;
