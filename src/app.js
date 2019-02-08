import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {Provider}  from 'react-redux';
import Configurestore from './Configurestore';
import Trial from './components/Trials';

const store = Configurestore();
console.log('hi');

ReactDOM.render(<Provider store={store}><Trial /></Provider>, document.getElementById('app'));
  