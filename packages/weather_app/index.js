import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import App from './App'
import App2 from './App2'
import singleSpaReact from 'single-spa-react';


const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App2,
});

export const {
  bootstrap,
  mount,
  unmount
} = lifecycles;