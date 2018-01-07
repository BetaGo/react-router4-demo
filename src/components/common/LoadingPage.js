import React from 'react';
import { Toast } from 'antd-mobile';

class LoadingPage extends React.Component {
	componentWillUnmount() {
		Toast.hide();
	}
	render() {
		const { error } = this.props;
		if (error) {
			return (
				<div>
					{Toast.fail('加载失败')}
				</div>
			);
		}
		return (
			<div>
				{Toast.loading('加载中', 0)}
			</div>
		);
	}
}

export default LoadingPage;
