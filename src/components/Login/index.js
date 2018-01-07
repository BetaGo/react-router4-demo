import React from 'react';
import { List, InputItem, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

import Avatar from '../common/Avatar';

class Login extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((error, value) => {
			console.log(error, value);
			const { actions } = this.props;
			const { username, password } = value;
			actions.login(username, password);
		});
	}
	render() {
		const { getFieldProps } = this.props.form;
		return (
			<div>
				<Avatar
					size={50}
					src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
				/>
				<List>
					<WingBlank>
						<InputItem
							{...getFieldProps('username')}
							placeholder="请输入账号"
						>
							<div
								style={{
									backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)',
									backgroundSize: 'cover',
									height: '22px',
									width: '22px',
								}}
							/>
						</InputItem>
					</WingBlank>

					<WingBlank>
						<InputItem
							{...getFieldProps('password')}
							placeholder="请输入密码"
							type="password"
						>
							<div
								style={{
									backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)',
									backgroundSize: 'cover',
									height: '22px',
									width: '22px',
								}}
							/>
						</InputItem>
					</WingBlank>
					<WhiteSpace />

					<WingBlank>
						<Button
							type="primary"
							onClick={this.handleSubmit}
						>
							登录
						</Button>
					</WingBlank>
				</List>
			</div>
		);
	}
}

export default createForm()(Login);
