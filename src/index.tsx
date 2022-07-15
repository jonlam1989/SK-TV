import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { AppProvider } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<AppProvider>
		<App />
	</AppProvider>
);
