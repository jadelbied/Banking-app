import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages';
import NavHero from './components/navhero';
import Registration from './pages/register';
import NavBar from './components/Header';
import Index from './pages';
import { Content } from './pages/Content';
import CustomerManagement from './pages/Agentguichet/CustomerManagement';
import NotFound from './pages/notfound';
import DataTable from './components/AgentGuichet/table';
import BankAccountManagement from './pages/Agentguichet/BankAccountMangement';
import Profile from './pages/profile';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<NavHero />} />
          {/* <Route path='/index' element={<Index />} /> */}
          <Route path='/profile' element={<Profile />} />
          <Route path='/home' element={<Content />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/nav' element={<NavBar />} />
          <Route path='/customermg' element={<CustomerManagement />} />
          <Route path='/bankaccountmg' element={<BankAccountManagement />} />
          <Route path='/table' element={<DataTable />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
