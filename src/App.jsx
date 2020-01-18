import React from 'react';
import Featured from './components/Browse/Featured';
import Categories from './components/Browse/Categories';
import Discover from './components/Browse/Discover';
import New from './components/Browse/New';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './containers/Home';
import Search from './containers/Search';
import Library from './containers/Library';

function App() {
  return (
      <div className="App">
      	<Router>
      		<Switch>
      			<Route  path='/' exact > <Home /> </Route>
      			<Route  path='/Search'>  <Search /> </Route>
      			<Route  path='/library'> <Library/> </Route>

                <Route path='/browse/featured' component={ Featured } /> 
                <Route path='/browse/categories' component={ Categories } /> 
                <Route path='/browse/new-releases' component={ New } />
                <Route path='/browse/discover' component={ Discover} /> 


      		</Switch>
      	</Router>
        
      </div>
  );
}

export default App;
