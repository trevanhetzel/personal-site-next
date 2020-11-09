import withApollo from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useRouter } from 'next/router';

const Post = () => {

	const { slug } = useRouter().query;

	const { data } = useQuery(gql`
		query {
			postBy(slug: "${slug}") {
				title
				content
			}
		}
	`);

	const post = data?.postBy;

	return (
		<div>
			<h1>{post?.title}</h1>

			<article>
				<div dangerouslySetInnerHTML={{__html: post?.content}} />
			</article>
		</div>
	);
};

export default withApollo()(Post);
