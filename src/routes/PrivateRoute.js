import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { checkAuthorize } from '../utils/authorize';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => (
			checkAuthorize() ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/login',
						state: { from: props.location },
					}}
				/>
			)
		)}
	/>
);

export default PrivateRoute;
