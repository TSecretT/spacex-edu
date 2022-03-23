import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { Home, Updates, UpcomingLaunches } from './pages';

const App = () => {


	return (
		<Router>
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/upcoming-launches" element={ <UpcomingLaunches /> } />
				<Route path="/updates" element={ <Updates /> } />
			</Routes>
		</Router>
	)
}

export default App;
