import React from 'react';
import createStore from './store/index.js';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import { ApolloProvider } from '@apollo/client';
import SelectMetric from './components/SelectMetric';
import MetricsListed from './components/MetricsListed';
import 'bootstrap/dist/css/bootstrap.min.css';
import GraphRendering from './components/GraphRendering.js';
import { clientApollo } from './apollo/queries';

const store = createStore();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

const App = () => (
  <ApolloProvider client={clientApollo}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Wrapper>
          <Header />
          <div className="container">
            <div className="mt-5 d-flex justify-content-center">
              <SelectMetric />
            </div>
            <div className="d-flex justify-content-center">
              <MetricsListed />
            </div>
            <div className="mt-5 mb-5 d-flex justify-content-center">
              <GraphRendering />
            </div>
          </div>
        </Wrapper>
      </Provider>
    </MuiThemeProvider>
  </ApolloProvider>
);

export default App;
