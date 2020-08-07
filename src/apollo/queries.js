import { gql } from '@apollo/client';

export const getMetricsQuery = gql`
  {
    getMetrics
  }
`;
export const heartBeatQuery = gql`
  {
    heartBeat
  }
`;
export const multipleDataQuery = gql`
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
export const lastMeasurementQuery = gql`
  query($metricName: String!) {
    getLastKnownMeasurement(metricName: $metricName) {
      at
      metric
      value
      unit
    }
  }
`;
