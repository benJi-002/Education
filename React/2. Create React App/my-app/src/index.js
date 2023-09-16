import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App(portals)'; //2
import styled from 'styled-components';
import {Button} from './App';


import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'; 

const BigButton = styled(Button)`
    margin: 0 auto;
    width: 245px;
    text-align: center;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
        <BigButton as="a">Отправить отчёт</BigButton>
    </StrictMode>
);