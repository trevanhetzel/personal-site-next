import React from 'react';
import {
  NextTemplateLoader,
  getNextStaticPaths,
  getNextStaticProps,
} from '@wpengine/headless/next';

import WPTemplates from '../wp-templates/_loader';
import { GetStaticPropsContext } from 'next';

/**
 * @todo make conditionalTags available
 */
export default function Page() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return <NextTemplateLoader templates={ WPTemplates } />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    templates: WPTemplates,
  });
}

export function getStaticPaths() {
  return getNextStaticPaths();
}

// import withApollo from '../lib/apollo';
// import { useQuery } from '@apollo/react-hooks';
// import { gql } from 'apollo-boost';
// import { useRouter } from 'next/router';
// import Layout from '../components/Layout';
// import Article from '../components/Article';
// import Page from '../components/Page';

// const Post = () => {
// 	const { slug } = useRouter().query;

// 	const { data } = useQuery(gql`
// 		query {
// 			postBy(slug: "${slug}") {
// 				title
// 				content
// 				date
// 				contentType {
// 					node {
// 						name
// 					}
// 				}
// 				featuredImage {
// 					node {
// 						srcSet
// 						sourceUrl
// 						title
// 					}
// 				}
// 			}
// 		}
// 	`);

// 	const post = data?.postBy;
// 	const post_type = post?.contentType.node.name;

// 	return (
// 		<Layout secondary>
// 			{post_type === 'page' &&
// 				<Page post={post} slug={slug} />
// 			}

// 			{post_type === 'post' &&
// 				<Article post={post} />
// 			}
// 		</Layout>
// 	);
// };

// export default withApollo()(Post);








// import withApollo from '../lib/apollo';
// import { useQuery } from '@apollo/react-hooks';
// import { gql } from 'apollo-boost';
// import Layout from '../components/Layout';
// import Hero from '../components/Hero';
// import Posts from '../components/Posts';

// const Home = () => {
// 	const { data } = useQuery(gql`
// 		query {
// 			posts {
// 				nodes {
// 					id
// 					title
// 					slug
// 					excerpt
// 					date
// 				}
// 			}
// 		}
// 	`);

// 	const posts = data?.posts?.nodes;

// 	return (
// 		<Layout>
// 			<Hero />

// 			<Posts posts={posts} />
// 		</Layout>
// 	);
// };

// export default withApollo()(Home);
