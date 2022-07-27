import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
//Contexts
import { AuthContextProvider } from './context/authContext';
import { TopTenContextProvider } from './context/topTenContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<AuthContextProvider>
		<TopTenContextProvider>
			<App />
		</TopTenContextProvider>
	</AuthContextProvider>
);
