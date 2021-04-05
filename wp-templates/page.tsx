import React from 'react';
import { useGeneralSettings } from '@wpengine/headless/react';
import { usePost } from '@wpengine/headless/next';
import { Layout } from '../components';

export default function Page(): JSX.Element {
  const post = usePost();

  return (
    <Layout secondary>
       {/* <StaticPage post={post} /> */}
    </Layout>
  );
}
