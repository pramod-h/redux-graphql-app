import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header.container';
import Home from './route/Home/Home.component';
import Users from './route/Users/Users.component'

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/Users' component={Users} />
        </Switch>
      </Router>
  );
}

export default App;
