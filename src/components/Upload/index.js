/* global FormData */
import React from 'react';
import { ImagePicker, WingBlank, SegmentedControl, Progress, Toast } from 'antd-mobile';
import axios from 'axios';

class ImagePickerExample extends React.Component {
	state = {
		files: [],
		multiple: false,
		showProgress: false,
		percent: 0,
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
				onUploadProgress: (progressEvent) => {
					if (progressEvent.lengthComputable) {
						this.showProgress(progressEvent);
					}
				},
			});
			if (String(response.data.status) === '1') {
				console.log('上传成功Lee乐乐乐');
			}
		} catch (e) {
			console.log(e);
		}
	}

	showProgress = (progressEvent) => {
		const { loaded, total } = progressEvent;
		const percent = (loaded / total) * 100;
		if (percent === 100) {
			Toast.success('上传成功');
		}
		if (percent > 0 && percent < 100) {
			this.setState({
				percent,
				showProgress: true,
			});
		} else {
			this.setState({
				percent: 0,
				showProgress: false,
			});
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
				<div
					onClick={this.onUpload}
					style={{
						width: '100px',
						height: '30px',
						background: '#aaa',
						borderRadius: '5px',
						cursor: 'pointer',
					}}
				>
					上传
				</div>
				<div style={{ display: this.state.showProgress ? 'block' : 'none' }}>
					<Progress percent={this.state.percent} position="fixed" />
				</div>
			</WingBlank>
		);
	}
}

export default ImagePickerExample;
