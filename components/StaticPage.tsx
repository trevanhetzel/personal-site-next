import withApollo from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styles from './Page.module.scss';
import FeaturedMedia from './FeaturedMedia';

const StaticPage = (props) => {
	const featuredImage = props.post?.featuredImage?.node;

	const { data: custom_fields_data } = useQuery(gql`
		query {
			page(id: "${props.slug}", idType: URI) {
				about {
					section {
						content
						title
					}
				}
			}
		}
	`);

	const custom_fields = custom_fields_data?.page?.about?.section;

  return (
		<div>
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

			{custom_fields &&
				custom_fields.map((item) => {
					return (
						<div className={styles.wrapper}>
							<div className={styles.container}>
								<div className={styles.columns}>
									<h2 dangerouslySetInnerHTML={{ __html: item.title }} />

									<div dangerouslySetInnerHTML={{ __html: item.content }} />
								</div>
							</div>
						</div>
					);
				}
			)}
		</div>
	);
};

export default withApollo()(StaticPage);
