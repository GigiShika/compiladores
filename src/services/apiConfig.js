const API_URL = process.env.REACT_APP_GRAPHQL_API_URL;

export default API_URL;

export function getGraphqlApiUrl() {
  const configuredUrl = process.env.REACT_APP_GRAPHQL_API_URL?.trim();

  if (configuredUrl) {
    return configuredUrl;
  }

  return '/graphql';
}

export function shouldUseMockGuion() {
  return process.env.REACT_APP_USE_MOCK_GUION === 'true';
}
