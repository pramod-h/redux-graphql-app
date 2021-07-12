import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header.container';
import Home from './route/Home/Home.component';
import BlogsContainer from './route/Blogs/Blogs.container';

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Blogs' exact component={BlogsContainer} />
        </Switch>
      </Router>
  );
}

export default App;
