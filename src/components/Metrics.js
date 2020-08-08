import React from 'react';
import MetricsCard from './MetricsCard';
import { useQuery } from '@apollo/client';
import { lastKnowMeasurementQuery } from '../apollo/queries';

function Metrics({ metricName }) {
  const { loading, error, data } = useQuery(lastKnowMeasurementQuery, {
    variables: { metricName },
    pollInterval: 1300,
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return <MetricsCard metricInfo={data.getLastKnownMeasurement} />;
}

export default Metrics;
