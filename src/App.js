import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './route/Home';
import BlogsContainer from './route/Blogs';
import BlogCardDetails from './components/BlogCardDetails';

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/blogs/:id' component={BlogCardDetails} />
          <Route path='/Blogs' exact component={BlogsContainer} />
        </Switch>
      </Router>
  );
}

export default App;
