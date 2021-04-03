import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Description } from './components/Description';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(<Description />, document.getElementById('test'));
