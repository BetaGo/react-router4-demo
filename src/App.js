import React from 'react';
import { Link } from 'react-router-dom';

import Routes from './routes';

const App = () => (
	<div>
		<Link to="/home">Home</Link>
		<Link to="/work">work</Link>
		<Link to="/login">login</Link>
		<Routes />
	</div>
);

export default App;
