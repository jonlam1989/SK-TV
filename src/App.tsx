//Query
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import { Navbar } from './components';
import { Movies, TvSeries, TopTenMovies, TopTenTvSeries, Info, NotFound } from './pages';

const queryClient = new QueryClient();

const App: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/sk-tv' element={<Movies />} />
					<Route path='/sk-tv/tv-series' element={<TvSeries />} />
					<Route path='/sk-tv/top-ten-movies' element={<TopTenMovies />} />
					<Route path='/sk-tv/top-ten-tv-series' element={<TopTenTvSeries />} />
					<Route path='/sk-tv/:type/:id' element={<Info />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</Router>
			<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
		</QueryClientProvider>
	);
};

export default App;
