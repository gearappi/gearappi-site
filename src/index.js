import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "mobx-react";
import './index.css';
import App from './components/App';
import mainStore from "./stores/mainStore";
import optionsStore from "./stores/optionsStore";
import * as serviceWorker from './serviceWorker';

const stores = {
    mainStore,
    optionsStore,
    LocaleStore : mainStore.LocaleStore
};

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>,
    document.getElementById('app-root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
