import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const mockClient = new ApolloClient({
	link: new HttpLink({ uri: process.env.REACT_APP_MOCK_API_URL }),
	cache: new InMemoryCache(),
});
