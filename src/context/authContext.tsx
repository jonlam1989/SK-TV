import { createContext, useContext, useReducer } from 'react';
// Reducer
import authReducer from '../reducers/authReducer';

//Types
type UserObject = {
	[key: string]: string;
};
type AuthContextValue = {
	user: UserObject | null;
	signup: (value: UserObject) => void;
	login: (value: UserObject) => void;
	logout: (value: UserObject) => void;
};

const AuthContext = createContext<AuthContextValue>({
	user: null,
	signup: () => {},
	login: () => {},
	logout: () => {}
});

const initialState = {
	user: null
};
const AuthContextProvider = ({ children }: any) => {
	const [ state, dispatch ] = useReducer(authReducer, initialState);

	const signup = (user: UserObject) => dispatch({ type: 'SIGNUP', payload: user });
	const login = (user: UserObject) => dispatch({ type: 'LOGIN', payload: user });
	const logout = () => dispatch({ type: 'LOGOUT' });

	return <AuthContext.Provider value={{ ...state, signup, login, logout }}>{children}</AuthContext.Provider>;
};

//custom hook
const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };
