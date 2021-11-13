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
import Explores from './Pages/Explores/Explores';
import Purchase from './Pages/Purchase/Purchase';
import PrivateRouter from './Pages/Login/PrivateRouter/PrivateRouter';
import AddService from './Pages/AddService/AddService';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import AddExplore from './Pages/AddExplore/AddExplore';
import Reviews from './Pages/Reviews/Reviews';
import Review from './Pages/DashBoard/Review/Review';
import MyOrders from './Pages/MyOrders/MyOrders';
import DeliveryMan from './Pages/DeliveryMan/DeliveryMan';
import About from './Pages/About/About';

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
          <PrivateRouter path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRouter>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>
          <Route path="/explores">
            <Explores></Explores>
          </Route>
          <Route path="/addservice">
            <AddService></AddService>
          </Route>
          <Route path="/addexplore">
            <AddExplore></AddExplore>
          </Route>
         <Route path="/review">
           <Review></Review>
         </Route>
         <Route path="/deliveryman">
           <DeliveryMan></DeliveryMan>
         </Route>
         <Route path="/about">
           <About></About>
         </Route>
          <PrivateRouter path="/purchase">
            <Purchase></Purchase> 
          </PrivateRouter>
          <PrivateRouter path="/myorders">
            <MyOrders></MyOrders>
          </PrivateRouter>
          
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
