import React, { useState } from 'react';
import '../styles/MyAccount.css';

const userData = {
  name: 'your name',
  email: 'your email',
  contact: 'your phone #',
};

const orderHistoryData = [
  { orderId: '123', date: '2023-01-01', items: ['Objects & Variables Platter', 'Student Boot Camp Platter'], total: 25.99 },
  { orderId: '124', date: '2023-02-01', items: ['Algorithm Avocado Toast', 'HTML Hummus'], total: 19.99 },
];

const favoritesData = ['Syntax Salad', 'CSS Salad', 'Pseudo Salad'];

const paymentInfoData = {
  cardNumber: '**** **** **** 1234',
};

const loyaltyPointsData = {
  points: 50,
  rewards: ['Free Dessert', '10% Off Next Order'],
};

const MyAccount = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.reload();
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'orderHistory':
        return (
          <div>
            <h3>Order History</h3>
            <ul>
              {orderHistoryData.map((order) => (
                <li key={order.orderId}>
                  <span>Date: {order.date}</span>
                  <span>Items: {order.items.join(', ')}</span>
                  <span>Total: ${order.total.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'favorites':
        return (
          <div>
            <h3>Favorites</h3>
            <ul>
              {favoritesData.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        );
      case 'paymentInfo':
        return (
          <div>
            <h3>Payment Information</h3>
            <p>Card ending in {paymentInfoData.cardNumber.slice(-4)}</p>
          </div>
        );
      case 'loyaltyPoints':
        return (
          <div>
            <h3>Loyalty Points</h3>
            <p>Points: {loyaltyPointsData.points}</p>
            <ul>
              {loyaltyPointsData.rewards.map((reward, index) => (
                <li key={index}>{reward}</li>
              ))}
            </ul>
          </div>
        );

      default:
        return (
          <div>
            <h3>Profile Information</h3>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Contact: {userData.contact}</p>
          </div>
        );
    }
  };

  return (
    <div className="myaccount-container">
      <ul className="myaccount-tabs">
        <li onClick={() => setActiveTab('profile')}>Profile</li>
        <li onClick={() => setActiveTab('orderHistory')}>Order History</li>
        <li onClick={() => setActiveTab('favorites')}>Favorites</li>
        <li onClick={() => setActiveTab('paymentInfo')}>Payment Information</li>
        <li onClick={() => setActiveTab('loyaltyPoints')}>Loyalty Points</li>
      </ul>

      <div className="myaccount-content">{renderTabContent()}</div>

      <button className="myaccount-logout-btn" onClick={handleLogout}>
        Logout
      </button>
      <button className ="myaccount-close-btn" onClick={onClose}>Close</button>
    </div>
  );
};

export default MyAccount;
