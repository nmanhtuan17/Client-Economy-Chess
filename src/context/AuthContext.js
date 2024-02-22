import { createContext, useEffect, useReducer } from "react";

// Kiểm tra nếu có user trong localStorage
const initial_state = {
	user:
		localStorage.getItem("user") !== null
			? JSON.parse(localStorage.getItem("user"))
			: null,
	loading: false,
	error: null,
};

export const AuthContext = createContext(initial_state);

// quản lý các hành động liên quan đến đăng nhập
const AuthReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN_START":
			return {
				...state, // sao chép các giá trị cũ, chỉ thay đổi giá trị bị thay đổi
				loading: true,
				error: null,
			};
		case "LOGIN_SUCCESS":
			return {
				user: action.payload,
				loading: false,
				error: null,
			};
		case "LOGIN_FAILURE":
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case "REGISTER_SUCCESS":
			return {
				...state,
				loading: false,
				error: null,
			};
		case "LOGOUT":
			localStorage.removeItem("user"); // Xóa user từ localStorage khi logout
			return {
				...state,
				user: null,
			};
		default:
			return state;
	}
};

// cung cấp dữ liệu cho toàn bộ ứng dụng thông qua context AuthContext.
export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, initial_state);

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(state.user));
	}, [state.user]);

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				loading: state.loading,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
