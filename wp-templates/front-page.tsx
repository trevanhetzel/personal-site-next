import React from 'react';
import { usePosts, useGeneralSettings } from '@wpengine/headless/react';
import { GetStaticPropsContext } from 'next';
import { getApolloClient, getPosts } from '@wpengine/headless';
import { Layout, Hero, Posts } from '../components';

/**
 * Example of post variables to query the first six posts in a named category.
 * @see https://github.com/wpengine/headless-framework/tree/canary/docs/queries
 */
const firstSixInCategory = {
  variables: {
    first: 6
  },
};

export default function FrontPage(props: any): JSX.Element {
  const posts = usePosts(firstSixInCategory);
  const settings = useGeneralSettings();

  return (
    <Layout secondary>
      <Hero />

      <Posts
        posts={posts?.nodes}
      />
    </Layout>
  );
}

/**
 * Get additional data from WordPress that is specific to this template.
 *
 * Here we retrieve the latest six WordPress posts in a named category to
 * display at the bottom of the front page.
 *
 * @see https://github.com/wpengine/headless-framework/tree/canary/docs/queries
 */
export async function getStaticProps(context: GetStaticPropsContext) {
  const client = getApolloClient(context);
  await getPosts(client, firstSixInCategory);
}
