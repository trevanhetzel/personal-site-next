import React from 'react';
import { Layout } from '../components';

export default function Page(): JSX.Element {
  return (
    <Layout secondary>
			<p>
				The page you were looking for does not exist or is no longer
				available.
			</p>
		</Layout>
  );
}
