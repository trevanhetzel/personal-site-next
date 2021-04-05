import Link from 'next/link';
import Button from './Button';
import styles from './Posts.module.scss';

export default function Posts(props: any): JSX.Element {
  return (
		<div className={styles.container}>
			<section className={styles.list}>
				{props.posts &&
					props.posts.map(post => {
						const date = new Date(post.date);

						return (
							<article className={styles.item} key={post.id}>
								<h2>
									<Link href="/[slug]" as={`/${post.slug}`}>
										<a>{post.title}</a>
									</Link>
								</h2>

								<p className={styles.date}>
									Posted on <strong>{date.toDateString()}</strong>
								</p>

								<Button text="Read article" url={post.slug} secondary arrow />
							</article>
						);
					}
				)}
			</section>
		</div>
  );
};
