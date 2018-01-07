import React from 'react';
import { Toast } from 'antd-mobile';

class LoadingPage extends React.Component {
	componentDidMount() {
		const { error } = this.props;
		if (error) {
			Toast.fail('加载失败');
		} else {
			Toast.loading('加载中', 0);
		}
	}

	componentWillUnmount() {
		Toast.hide();
	}

	render() {
		return null;
	}
}

export default LoadingPage;
