import axios from 'axios';
import qs from 'qs';

import * as types from '../actionTypes/login';
import { loginPost } from '../../api/user';

export const login = (username, password) => (
	async (dispatch) => {
		dispatch({
			type: types.LOGIN_POST_ON,
		});
		try {
			const response = await axios({
				method: 'post',
				url: loginPost,
				data: { username, password },
				transformRequest: [data => qs.stringify(data)],
			});
			const { status, msg } = response.data;
			if (String(status) === '1') {
				dispatch({
					type: types.LOGIN_POST_SUCCESS,
				});
			} else {
				dispatch({
					type: types.LOGIN_POST_ERROR,
					data: msg,
				});
			}
		} catch (e) {
			console.log(e);
		}
	}
);

