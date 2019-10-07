import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './app.css';
import './list.css';
import './card.css';
import STORE from './store.js';

ReactDOM.render(<App store={STORE} />, document.getElementById('root'));