import React from 'react';
import { Provider } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';

// redux store相关
import store, { history } from './store/store';

// 私有路由，该路由下的组件需要授权后才能查看，若无权限会重定向到登录页面。
import PrivateRoute from './routes/PrivateRoute';

// 404页面
import NotFound from './components/404';

// 实现组件级别的动态加载
import Loadable from './components/common/Loadable';
// 以下组件将会动态加载
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
				<Switch>
					<Route path="/login" component={AsyncLogin} />
					<PrivateRoute path="/home" component={AsyncHome} />
					<PrivateRoute path="/work" component={AsyncWork} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	</Provider>
);

export default App;
