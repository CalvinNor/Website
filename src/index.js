import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import ReactGA from 'react-ga';
import './index.css'

ReactGA.initialize('UA-155530943-1');
ReactDOM.render(<App/>, document.getElementById('root'));
