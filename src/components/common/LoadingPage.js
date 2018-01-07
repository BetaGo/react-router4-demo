import React from 'react';

const LoadingPage = (props) => {
	if (props.error) {
		return <div>加载出错了</div>;
	}
	return <div>加载中。。。</div>;
};

export default LoadingPage;
