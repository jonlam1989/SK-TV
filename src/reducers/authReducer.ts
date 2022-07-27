const authReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'SIGNUP':
			return { user: action.payload };
		case 'LOGIN':
			return { user: action.payload };
		case 'LOGOUT':
			return { user: null };
		default:
			return state;
	}
};

export default authReducer;
