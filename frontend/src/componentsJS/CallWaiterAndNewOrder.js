import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faBell } from '@fortawesome/free-solid-svg-icons';
import io from 'socket.io-client';
import '../componentsCSS/CallWaiterAndNewOrder.css'
const socket = io('http://localhost:3001'); // Sunucu adresini buraya girin

function CallWaiterAndNewOrder() {
  useEffect(() => {
    socket.on('waiterCalled', (data) => {
      alert(data.message);
    });

    socket.on('orderReceived', (data) => {
      alert(data.message + ' Sipariş Detayları: ' + JSON.stringify(data.order));
    });

    // Unmount işlemi sırasında socket'i kapat
    return () => {
      socket.disconnect();
    };
  }, []);

  const callWaiter = () => {
    socket.emit('callWaiter');
  };

  const placeOrder = () => {
    const order = {
      tableNumber: 3,
      items: ['Kahve', 'Kek']
    };
    socket.emit('newOrder', order);
    console.log(order);
  };

  return (
    <div className='component'>
      <button className='basked' onClick={callWaiter}>
        <FontAwesomeIcon className="icon" color='#ffd900' icon={faBasketShopping} />sepet
      </button>
      <button className='callWaiter' onClick={placeOrder}>
        <FontAwesomeIcon className="icon" color='#ffd900' icon={faBell} />garson çağır
      </button>
    </div>
  );
}

export default CallWaiterAndNewOrder;
