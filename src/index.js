// 1) Import React and RaectDOM libraries

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) Get a reference to the div with ID of root

const el = document.getElementById('root');

// 3) Tell react to get control of that element

const root = ReactDOM.createRoot(el);

// 4) Show component on the screen

root.render(<App/>);
