import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import Explore from './components/Explore';
// import List from './components/List';

// console.log('aaaaa');
render(<Explore value="value" onChange={() => {}} />, document.getElementById('root'));
render(<div>aaaaa</div>, document.getElementById('root'));

