import Home from "./pages/Home";
import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const  App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/category'>
            <Header />
            <p>I'm the category page</p>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
