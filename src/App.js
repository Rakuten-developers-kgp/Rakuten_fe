import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Main from './Pages/Main';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>
        <Route exact path='/' element={<Main />}></Route>
      </Routes>
    </Router >
  );
}

export default App;
