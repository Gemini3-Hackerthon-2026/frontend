import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // 이미 만들어두신 css 파일을 불러옵니다

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);