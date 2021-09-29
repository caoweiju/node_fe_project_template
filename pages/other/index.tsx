import React from 'react';
import ReactDOM from 'react-dom';
import Other from './other';
import './index.scss';

ReactDOM.render(<Other />, document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
  if ((module as any).hot) {
    (module as any).hot.accept();
  }
}
