import React, { useEffect } from 'react';
import styles from './Article.module.scss';
import prism from '../lib/vendor/prism.js';

const Article = (props) => {
	const date = new Date(props.post?.date);

	useEffect(() => {
		prism.highlightAll();
	}, []);

  return (
		<div className={styles.container}>
			<h1 dangerouslySetInnerHTML={{ __html: props.post?.title }} />

			<p className={styles.date}>
				Posted on <strong>{date.toDateString()}</strong>
			</p>

			<div className={styles.content} dangerouslySetInnerHTML={{ __html: props.post?.content }}></div>
		</div>
	);
};

export default Article;
