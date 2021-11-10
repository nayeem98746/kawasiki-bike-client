import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Services from './Pages/Services/Services';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Header from './Pages/Home/Header/Header';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
     <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
