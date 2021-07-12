import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './route/Home';
import Blogs from './route/Blogs';

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Blogs' exact component={Blogs} />
        </Switch>
      </Router>
  );
}

export default App;
