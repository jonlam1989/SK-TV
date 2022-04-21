//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import { Navbar } from './components';
import { Movie } from './pages';

const App: React.FC = () => {
	return (
		<Router>
			<Navbar />;
			<Routes>
				<Route path='/' element={<Movie />} />
			</Routes>
		</Router>
	);
};

export default App;
