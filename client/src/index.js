import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataLayerProvider } from './context/Context';

ReactDOM.render(
  <React.StrictMode>
    <DataLayerProvider>
      <App />
    </DataLayerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
