import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Card from './components/Card/Card.js';
import PieChart from './components/PieChart/PieChart.js';
import Table from './components/Table/Table.js';
import Form from './components/Form/Form.js';
import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js';


const App = () => {
  return (
    <div>
    <Navbar/>
       <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/card" element={<Card />} />
          <Route path="/piechart" element={<PieChart />} />
          <Route path="/table" element={<Table />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    <Footer/>
    </div>

  );
};

export default App;