import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


//This way of rendering is familiar with React v18 and allows for muliple versions of the same UI, new features and improvements
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
