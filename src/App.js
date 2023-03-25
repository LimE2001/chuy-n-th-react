import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route , Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from "./components/Dashboard";
import Room from "./components/Room";
import Devices from './components/Devices';
import Statistic from './components/Statistics';
import Security from './components/Security';
import Logout from './components/Logout';
class App extends Component {
  render() {
    return (
      <div className='liem'>
        <div className='the-left'>
          <Navbar />
        </div>
        <div className='col the-right'>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="room" element={<Room />} />
            <Route path="devices" element={<Devices />} />
            <Route path="security" element={<Security />} />
            <Route path="statistic" element={<Statistic />} />
            <Route path="logout" element={<Logout />} />
          </Routes> 
        </div>
      </div>
    );
  };
};
export default App;