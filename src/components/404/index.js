import React from 'react';

import './index.css';

const NotFound = () => (
	<div className="c-404">
		<div className="c-404_code_area">
			<span style={{ color: '#777', fontStyle: 'italic' }} >
				{'// 页面不存在。'}
			</span>
			<span>
				<span style={{ color: '#d65562' }}>
					if
				</span>
				(<span style={{ color: '#4ca8ef' }}>!</span><span style={{ fontStyle: 'italic', color: '#bdbdbd' }}>found</span>)
				{'{'}
			</span>
			<span>
				<span style={{ paddingLeft: '15px', color: '#2796ec' }}>
					<i style={{ width: '10px', display: 'inline-block' }} />throw
				</span>
				<span>
					(<span style={{ color: '#a6a61f' }}>&quot;(╯°□°)╯︵ ┻━┻&quot;</span>);
				</span>
				<span style={{ display: 'block' }}>{'}'}</span>
			</span>
		</div>
	</div>
);

export default NotFound;
