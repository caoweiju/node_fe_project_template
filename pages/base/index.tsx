import React from 'react';
import ReactDOM from 'react-dom';
import Base from './base';
import './index.scss';

ReactDOM.render(<Base />, document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
  if ((module as any).hot) {
    (module as any).hot.accept();
  }
}
