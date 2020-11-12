import styles from './Page.module.scss';
import FeaturedMedia from './FeaturedMedia';

const Article = (props) => {
	const featuredImage = props.post?.featuredImage?.node;

  return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.columns}>
					<h1 dangerouslySetInnerHTML={{ __html: props.post?.title }} />

					<div>
						<div dangerouslySetInnerHTML={{ __html: props.post?.content }}></div>
						<FeaturedMedia image={featuredImage} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Article;
