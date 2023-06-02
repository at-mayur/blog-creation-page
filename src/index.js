import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CreateBlogProvider from './providers/createBlogProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Provider to use state within nested children */}
    <CreateBlogProvider>
      <App />
    </CreateBlogProvider>
  </React.StrictMode>
);


