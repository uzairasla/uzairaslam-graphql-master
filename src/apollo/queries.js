import { createClient } from 'urql';
import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = createClient({
  url: 'https://react.eogresources.com/graphql',
});

export const clientApollo = new ApolloClient({
  uri: 'https://react.eogresources.com/graphql',
  cache: new InMemoryCache(),
});

export const heartBeatQuery = gql`
  {
    heartBeat
  }
`;

export const dataQuery = gql`
  query($input: [MeasurementQuery!]!) {
    getMultipleMeasurements(input: $input) {
      metric
      measurements {
        at
        metric
        value
        unit
      }
    }
  }
`;
export const query = `
  {
    getMetrics
  }
`;
export const lastKnowMeasurementQuery = gql`
  query($metricName: String!) {
    getLastKnownMeasurement(metricName: $metricName) {
      at
      metric
      value
      unit
    }
  }
`;
