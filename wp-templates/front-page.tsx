import React from 'react';
import { usePosts, useGeneralSettings } from '@wpengine/headless/react';
import { GetStaticPropsContext } from 'next';
import { getApolloClient, getPosts } from '@wpengine/headless';
import { useRouter } from 'next/router';
import { Layout, Hero, Posts } from '../components';
import { Pagination } from '@wpengine/headless/next';

// Gets paginated query options from the front page URL path.
const frontPageOptions = (url: string) => {
  const urlParts = url.split('/').filter(Boolean);
  const direction = urlParts[0];
  const id = urlParts[1];
  return {
    variables: {
      first: direction === 'after' || !direction ? 6 : undefined,
      last: direction === 'before' ? 6 : undefined,
      after: direction === 'after' ? id : undefined,
      before: direction === 'before' ? id : undefined,
    },
  };
};

export default function FrontPage(props: any): JSX.Element {
  const router = useRouter();
  const posts = usePosts(frontPageOptions(router.asPath));
  const settings = useGeneralSettings();

  return (
    <Layout secondary>
      <Hero />
      <Posts posts={posts?.nodes} />

      <div className="pagination-container">
        {posts?.pageInfo && <Pagination baseURL="" pageInfo={posts.pageInfo} />}
      </div>
    </Layout>
  );
}

/**
 * Get additional data from WordPress that is specific to this template.
 *
 * @see https://github.com/wpengine/headless-framework/tree/canary/docs/queries
 */
export async function getStaticProps(context: GetStaticPropsContext) {
  const client = getApolloClient(context);
  const path = Array.isArray(context?.params?.page)
    ? context?.params?.page.join('/')
    : '';
  await getPosts(client, frontPageOptions(path ?? ''));
}

