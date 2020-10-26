import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import singleSpaReact from 'single-spa-react';


const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
});

export const {
  bootstrap,
  mount,
  unmount
} = lifecycles;