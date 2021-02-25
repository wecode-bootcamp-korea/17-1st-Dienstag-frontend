import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { ProductProvider } from './context';
import './Styles/common.scss';
import './Styles/reset.scss';

ReactDOM.render(
  <ProductProvider>
    <Routes />
  </ProductProvider>,
  document.getElementById('root')
);
