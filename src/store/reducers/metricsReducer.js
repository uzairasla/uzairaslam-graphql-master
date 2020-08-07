import * as actions from '../actions';

const initialState = {
  list_metric_name: [],
  selected_metrics: [],
  metric_measurements: [],
};

const defineListMetrics = (state = initialState, action) => {
  const { getMetrics } = action;
  return {
    ...state,
    list_metric_name: getMetrics,
  };
};

const metricDataRecevied = (state = initialState, action) => {
  const { getMultipleMeasurements } = action;

  return {
    ...state,
    metric_measurements: getMultipleMeasurements,
  };
};

const selectListMetrics = (state = initialState, action) => {
  return {
    ...state,
    selected_metrics:
      action.metrics === null ? [] : action.metrics.length !== 0 ? action.metrics.map(metric => metric.label) : [],
  };
};

const handlers = {
  [actions.METRIC_DATA_RECEIVED]: metricDataRecevied,
  [actions.SELECT_LIST_METRICS]: selectListMetrics,
  [actions.DEFINE_LIST_METRICS]: defineListMetrics,
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === 'undefined') return state;
  return handler(state, action);
};
