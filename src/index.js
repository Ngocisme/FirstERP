import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/styles/index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Provider } from 'react-redux';
import {store} from "./redux/configStore"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Provider store={store}>
                <App />
        </Provider>
);

