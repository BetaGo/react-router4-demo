import * as types from '../actions/actionTypes/login';
import { checkAuthorize } from '../utils/authorize';

const initialState = {
	isLogin: checkAuthorize(),
	loading: false,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.LOGIN_POST_ON:
			return {
				...state,
				loading: true,
			};

		case types.LOGIN_POST_SUCCESS:
			return {
				...state,
				loading: false,
				isLogin: true,
			};

		case types.LOGIN_POST_ERROR:
			return {
				...state,
				loading: false,
				isLogin: false,
			};
		default:
			return state;
	}
}
