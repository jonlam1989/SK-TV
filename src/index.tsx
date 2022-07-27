import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
//Contexts
import { AuthContextProvider } from './context/authContext';
import { AppProvider } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<AuthContextProvider>
		<AppProvider>
			<App />
		</AppProvider>
	</AuthContextProvider>
);
