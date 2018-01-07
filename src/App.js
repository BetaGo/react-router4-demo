import React from 'react';
import { Provider } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';

import store, { history } from './store/store';

import Loadable from './components/common/Loadable';

const AsyncHome = Loadable({
	loader: () => import('./containers/Home'),
});
const AsyncWork = Loadable({
	loader: () => import('./containers/Work'),
});
const AsyncLogin = Loadable({
	loader: () => import('./containers/Login'),
});

const App = () => (
	<Provider store={store} >
		<Router history={history} >
			<div>
				<Link to="/home">Home</Link>
				<Link to="/work">work</Link>
				<Link to="/login">login</Link>
				<Route path="/home" component={AsyncHome} />
				<Route path="/work" component={AsyncWork} />
				<Route path="/login" component={AsyncLogin} />
			</div>
		</Router>
	</Provider>
);

export default App;
