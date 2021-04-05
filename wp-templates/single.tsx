import React, { useEffect } from 'react';
import type { GetStaticPropsContext } from 'next';
import { gql } from '@apollo/client';
import { usePost, getNextStaticProps } from '@wpengine/headless/next';
import { Layout } from '../components';
import styles from '../components/Article.module.scss';

export default function Single(): JSX.Element {
  const post = usePost();
  console.log(post);

  return (
    <Layout secondary>
			<div className={styles.container}>
        <h1 dangerouslySetInnerHTML={{ __html: post?.title }} />

        {/* <p className={styles.date}>
          Posted on <strong>{date.toDateString()}</strong>
        </p> */}

        <div className={styles.content} dangerouslySetInnerHTML={{ __html: post?.content }}></div>
      </div>
    </Layout>
  );
}
