import React from 'react';
import Metrics from './Metrics';
import { useSelector } from 'react-redux';
import { Provider } from 'urql';
import { client } from '../apollo/queries';

const getSelectedMetrics = state => {
  const { metric } = state;
  return metric.selected_metrics;
};

export default () => {
  return (
    <Provider value={client}>
      <MetricsListed />
    </Provider>
  );
};

const MetricsListed = () => {
  const selected_metrics = useSelector(getSelectedMetrics);

  if (selected_metrics.length === 0) {
    return <h3>Please select metrics to view</h3>;
  }
  return (
    <div>
      {selected_metrics.map((metric, i) => {
        return <Metrics key={i} metricName={metric} />;
      })}
    </div>
  );
};
