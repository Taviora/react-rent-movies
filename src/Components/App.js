import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import { NewGreeting} from './Greeting'
import { Movie } from './Movie'
import { Menu } from './Menu'
import { Principal } from './Principal'
import PageNotFound from './PageNotFound';


class App extends Component {


  render() {
   
    return (
      <Router>
        <div>
          <Menu></Menu>
          <Switch>
            <Route path="/" component={ Principal } exact/>
            <Route path="/greeting" component={ NewGreeting }/>
            <Route path="/movies" component={ Movie }/>
            <Route  component={ PageNotFound }/>
          </Switch>   
        </div>
      </Router>
       
    );
  }
}



export default App;
