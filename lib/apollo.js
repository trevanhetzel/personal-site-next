import { withApollo } from 'next-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const apolloClient = new ApolloClient({
	uri: 'http://trevan.local/graphql',
	cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
