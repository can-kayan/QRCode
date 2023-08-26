import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBasketShopping, faBell, faTable } from '@fortawesome/free-solid-svg-icons';
import '../componentsCSS/CallWaiterAndNewOrder.css'
import { Link, Route, Routes } from 'react-router-dom';
import BaskedPage from '../pagesJS/BaskedPage';

function CallWaiterAndNewOrder() {
  return (
    <div className='page'>
      <div className='component'>
        <Link to="/Orders" className='basked-link'>
        <button className='basked' >
        
          <FontAwesomeIcon className="icon"icon={faBasketShopping} /><p>Sepet</p>
       
        </button>
        </Link>
        <button className='callWaiter' >
          <FontAwesomeIcon className="icon" icon={faBell} /><p>Garson Çağır</p>
        </button>
        <button className='table-number'>
          <FontAwesomeIcon className='icon' icon={faTable}/><p>13</p>
        </button>
        
      </div>
      <Routes>
        <Route path='/Orders' exact Component={BaskedPage}/>        
      </Routes>
    </div>
  );
}

export default CallWaiterAndNewOrder;
