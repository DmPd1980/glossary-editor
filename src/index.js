import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Импортируем компонент App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Рендерим компонент App */}
  </React.StrictMode>
);
