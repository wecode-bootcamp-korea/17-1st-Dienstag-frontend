import React from 'react';
import ReactDOM from 'react-dom';
import { ProductProvider } from './context';
import Routes from './Routes';
import './Styles/common.scss';
import './Styles/reset.scss';

ReactDOM.render(
  <ProductProvider>
    <Routes />
  </ProductProvider>,
  document.getElementById('root')
);
