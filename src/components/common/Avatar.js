import React from 'react';

import './Avatar.css';

const Avatar = ({ size = 40, src }) => {
	return (
		<span
			className="c-avatar"
			style={{ width: size, height: size }}
		>
			<img src={src} alt="avatar" />
		</span>
	);
};

export default Avatar;
