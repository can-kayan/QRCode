import '../componentsCSS//Header.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import HomePage from '../pagesJS/HomePage'
import BaskedPage from '../pagesJS/BaskedPage';
import CallWaiterAndNewOrder from './CallWaiterAndNewOrder';
import Foodspage from '../pagesJS/FoodsPage';
import DrinkPage from '../pagesJS/DrinkPage'
import ContactUs from '../pagesJS/ContactUs'
import AboutUs from '../pagesJS/AboutUs'
import Footer from './Footer';
function Header() {
  return (
    <div>
        <div className="header">
          <div className="logos">ttCafe</div>
          <nav className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/food">Food</Link></li> 
               <li><Link to="/drink">Drink</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
            </ul>
          </nav>
          
          </div>
          <CallWaiterAndNewOrder />
          <Routes>
            <Route path='/' exact Component={HomePage}/>     
            <Route path='/food' exact Component={Foodspage}/>
            <Route path='/drink' exact Component={DrinkPage}/>
            <Route path='/contact-us' exact Component={ContactUs}/>
            <Route path='/about-us' exact Component={AboutUs}/>
          </Routes>
          <Footer />  
      </div>
  );
}

export default Header;
