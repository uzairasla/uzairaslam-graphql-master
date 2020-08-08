import React from 'react';
import MetricsCard from './MetricsCard';
import { useQuery, gql } from '@apollo/client';

const query = gql`
  query($metricName: String!) {
    getLastKnownMeasurement(metricName: $metricName) {
      at
      metric
      value
      unit
    }
  }
`;

function Metrics({ metricName }) {
  const { loading, error, data } = useQuery(query, {
    variables: { metricName },
    pollInterval: 1300,
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return <MetricsCard metricInfo={data.getLastKnownMeasurement} />;
}

export default Metrics;
