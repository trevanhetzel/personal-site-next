import withApollo from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Link from 'next/link';

const Home = () => {

	const { data } = useQuery(gql`
		query {
			posts {
				nodes {
					id
					title
					slug
					excerpt
				}
			}
		}
	`);

	const posts = data?.posts?.nodes;

	return (
		<section>
			{posts &&
				posts.map(post => (
					<article key={post.id}>
						<h2>
							<Link href="/[slug]" as={`/${post.slug}`}>
								<a>{post.title}</a>
							</Link>
						</h2>
					</article>
				)
			)}
		</section>
	);
};

export default withApollo()(Home);
