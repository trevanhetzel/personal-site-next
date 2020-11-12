import withApollo from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Article from '../components/Article';
import Page from '../components/Page';

const Post = () => {
	const { slug } = useRouter().query;

	const { data } = useQuery(gql`
		query {
			postBy(slug: "${slug}") {
				title
				content
				date
				contentType {
					node {
						name
					}
				}
				featuredImage {
					node {
						srcSet
						sourceUrl
						title
					}
				}
			}
		}
	`);

	const post = data?.postBy;
	const post_type = post?.contentType.node.name;

	console.log(post?.featuredImage.node)

	return (
		<Layout>
			{post_type === 'page' &&
				<Page post={post} />
			}

			{post_type === 'post' &&
				<Article post={post} />
			}
		</Layout>
	);
};

export default withApollo()(Post);
