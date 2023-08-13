// 1) Import React and RaectDOM libraries

import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID of root

const el = document.getElementById('root');

// 3) Tell react to get control of that element

const root = ReactDOM.createRoot(el);

// 4) Create component

function App() {
  return <h1>Hello!</h1>;
}

// 5) Show component on the screen

root.render(<App/>);
