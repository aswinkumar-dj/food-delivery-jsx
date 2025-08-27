import React from 'react';
import ReactDOM from 'react-dom/client';
const element = React.createElement(
    'h1',
    { style: { color: 'blue' } },
    'Hello, React.createElement!'
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(element);
