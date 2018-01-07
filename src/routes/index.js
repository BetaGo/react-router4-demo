import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { checkAuthorize } from '../utils/authorize';

// 私有路由，该路由下的组件需要授权后才能查看，若无权限会重定向到登录页面。
import PrivateRoute from './PrivateRoute';

// 404页面
import NotFound from '../components/404';

// 实现组件级别的动态加载
import Loadable from '../components/common/Loadable';
// 以下组件将会动态加载
const AsyncHome = Loadable({
	loader: () => import('../containers/Home'),
});
const AsyncWork = Loadable({
	loader: () => import('../containers/Work'),
});
const AsyncLogin = Loadable({
	loader: () => import('../containers/Login'),
});

const Routes = () => (
	<div>
		<Route
			exact
			path="/"
			render={() => (
				checkAuthorize() ? (
					<Redirect to="/home" />
				) : (
					<Redirect to="/login" />
				)
			)}
		/>
		<Switch>
			<Route path="/login" component={AsyncLogin} />
			<PrivateRoute path="/home" component={AsyncHome} />
			<PrivateRoute path="/work" component={AsyncWork} />
			<Route component={NotFound} />
		</Switch>
	</div>
);

export default Routes;
