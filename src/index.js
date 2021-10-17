import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './Components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);