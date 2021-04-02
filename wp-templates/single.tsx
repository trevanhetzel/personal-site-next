import React from 'react';
import { useGeneralSettings } from '@wpengine/headless/react';
import { usePost } from '@wpengine/headless/next';
import { Layout, Article } from '../components';

export default function Single(): JSX.Element {
  const post = usePost();

  return (
    <Layout secondary>
			<Article post={post} />
    </Layout>
  );
}
