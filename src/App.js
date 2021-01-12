import HomePage from "./pages/HomePage";
import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResultsPage from "./pages/ResultsPage";
import ProductPage from "./pages/ProductPage";


const  App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/product'>
            <Header />
            <ProductPage />
          </Route>
          <Route path='/results'>
            <Header />
            <ResultsPage />
          </Route>
          <Route path='/'>
            <Header />
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
