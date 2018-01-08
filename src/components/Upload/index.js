/* global FormData */
import React from 'react';
import { ImagePicker, WingBlank, SegmentedControl, Button } from 'antd-mobile';
import axios from 'axios';

const data = [{
	url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
	id: '2121',
}, {
	url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
	id: '2122',
}];

class ImagePickerExample extends React.Component {
	state = {
		files: data,
		multiple: false,
	}
	onChange = (files, type, index) => {
		console.log(files, type, index);
		this.setState({
			files,
		});
	}
	onSegChange = (e) => {
		const index = e.nativeEvent.selectedSegmentIndex;
		this.setState({
			multiple: index === 1,
		});
	}

	onUpload = async () => {
		const params = new FormData();
		// const files = this.state.files.map(item => item.file);
		const { files } = this.state;
		for (let i = 0; i < files.length; i += 1) {
			if (files[i].file) {
				params.append('pic', files[i].file);
			}
		}
		console.log(params);
		try {
			const response = await axios({
				method: 'post',
				url: '/upload',
				data: params,
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			if (String(response.data.status) === '1') {
				console.log('上传成功');
			}
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		const { files } = this.state;
		return (
			<WingBlank>
				<SegmentedControl
					values={['切换到单选', '切换到多选']}
					selectedIndex={this.state.multiple ? 1 : 0}
					onChange={this.onSegChange}
				/>
				<ImagePicker
					files={files}
					onChange={this.onChange}
					onImageClick={(index, fs) => console.log(index, fs)}
					selectable={files.length < 5}
					multiple={this.state.multiple}
				/>
				<Button onClick={this.onUpload}>上传</Button>
			</WingBlank>
		);
	}
}

export default ImagePickerExample;
