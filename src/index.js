/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';

import 'antd-mobile/dist/antd-mobile.css';

// redux store相关
import store, { history } from './store/store';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store} >
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'),
);
registerServiceWorker();
