import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import * as loginActions from '../../actions/actionCreator/login';

import Login from '../../components/Login';

const LoginContainer = (props) => {
	const { actions, data } = props;
	if (data.isLogin) {
		return <Redirect to="/home" />;
	}
	return <Login actions={actions} />;
};

export default connect(
	state => ({
		data: state.login,
	}),
	dispatch => ({
		actions: bindActionCreators(loginActions, dispatch),
	}),
)(LoginContainer);
