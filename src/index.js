import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QueryCache, ReactQueryCacheProvider, ReactQueryConfigProvider } from 'react-query';

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      suspense: false,
      retry: false,
      cacheTime: 5 * 60 * 1000,
    },
  },
});

const overrides = {
  queries: {
    suspense: false,
  },
  mutations: {
    suspense: false,
  },
};

ReactDOM.render(
  <ReactQueryCacheProvider queryCache={queryCache}>
    <ReactQueryConfigProvider config={overrides}>
      <App />
    </ReactQueryConfigProvider>
  </ReactQueryCacheProvider>,
  document.getElementById('root')
);
