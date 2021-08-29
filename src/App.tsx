import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import { Home, Updates, UpcomingLaunches } from './pages';
import { Header } from './components';

const App = () => {


	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={ Home } />
				<Route exact path="/upcoming-launches" component={ UpcomingLaunches } />
				<Route exact path="/updates" component={ Updates } />
			</Switch>
		</Router>
	)
}

export default App;
