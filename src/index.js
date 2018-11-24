import React from 'react';
import ReactDOM from 'react-dom';
import Aps from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {Route,HashRouter} from 'react-router-dom';
const App = () => {
    return (
        //<Provider>
            <HashRouter>
                {Aps()}
            </HashRouter>        
       // </Provider>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
