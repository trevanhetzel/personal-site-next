import withApollo from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Posts from '../components/Posts';

const Home = () => {
	const { data } = useQuery(gql`
		query {
			posts {
				nodes {
					id
					title
					slug
					excerpt
					date
				}
			}
		}
	`);

	const posts = data?.posts?.nodes;

	return (
		<Layout>
			<Hero />

			<Posts posts={posts} />
		</Layout>
	);
};

export default withApollo()(Home);
