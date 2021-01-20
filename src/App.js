import HomePage from "./pages/HomePage";
import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResultsPage from "./pages/ResultsPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";


const  App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/signup'>
            <SignupPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/checkout'>
            <Header />
            <CheckoutPage />
          </Route>
          <Route path='/product/:id'>
            <Header />
            <ProductPage />
          </Route>
          <Route path='/results/:cat_id'>
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
