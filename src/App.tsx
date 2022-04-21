//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import { Navbar } from './components';
import { Movies, TvSeries } from './pages';

const App: React.FC = () => {
	return (
		<Router>
			<Navbar />;
			<Routes>
				<Route path='/' element={<Movies />} />
				<Route path='/tv-series' element={<TvSeries />} />
			</Routes>
		</Router>
	);
};

export default App;
